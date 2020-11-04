import React, {useState} from 'react';
import { Bg, Container, Titulo, ButtonGames, Colum, SlickButton, ColumLogin } from './style';
import Grid from '@material-ui/core/Grid';
import atHomeLogado from 'assets/Imagens/at-aplausos.png';
import history from 'route/History';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import PresentToAllOutlinedIcon from '@material-ui/icons/PresentToAllOutlined';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const HomeLogado = () => {
  const [name] = useState<any>(sessionStorage.getItem('name'));

  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const campanha = () => {};

  const random = () => {
    history.push('/random')
  };

  const logar = () => {};
  return (
    <Bg>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs md={4}>
            <img src={atHomeLogado} alt="Alan Turing" />
          </Grid>
          <Grid item xs md={6}>
            <p className="header">Bem vindo <strong>{name}</strong></p>
            <Colum>
              <Titulo>Escolha a modalidade:</Titulo>
              <Slider {...settings}>
                <SlickButton>
                  <ButtonGames onClick={() => campanha()}>Modo Campanha</ButtonGames>
                </SlickButton>
                <SlickButton>
                  <ButtonGames onClick={() => random()}>Modo Aléatorio</ButtonGames>
                </SlickButton>
              </Slider>
            </Colum>
          </Grid>
          <Grid item xs md={2}>
            <ColumLogin>
              <div>
              <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className={classes.button}
                  startIcon={<PresentToAllOutlinedIcon />}
                  onClick={() => logar()}
                >
                  Registrar
                </Button>
              </div>
              <div>
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
              </div>
            </ColumLogin>
          </Grid>
        </Grid>
      </Container>
    </Bg>
  );
};

export default HomeLogado;
