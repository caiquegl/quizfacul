import React from 'react';
import { Bg, Container, Titulo, ButtonGeral, Colum } from './style';
import Grid from '@material-ui/core/Grid';
import atHome from 'assets/Imagens/aT-home.png';
import history from 'route/History';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);
const Home = () => {

  const classes = useStyles();

  const next = () => {
    history.push('/apresentacao');
  };

  const logar = () =>{}
  
  return (
    <Bg>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs md={4}>
            <img src={atHome} alt="Alan Turing" />
          </Grid>
          <Grid item xs md={8}>
            <Colum>
              <Titulo>Help Allan Turing</Titulo>
              <ButtonGeral onClick={() => next()}>Entrar</ButtonGeral>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => logar()}
              >
                Logar
              </Button>
            </Colum>
          </Grid>
        </Grid>
      </Container>
    </Bg>
  );
};

export default Home;
