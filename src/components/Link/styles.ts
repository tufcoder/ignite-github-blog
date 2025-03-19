import styled from 'styled-components'

import { above } from '../../styles/breakpoints'
import { nunitoXS } from '../../styles/typograph'
import { transition } from '../../styles/functions'

export const LinkContainer = styled.a`
  display: flex;
  gap: 0.5rem;
  border: 1px solid transparent;
  ${nunitoXS({ bold: true })}
  text-transform: uppercase;
  color: ${(props) => props.theme.blue};
  ${transition({ properties: ['border-color'] })};

  &:hover {
    border-bottom-color: ${(props) => props.theme.blue};
  }

  ${above('notebook')} {
    order: 1;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`
