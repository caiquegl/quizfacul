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

  &&& .slick-slider{
    width: 300px;
  }
`

export const Titulo = styled.div`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: white;
`
export const Colum = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items center;
  justify-content:center;
  flex-direction: column;
`
export const ColumLogin = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items center;
  flex-direction: column-reverse;
`
export const ButtonGames = styled.button`
  width: auto;
  margin-top: 30px;
  border-radius: 10px;
  border: none;
  background: #ead072;
  color: white;
  cursor: pointer;
  font-size: 25px;
  padding: 10px;
  transition: all 0.3s;
  &:hover{
    background: yellow;
    color: black;
  }
`
export const SlickButton = styled.div`
  width: 100% !important;
  height: auto;
  display: flex !important;
  align-items: center;
  justify-content: center;
`