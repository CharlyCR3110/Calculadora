import './App.css';
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
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
