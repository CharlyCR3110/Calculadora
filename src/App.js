import './App.css';
import Button from './components/Button'
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';
import logo from './images/calculadoraLogo.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  
/**
 * It takes a value as an argument and sets the input state to the current input state plus the value.
 * @param value - The value of the button that was clicked.
 */
  const addInput = value => {
    setInput(input + value);
  };
  const clearScreen = () => {
    setInput('');
  };
  const result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Please enter a valid input');
    }
  }

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
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickHandler={result}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton clickHandler={clearScreen}/>
        </div>
      </div>
    </div>
  );
}

export default App;
