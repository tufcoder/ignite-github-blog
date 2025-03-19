import logoImg from '../../assets/Logo.svg'
import coverImg from '../../assets/Cover.svg'

import { ImageTitles } from '../../utils/enums'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer $cover={coverImg}>
      <img src={logoImg} alt={ImageTitles.Logo} width={148} height={98} />
    </HeaderContainer>
  )
}
