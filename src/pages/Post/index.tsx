import { useCallback, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router'

import { Icons } from '../../components/Icons'
import { Link } from '../../components/Link'

import { api } from '../../lib/axios'
import { formatTimeBRL } from '../../utils/functions'

import {
  PostContainer,
  PostHeaderContainer,
  PostContentContainer,
  PostSocialsContainer,
} from './styles'

interface PostData {
  title: string
  body: string
  created_at: string
  comments: string
  html_url: string
  user: {
    login: string
  }
}

export function Post() {
  const { issue } = useParams<{ issue: string }>()
  const [post, setPost] = useState<PostData | null>(null)

  const getPostData = useCallback(
    async () => {
      try {
        const response = await api.get<PostData>(
          `/repos/tufcoder/ignite-github-blog/issues/${issue}`,
        )
        // console.log(response.data)
        setPost(response.data)
      } catch (error) {
        console.error(`Error fetching issue number: ${issue}`, error)
      }
    },
    [issue]
  )

  useEffect(
    () => {
      getPostData()
    }
    , [getPostData]
  )

  return (
    <PostContainer>
      <PostHeaderContainer>
        <div>
          <NavLink to="/">
            <span>
              <Icons icon="CaretLeft" size={12} />
              voltar
            </span>
          </NavLink>
          <Link text="ver no github" to={post?.html_url ?? ''} />
        </div>
        <h1>{post?.title}</h1>
        <PostSocialsContainer>
          <li>
            <Icons icon="GithubLogo" />
            {post?.user.login}
          </li>
          <li>
            <Icons icon="CalendarDot" />
            <span>
              {post?.created_at
                ? formatTimeBRL(new Date(post.created_at))
                : ''
              }
            </span>
          </li>
          <li>
            <Icons icon="ChatCircle" />
            {post?.comments ?? 0} comentários
          </li>
        </PostSocialsContainer>
      </PostHeaderContainer>
      <PostContentContainer>
        {post?.body}
      </PostContentContainer>
    </PostContainer>
  )
}
