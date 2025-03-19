import styled, { css } from 'styled-components'

import { above } from '../../styles/breakpoints'
import { pxToRem } from '../../styles/functions'
import { nunitoM, nunitoS, nunitoXL } from '../../styles/typograph'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;

  ${above('notebook')} {
    padding: 1rem 2.5rem;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: ${pxToRem(864)};
  border-radius: 10px;
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.theme['base-profile']};

  ${above('notebook')} {
    flex-direction: row;
    margin-block-start: ${pxToRem(-90)};
    margin-block-end: ${pxToRem(72)};
    padding: 1.5rem;
  }

  img {
    width: ${pxToRem(148)};
    height: ${pxToRem(148)};
    border-radius: 8px;
    object-fit: cover;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${nunitoXL()}
    color: ${(props) => props.theme['base-title']};

    ${above('notebook')} {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  p {
    text-align: center;

    ${above('notebook')} {
      text-align: unset;
    }
  }
`

export const SocialsContainer = styled.ul`
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

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: ${pxToRem(864)};
  padding: 1rem 0;

  /* ${above('notebook')} {
    padding: 1rem 2.5rem;
  } */

  h2 {
    display: flex;
    justify-content: space-between;
    ${nunitoM({ bold: true })};
    color: ${(props) => props.theme['base-subtitle']};

    span {
      ${nunitoS()};
      color: ${(props) => props.theme['base-span']};
    }
  }
`

interface CardsContainerProps {
  $totalCards: number
}

export const CardsContainer = styled.div<CardsContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;

  ${(props) => {
    if (props.$totalCards > 1) {
      return css`
        ${above('notebook')} {
          grid-template-columns: 1fr 1fr;
          column-gap: 1rem;
        }
      `
    }
  }}
`
