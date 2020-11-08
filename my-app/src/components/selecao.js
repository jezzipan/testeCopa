import styled from 'styled-components'

const Wrapper = styled.div`
background-color: #777;
width: 100vw;
height: 30%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


h2 {
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    line-height: 18px;
    margin: 0 0 5px;
    
}

p {
    color: #fff;
    font-size: .9rem;

}
    
`
const Titulo = styled.h3`
    text-transform: uppercase;
    color: #a6a6a6;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 26px;

`
const Borda = styled.div`
    border: 2px solid #a6a6a6;
    width: 2%;
    margin: 20px auto; 

`

export default function Selecao() {
  return (
    <Wrapper>
        <Titulo>campeonato de filmes</Titulo>
      <h2>Fase de Seleção</h2>
      <Borda />
      <p>Selecione oito filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir.</p>
    </Wrapper>
  );
}

