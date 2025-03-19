import styled from 'styled-components'

import { above, below } from '../../styles/breakpoints'
import { pxToRem, transition } from '../../styles/functions'
import { nunitoM, nunitoS, nunitoXS } from '../../styles/typograph'

export const CardsContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: ${pxToRem(340)};
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 1.25rem 1rem;
  background-color: ${(props) => props.theme['base-post']};
  ${transition({ properties: ['border-color'] })}

  ${above('mobile')} {
    max-width: ${pxToRem(416)};
    height: ${pxToRem(260)};
    padding: 2rem;
  }

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      ${nunitoM()}
      color: ${(props) => props.theme['base-title']};

      ${below('notebook')} {
        ${nunitoS()}
      }
    }

    span {
      ${nunitoS()}
      color: ${(props) => props.theme['base-span']};

      ${below('notebook')} {
        ${nunitoXS()}
      }
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`
