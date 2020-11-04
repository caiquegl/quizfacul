import React, { useState, useEffect } from 'react';
import {
  Bg,
  Container,
  AnimationImg,
  AlignText,
  TextAnimation,
  ContainerInput,
  ValidadeButton,
  RespostaCorreta,
  Time,
} from './style';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AtEsperando from 'assets/Imagens/at-esperando.png';
import AtAcertou from 'assets/Imagens/at-acertou.png';
import AtErrou from 'assets/Imagens/at-errou.png';
import Grid from '@material-ui/core/Grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Countdown from 'react-countdown-now';
import Exit from 'assets/Icons/log-out.svg';
import api from 'service/mock';
import history from 'route/History'

const Step2 = () => {
  const [completeQuestion, setCompleteQuestion] = useState<any>([]);
  const [value, setValue] = useState<any>();
  const [correct, setCorrect] = useState<any>();
  const [finish, setFinish] = useState<boolean>(false);
  const [leter, setLeter] = useState<any>();
  const [imgGamer, setImgGamer] = useState<any>(AtEsperando);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const apiQuest = async () => {
    let question = await api.getQuestion();
    let number = Math.floor(Math.random() * 10);
    console.log(question[number]);
    setCompleteQuestion(question[number]);
    setCorrect(question[number][0].correct_answer);
    setLeter(question[number][0].correct_answer.substr(-1, 1));
  };
  const validate = () => {
    if (!value) {
      toast.error('Precisa selecionar uma resposta para continuar', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (value !== correct) {
        setFinish(true);
        setImgGamer(AtErrou);
        toast.error('Resposta errada, avançando para o proximo desafio', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => window.location.reload(true), 5000);
      } else {
        setFinish(true);
        setImgGamer(AtAcertou);
        toast.success('Acertou!!! avançando para o proxico desafio', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => window.location.reload(true), 5000);
      }
    }
  };

  const endTime = () => {
    setFinish(true);
    setImgGamer(AtErrou);
    toast.error(
      'Demorou muito para responder, avançando para o proximo desafio',
      {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );
    setTimeout(() => window.location.reload(true), 5000);
  };

  const back = () =>{
    history.push('/homeLogado')
  }
  useEffect(() => {
    apiQuest();
  }, []);

  return (
    <Bg>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs md={6}>
            <img src={Exit} alt="Voltar" onClick={() => back()} className="log"/>
            <AnimationImg>
              <img src={imgGamer} alt="Allan" />
            </AnimationImg>
          </Grid>
          <Grid item xs md={6}>
            <Time>
              <Countdown
                date={Date.now() + 40000}
                daysInHours={false}
                onComplete={() => endTime()}
              />
            </Time>
            <AlignText>
              {completeQuestion.map((item: any) => (
                <>
                  <div>
                    <TextAnimation>{item.question}</TextAnimation>
                  </div>
                  {!finish ? (
                    <div>
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={value}
                          onChange={handleChange}
                        >
                          <ContainerInput>
                            <FormControlLabel
                              value={
                                completeQuestion[0].correct_answers_button
                                  .answer_a_value
                              }
                              control={<Radio />}
                              label={completeQuestion[0].answers.answer_a}
                            />
                          </ContainerInput>

                          <ContainerInput>
                            <FormControlLabel
                              value={
                                completeQuestion[0].correct_answers_button
                                  .answer_b_value
                              }
                              control={<Radio />}
                              label={completeQuestion[0].answers.answer_b}
                            />
                          </ContainerInput>

                          <ContainerInput>
                            <FormControlLabel
                              value={
                                completeQuestion[0].correct_answers_button
                                  .answer_c_value
                              }
                              control={<Radio />}
                              label={completeQuestion[0].answers.answer_c}
                            />
                          </ContainerInput>

                          <ContainerInput>
                            <FormControlLabel
                              value={
                                completeQuestion[0].correct_answers_button
                                  .answer_d_value
                              }
                              control={<Radio />}
                              label={completeQuestion[0].answers.answer_d}
                            />
                          </ContainerInput>
                        </RadioGroup>
                      </FormControl>
                    </div>
                  ) : (
                    <div>
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={value}
                          onChange={handleChange}
                        >
                          <ContainerInput>
                            <FormControlLabel
                              value={
                                completeQuestion[0].correct_answers_button
                                  .answer_a_value
                              }
                              control={<Radio />}
                              label={completeQuestion[0].answers.answer_a}
                              disabled
                            />
                          </ContainerInput>

                          <ContainerInput>
                            <FormControlLabel
                              value={
                                completeQuestion[0].correct_answers_button
                                  .answer_b_value
                              }
                              control={<Radio />}
                              label={completeQuestion[0].answers.answer_b}
                              disabled
                            />
                          </ContainerInput>

                          <ContainerInput>
                            <FormControlLabel
                              value={
                                completeQuestion[0].correct_answers_button
                                  .answer_c_value
                              }
                              control={<Radio />}
                              label={completeQuestion[0].answers.answer_c}
                              disabled
                            />
                          </ContainerInput>

                          <ContainerInput>
                            <FormControlLabel
                              value={
                                completeQuestion[0].correct_answers_button
                                  .answer_d_value
                              }
                              control={<Radio />}
                              label={completeQuestion[0].answers.answer_d}
                              disabled
                            />
                          </ContainerInput>
                        </RadioGroup>
                      </FormControl>
                      <RespostaCorreta>
                        A resposta correta é a letra {leter}{' '}
                      </RespostaCorreta>
                    </div>
                  )}
                </>
              ))}
            </AlignText>
            {!finish ? 
            <ValidadeButton onClick={() => validate()}>
              Validar resposta
            </ValidadeButton>
            :
            <ValidadeButton>
              Validar resposta
            </ValidadeButton>
            }
          </Grid>
        </Grid>
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Bg>
  );
};

export default Step2;
