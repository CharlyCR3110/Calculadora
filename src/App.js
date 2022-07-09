import './App.css';
import Button from './components/Button'
import logo from './images/calculadoraLogo.png'

function App() {
  return (
    <div className='App'>
      <div className='logoContainer'>
        <img
          src={logo}
          alt='logo'
          className='logo' />
      </div>
      <div className='calculatorContainer'>
        <div className='row'></div>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
