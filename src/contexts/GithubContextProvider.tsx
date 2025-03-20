import {
  ReactNode,
  useCallback,
  useEffect,
  useState
} from "react";
import { api } from "../lib/axios";

import { GithubContext } from "./GithubContext";

interface UserData {
  id: number
  login: string
  name: string
  bio: string
  company: string | null
  followers: number
  avatar_url: string
  html_url: string
}

interface IssueData {
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
}

// interface SearchIssueData {
//   items: IssueData[]
// }

export type GithubContextType = {
  user: UserData | null
  issues: IssueData[] | null
  searchIssues: (query: string) => Promise<void>
}

interface GithubContextProviderProps {
  children: ReactNode
}

export function GithubContextProvider({ children }: GithubContextProviderProps) {
  const LOCAL_STORAGE = import.meta.env.VITE_LOCAL_STORAGE
  const username = 'tufcoder' as const
  const repo = 'ignite-github-blog' as const

  const [user, setUser] = useState<UserData | null>(() => {
    const data = localStorage.getItem(LOCAL_STORAGE)
    if (data)
      return JSON.parse(data).user
    return null
  })

  const [issues, setIssues] = useState<IssueData[] | null>(() => {
    const data = localStorage.getItem(LOCAL_STORAGE)
    if (data)
      return JSON.parse(data).issues
    return null
  })

  const [searchResults, setSearchResults] = useState<IssueData[] | null>(null)

  const getUser = useCallback(
    async () => {
      try {
        const response = await api.get<UserData>(`/users/${username}`)
        const userData: UserData = {
          id: response.data.id,
          login: response.data.login,
          name: response.data.name,
          bio: response.data.bio,
          company: response.data.company,
          followers: response.data.followers,
          html_url: response.data.html_url,
          avatar_url: response.data.avatar_url,
        }
        setUser(userData)
      } catch (error) {
        console.error('Error fetching users', error)
      }
    },
    []
  )

  const getIssues = useCallback(
    async () => {
      try {
        const response = await api.get<IssueData[]>(
          `/repos/${username}/${repo}/issues`,
          {
            params: {
              labels: 'blog-post'
            }
          },
        )
        const issueData: IssueData[] = response.data
          .map(item => ({
            number: item.number,
            body: item.body,
            title: item.title,
            comments: item.comments,
            created_at: item.created_at,
            html_url: item.html_url
          }))
        setIssues(issueData)
      } catch (error) {
        console.error('Error fetching issues', error)
      }
    },
    []
  )

  // problemas com a requisição no axios, mudei abaixo para usar
  // a fetch api do navegador e está ok

  // const searchIssues = async (query: string) => {
  //   try {
  //     const encodedQuery = encodeURIComponent(`${query} repo:${username}/${repo} is:issue`)
  //     const response = await api.get(
  //       '/search/issues',
  //       {
  //         params: {
  //           q: encodedQuery,
  //           sort: 'desc',
  //         }
  //       }
  //     )
  //     console.log(response.data)
  //     if (response.data.items.length > 0) {
  //       const searchedIssues: IssueData[] = response.data.items
  //         .map((item: IssueData) => ({
  //           number: item.number,
  //           body: item.body,
  //           title: item.title,
  //           comments: item.comments,
  //           created_at: item.created_at,
  //           html_url: item.html_url
  //         }))
  //       setSearchResults(searchedIssues)
  //     } else {
  //       setSearchResults(null)
  //     }
  //   } catch (error) {
  //     console.error('Error searching issues', error)
  //   }
  // }

  const searchIssues = useCallback(
    async (query: string) => {
      try {
        const baseURL = import.meta.env.VITE_GITHUB_API_URL
        const token = import.meta.env.VITE_GITHUB_TOKEN
        const url = `${baseURL}/search/issues?q=${encodeURIComponent(`${query} repo:${username}/${repo} is:issue`)}`

        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
        })

        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        if (data.items.length > 0) {
          setSearchResults(data.items)
        }
      } catch (error) {
        setSearchResults(null)
        console.error('Error searching issues', error)
      }
    },
    []
  )

  useEffect(
    () => {
      // console.log('get data')
      getUser()
      getIssues()
    },
    [getIssues, getUser]
  )

  useEffect(() => {
    // console.log('set local storage')
    const data = JSON.stringify({
      user,
      issues,
    })
    localStorage.setItem(LOCAL_STORAGE, data)
  }, [LOCAL_STORAGE, issues, user])

  return (
    <GithubContext.Provider
      value={{
        user,
        issues: searchResults ?? issues,
        searchIssues,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
