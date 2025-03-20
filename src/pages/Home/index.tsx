import { useContext } from 'react'
import { NavLink } from 'react-router'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { GithubContext } from '../../contexts/GithubContext'

import { Card } from '../../components/Card'
import { Icons } from '../../components/Icons'
import { Input } from '../../components/Input'
import { Link } from '../../components/Link'

import {
  CardsContainer,
  ContentContainer,
  HeaderContainer,
  HomeContainer,
  ProfileContainer,
  SocialsContainer,
} from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputType = z.infer<typeof searchFormSchema>

export function Home() {
  const { user, issues, searchIssues } = useContext(GithubContext)

  const {
    register,
    handleSubmit,
    reset
  } = useForm<SearchFormInputType>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchIssue(data: SearchFormInputType) {
    searchIssues(data.query)
    reset()
  }

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
      <ContentContainer onSubmit={handleSubmit(handleSearchIssue)}>
        <h2>
          Publicações
          <span>{issues?.length ?? 0} publicações</span>
        </h2>
        <Input
          type="text"
          placeholder="Digite um conteúdo e pressione ENTER"
          {...register('query')}
        />
      </ContentContainer>
      <CardsContainer $totalCards={issues?.length ?? 0}>
        {issues?.map((post) => (
          <NavLink key={post.number} to={`/post/${post.number}`}>
            <Card title={post.title} date={post.created_at} text={post.body} />
          </NavLink>
        ))}
      </CardsContainer>
    </HomeContainer>
  )
}
