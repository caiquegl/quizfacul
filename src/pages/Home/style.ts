import styled from 'styled-components'
import BgHome from 'assets/Imagens/bg-home.svg'
import BgSvg from 'assets/Imagens/bg.svg'
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

export const Titulo = styled.div`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  color: white;
`
export const Colum = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items center;
  justify-content:space-around;
  flex-direction: column;
`
export const ButtonGeral = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: #ead072;
  color: white;
  cursor: pointer;
  font-size: 25px;
  pading: 10px;
  transition: all 0.3s;
  &:hover{
    background: yellow;
    color: black;
  }
`
