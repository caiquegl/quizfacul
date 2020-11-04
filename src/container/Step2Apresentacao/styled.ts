import styled from 'styled-components'
import BgSvg from 'assets/Imagens/bg.svg'
import BgHome from 'assets/Imagens/bg-home.svg'

export const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BgSvg});
  background-size: cover;
`

export const Container = styled.div`
background-image: url(${BgHome});
  width: 100%;
  max-width: 1000px;
  height: 600px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0.5625rem 0.3125rem 1.25rem #EEEEEE, 0 0.125rem 0.3125rem #E4E4E4;
  border: solid 15px #edb176;

  img{
    width: 380px;
  }
`

export const AnimationImg = styled.div`
  animation: blink 2s;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`

export const AlignText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    width: 90%;
    height: 100%;
`

export const TextAnimation = styled.div`
    background: #292929;
    color: white;
    border-radius: 10px;
    height: 200px;
    max-width: 100%;
    font-size: 18px;
    text-align: justify;
    padding: 20px;
    animation: blink 5.5s;
    width: 90%;
    @keyframes blink {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
`

export const ButtonText = styled.button`
      border: none;
      position: relative;
      bottom: 0;
      rigth: 10px;
      background:#292929;
      color: white;
      padding: 20px;
      cursor: pointer;
`


