import { Outlet } from 'react-router'

import { Header } from '../../components/Header'

import { DefaultContainer } from './styles'

export function DefaultLayout() {
  return (
    <DefaultContainer>
      <Header />
      <Outlet />
    </DefaultContainer>
  )
}
