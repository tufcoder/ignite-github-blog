import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 1rem 'Nunito', sans-serif;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-background']};
  }

  button, input, textarea, a {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  ul li {
    list-style-type: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
