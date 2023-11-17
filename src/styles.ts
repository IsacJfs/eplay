import { createGlobalStyle } from 'styled-components'

export const colors = {
  colorText: '#eeeeee',
  bgPrimary: '#111111',
  bgSecondary: '#333333',
  bgButton: '#10ACB4',
  colorSubtitle: '#A3A3A3'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    background-color: ${colors.bgPrimary};
    color: ${colors.colorText};
    padding-top: 40px;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
