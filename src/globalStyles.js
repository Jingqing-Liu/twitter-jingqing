import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    color: #13171a;
    font-size: 16px;
    margin: 0;

    @media (max-width: 660px) {
      &::-webkit-scrollbar {
        display: none;
      }

      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }

  :root {
    --primary: #1DA1F2;
    --primaryLight: #1877b3;
    --primaryLightMore: #d5eefe;
    --primaryDark: #2715b0;
    --white: #ffffff;
    --xxLightGrey: #f5f8fa;
    --xLightGrey: #e1e8ed;
    --lightGrey: #aab8c2;
    --darkGrey: #657786;
    --xDarkGrey: #252525;
    --black: #13171a;
    --error: #ff0033;
    --errorLight:#ffcccbaa;
    --success: #4bb543;
  }
`
