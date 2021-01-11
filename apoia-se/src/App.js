import React, { useState } from 'react';
import './App.css';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function App() {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  return (
    <div className="App">
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <credit>
        <form>
          
          <input
            type='tel'
            name='numero'
            placeholder='Número do cartão'
            value={number}
            onChange={e => setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)} />

          <input
            type='text'
            name='name'
            placeholder='Nome do cartão'
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name)} />
    
          
          <input
            type='text'
            name='expiry'
            placeholder='Vencimento'
            value={expiry}
            onChange={e => setExpiry(e.target.value)}
            onFocus={e => setFocus(e.target.name)} />
        
          <input
            type='tel'
            name='cvc'
            placeholder='CVV'
            value={cvc}
            onChange={e => setCvc(e.target.value)}
            onFocus={e => setFocus(e.target.name)} />
        </form>
      </credit>
    </div>
  );
}

export default App;
