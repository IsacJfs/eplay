import { createGlobalStyle } from 'styled-components'

const colors = {
  colorText: '#eeeeee',
  bgPrimary: '#111111',
  bgSecondary: '#333333',
  bgButton: '#10ACB4'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body{
    background-color: ${colors.bgPrimary};
    color: ${colors.colorText};
  }
`
