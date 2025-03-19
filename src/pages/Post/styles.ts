import styled from 'styled-components'

import { above } from '../../styles/breakpoints'
import { pxToRem } from '../../styles/functions'
import { nunitoXL, nunitoXS } from '../../styles/typograph'

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PostHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  background-color: ${(props) => props.theme['base-profile']};

  ${above('notebook')} {
    max-width: ${pxToRem(864)};
    margin-block-start: ${pxToRem(-90)};
    padding: 2rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: uppercase;
      ${nunitoXS({ bold: true })};
      color: ${(props) => props.theme.blue};
    }
  }

  h1 {
    text-align: center;
    ${nunitoXL({ bold: true })};

    ${above('notebook')} {
      text-align: unset;
    }
  }
`

export const PostSocialsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  ${above('notebook')} {
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
  }

  li {
    display: flex;
    gap: 0.25rem;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      width: 18px;
      height: 18px;
    }
  }
`

export const PostContentContainer = styled.section`
  padding: 2.5rem 2rem;

  ${above('notebook')} {
    max-width: ${pxToRem(864)};
  }
`
