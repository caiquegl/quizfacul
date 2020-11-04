import React, {useState} from 'react';
import {
  Bg,
  Container,
  AnimationImg,
  AlignText,
  TextAnimation,
  ButtonText,
} from './styled';
import Typist from 'react-typist';
import AtExplode from 'assets/Imagens/at-explode.png';
import Grid from '@material-ui/core/Grid';
import Apresentation2 from 'container/Step2Apresentacao'

const Apresentacao = () => {
  const [step1, setStep1] = useState<boolean>(true)
  const [step2, setStep2] = useState<boolean>(false)
  const next2 = () =>{
    setStep1(false)
    setStep2(true)
  }
  return (
    <Bg>
      {step1 ?
      
      <Container>
        <Grid container spacing={0}>
          <Grid item xs md={6}>
            <AnimationImg>
              <img src={AtExplode} alt="Alan Turing" />
            </AnimationImg>
          </Grid>
          <Grid item xs md={6}>
            <AlignText>
              <TextAnimation>
                <Typist startDelay={5000}>
                  Estou ferrado, acidentalmente criei um bug que irá dispara
                  todos os misseis nuclueares ao redor do mundo, e não sei como
                  resolver, preciso de ajuda, algum me ajude!!!{' '}
                  <strong>CHAPOLIM COLORODO CADE VOCÊ!!!!!!</strong>
                  <ButtonText onClick={() => next2()}>
                    Clique aqui para avançar {'>'}
                  </ButtonText>
                </Typist>
              </TextAnimation>
            </AlignText>
          </Grid>
        </Grid>
      </Container>
      :
      step2 ?
        <Apresentation2 />

        :
        <h1>Em construção</h1>
      }
    </Bg>
  );
};

export default Apresentacao;
