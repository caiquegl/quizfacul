import React, { useState } from 'react';
import {
  Bg,
  Container,
  AnimationImg,
  TextAnimation,
  ButtonText,
} from './styled';
import Typist from 'react-typist';
import AtJoia from 'assets/Imagens/at-joia.png';
import history from 'route/History'

const Step2 = () => {
  const [name] = useState<any>(sessionStorage.getItem('name'));

  const nextHomeLogin = () => {
    history.push('/homeLogado')
  };

  return (
    <Bg>
      <Container>
        <AnimationImg>
          <img src={AtJoia} alt="Alan Turing" />
        </AnimationImg>
        <TextAnimation>
          <Typist startDelay={2000}>
            <strong>{name}</strong> Obrigado por me ajudar, acredito que juntos
            conseguiremos resolver esse problema, e iremos salvar o mundo!!. Não
            se preocupe em errar, poís criei um algoritimo que quebra o tempo e
            o espaço e nos permite voltar um pouco no tempo até corrigirmos esse
            bug. Boa sorte {name}, o destino do mundo está agora em suas mãos.
            <br />
            <ButtonText onClick={() => nextHomeLogin()}>
              Clique aqui para começar {'>'}
            </ButtonText>
          </Typist>
        </TextAnimation>
      </Container>
    </Bg>
  );
};

export default Step2;
