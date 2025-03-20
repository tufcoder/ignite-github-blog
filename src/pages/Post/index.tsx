import { useContext } from 'react'
import { NavLink, useParams } from 'react-router'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { GithubContext } from '../../contexts/GithubContext'

import { Icons } from '../../components/Icons'
import { Link } from '../../components/Link'

import { formatTimeBRL } from '../../utils/functions'

import {
  PostContainer,
  PostHeaderContainer,
  PostContentContainer,
  PostSocialsContainer,
} from './styles'

export function Post() {
  const { issue } = useParams<{ issue: string }>()
  const { user, issues } = useContext(GithubContext)

  if (!issue) {
    return <div>Post não encontrado.</div>
  }

  if (!issues) {
    return <div>Carregando posts...</div>
  }

  const post = issues?.find(item => item.number === parseInt(issue))

  if (!post) {
    return <div>Post não encontrado.</div>
  }

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
            {user?.login}
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
            {post?.comments} comentários
          </li>
        </PostSocialsContainer>
      </PostHeaderContainer>
      <PostContentContainer>
        <Markdown
          remarkPlugins={[remarkGfm]}
        >
          {post?.body}
        </Markdown>
      </PostContentContainer>
    </PostContainer>
  )
}
