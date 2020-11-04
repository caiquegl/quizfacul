import React from 'react';
import {
  Bg,
  Container,
  AnimationImg,
  AlignText,
  TextAnimation,
  ButtonText,
} from './styled';
import Typist from 'react-typist';
import AtDuvida from 'assets/Imagens/aT-duvida.png';
import Grid from '@material-ui/core/Grid';

const Step2 = () => {
  const setName = () => {
    let name: any = prompt('Qual é o seu nome?');
    if(name && name.length > 1){
      sessionStorage.setItem('name', name.toString());
    }else{
      alert("Por favor, preciso que diga seu nome");
      let name: any = prompt('Qual é o seu nome?');
      sessionStorage.setItem('name', name.toString());

    }
  };

  return (
    <Bg>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs md={6}>
            <AnimationImg>
              <img src={AtDuvida} alt="Alan Turing" />
            </AnimationImg>
          </Grid>
          <Grid item xs md={6}>
            <AlignText>
              <TextAnimation>
                <Typist startDelay={2000}>
                  <strong>VOCÊ!!!!!!</strong> Acredito que você seja o gênio em
                  que todo mundo anda falando, acredito que você possa me
                  ajudar, se não ajudar será o fim da humanidade como
                  conhecemos, por favor me diga seu nome para a gente resolver
                  esse problema.
                  <ButtonText onClick={() => setName()}>
                    Clique aqui para avançar {'>'}
                  </ButtonText>
                </Typist>
              </TextAnimation>
            </AlignText>
          </Grid>
        </Grid>
      </Container>
    </Bg>
  );
};

export default Step2;
