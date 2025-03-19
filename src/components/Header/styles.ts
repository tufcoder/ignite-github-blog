import styled from 'styled-components'

import { above } from '../../styles/breakpoints'
import { pxToRem } from '../../styles/functions'

interface HeaderContainerProps {
  $cover: string
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(148)};
  background-image: url(${(props) => props.$cover});
  background-repeat: no-repeat;

  ${above('notebook')} {
    height: ${pxToRem(296)};
  }

  img {
    ${above('notebook')} {
      margin-block-start: ${pxToRem(-75)};
    }
  }
`
