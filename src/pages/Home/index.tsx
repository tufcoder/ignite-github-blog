import { ChangeEvent, useCallback, useEffect, useState } from 'react'

import { Card } from '../../components/Card'
import { Icons } from '../../components/Icons'
import { Input } from '../../components/Input'
import { Link } from '../../components/Link'

import { api } from '../../lib/axios'

import {
  CardsContainer,
  ContentContainer,
  HeaderContainer,
  HomeContainer,
  ProfileContainer,
  SocialsContainer,
} from './styles'
import { NavLink } from 'react-router'

interface UserData {
  id: number
  name: string
  avatar_url: string
  html_url: string
  bio: string
  company: string | null
  followers: number
  login: string
}

interface IssueData {
  number: number
  title: string
  body: string
  created_at: string
  user: {
    login: string
  }
}

export function Home() {
  const [user, setUser] = useState<UserData | null>(null)
  const [posts, setPosts] = useState<IssueData[] | null>(null)

  const getUser = useCallback(
    async () => {
      if (user) return
      try {
        const response = await api.get<UserData>('/users/tufcoder')
        setUser(response.data)
      } catch (error) {
        console.error('Error fetching users', error)
      }
    },
    [user]
  )

  const getIssues = useCallback(
    async () => {
      if (posts) return
      try {
        const response = await api.get<IssueData[]>(
          '/repos/tufcoder/ignite-github-blog/issues?labels=blog-post',
        )
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching issues', error)
      }
    },
    [posts]
  )

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const articles = document.querySelectorAll('article')
    const search = event.currentTarget.value

    if (search !== '') {
      articles.forEach((article) => {
        const title = article
          .querySelector('h2')
          ?.textContent?.toLocaleLowerCase()
          .trim()
        const text = article
          .querySelector('p')
          ?.textContent?.toLocaleLowerCase()
          .trim()

        if (!title?.includes(search) && !text?.includes(search)) {
          article.style.display = 'none'
        } else {
          article.style.display = 'flex'
        }
      })
    } else {
      articles.forEach((article) => (article.style.display = 'flex'))
    }
  }

  useEffect(
    () => {
      getUser()
      getIssues()
    },
    [getIssues, getUser]
  )

  return (
    <HomeContainer>
      <HeaderContainer>
        <img src={user?.avatar_url} width={148} height={148} />
        <ProfileContainer>
          <h1>
            <Link text="github" to={user?.html_url ?? ''} />
            {user?.name}
          </h1>
          <p>{user?.bio}</p>
          <SocialsContainer>
            <li>
              <Icons icon="GithubLogo" />
              {user?.login}
            </li>
            <li>
              <Icons icon="Building" />
              {user?.company ?? 'Rocketseat Kappa'}
            </li>
            <li>
              <Icons icon="Users" />
              {user?.followers ?? 0} Seguidores
            </li>
          </SocialsContainer>
        </ProfileContainer>
      </HeaderContainer>
      <ContentContainer>
        <h2>
          Publicações
          <span>{posts?.length ?? 0} publicações</span>
        </h2>
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={handleInputChange}
        />
      </ContentContainer>
      <CardsContainer $totalCards={posts?.length ?? 0}>
        {posts?.map((post) => (
          <NavLink key={post.number} to={`/post/${post.number}`}>
            <Card title={post.title} date={post.created_at} text={post.body} />
          </NavLink>
        ))}
      </CardsContainer>
    </HomeContainer>
  )
}
