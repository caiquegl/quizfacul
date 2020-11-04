import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Itim', cursive;;
  }
  html, body, .ant-layout {
    background: white;
    font-family: 'Itim', cursive;;
    scroll-behavior: smooth;
  }
  a {
    font-size: 1rem;
    text-decoration: none;
    color: white;
  }
`

export const Container = styled.main`
  margin: auto;
  margin-top: 2.2556rem;
  width: calc(100% - 9rem);
  min-height: 100vh;
  padding: 1rem;
  @media (min-width: 1330px) {
    padding: 0;
  }
`