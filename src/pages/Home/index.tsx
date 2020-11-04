import React from 'react'
import {Bg, Container, Titulo, Button, Colum} from './style'
import Grid from '@material-ui/core/Grid'
import atHome from 'assets/Imagens/aT-home.png'
import history from 'route/History'

const next =  () => {
  history.push('/apresentacao')
}
const Home = () => {
  return (
    <Bg>
      <Container>
      <Grid container spacing={0}>
        <Grid item xs md={4}>
          <img src={atHome} alt="Alan Turing"/>
        </Grid>
        <Grid item xs md={8}>
          <Colum>
            <Titulo>Help Allan Turing</Titulo>
            <Button onClick={() => next()}>
              Entrar
            </Button>
          </Colum>
        </Grid>
      </Grid>
      </Container>
    </Bg>
  )
}

export default Home
