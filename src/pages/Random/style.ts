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
  height: 700px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0.5625rem 0.3125rem 1.25rem #EEEEEE, 0 0.125rem 0.3125rem #E4E4E4;
  border: solid 15px #edb176;

  img{
    width: 380px;
  }

  &&& .log{
    width: 23px;
    cursor: pointer;
    position: relative;
    top: -70px;
    left: 30px;
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
    flex-direction: column;
    width: 90%;
    height: 100%;
    color: black;
`

export const TextAnimation = styled.div`
    background: #292929;
    color: white;
    border-radius: 10px;
    max-width: 100%;
    font-size: 18px;
    text-align: justify;
    padding: 20px;
    animation: blink 2s;
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
export const ContainerInput = styled.div`
  width: 300px;
  min-height: 50px;
  margin-top: 25px;
  border: 1px solid  #292929;
  display: flex; 
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  background: #E6E6E8;

  &&& .MuiFormControlLabel-root{
    width: 100% !important;
    padding-left: 10px;
  }
`
export const ValidadeButton = styled.button`
  background-color: rgb(130, 189, 2);
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px;
  transition: all 0.2s;
  margin-top: -30px;
  outline: none;
  &:hover{
    background-color: #DFAE2C;
    color: black;
  }
`
export const RespostaCorreta = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background: rgb(41,41,41, 0.5);
  color: white;
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
`
export const Time = styled.div`
  position: relative;
  top: -30px;
  left: 70%;
  width: 100px;
`