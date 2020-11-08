import styled from 'styled-components'
import Selecao from './selecao';
import Final from './final';
import React, { useState, useEffect } from 'react';

const Wrapper = styled.div`
    background-color: #a8a8a8;
    width: 100vw;
    height: 100vh;
    font-family: Roboto,"Helvetica Neue",sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 2rem;
        font-weight: 600;
        line-height: 18px;
    }

`

export default function Home() {
    const [render, setRender] = useState(false);
    const [dataPlanilha, setDataPlanilha] = useState(null);
  const [firstTime, setFirstTime] = useState(false);
  var cors_api_host = 'cors-anywhere.herokuapp.com/';
  let url = cors_api_host+'copafilmes.azurewebsites.net/api/filmes/';
  async function fetchData() {
    const res = await fetch(url);
    res
      .json()
      .then(res => {
          let Requisicao = res;
          if(firstTime == false){
            setDataPlanilha(Requisicao);
            setFirstTime(true);
            console.log('aqui esta', dataPlanilha);
          }
      })
      .catch(err =>  /*setErrors(err)*/ console.log('aqui esta, erro'));
  }
  useEffect(() => {
    fetchData();
  });

    return (
        <Wrapper > { (render) ?

            <div>

            </div>

            : <Final />}

        </Wrapper>
    );
}

