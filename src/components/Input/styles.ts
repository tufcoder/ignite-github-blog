import styled from 'styled-components'

import { transition } from '../../styles/functions'

export const InputContainer = styled.input`
  outline: 0;
  border: 0;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-input']};
  ${transition({ properties: ['border-color'] })};

  &:focus {
    border-color: ${(props) => props.theme.blue};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
