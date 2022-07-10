import './App.css';
import Button from './components/Button'
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';
import logo from './images/calculadoraLogo.png';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');
  
  const addInput = (value) => {
    setInput(input + value);
  };

  return (
    <div className='App'>
      <div className='logoContainer'>
        <img
          src={logo}
          alt='logo'
          className='logo' />
      </div>
      <div className='calculatorContainer'>
        <Screen input={input} />
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
          <ClearButton />
        </div>
      </div>
    </div>
  );
}

export default App;
