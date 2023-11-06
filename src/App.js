import logo from './logo.svg';
import './App.css';
import Test from './Components/Test';
import Sample from './Components/Sample';
import StateDemo from './Components/StateDemo';
import Demo from './Components/Demo';
import Simple from './Components/Simple';

function App() {
  return (
    <div className="App">
{/*      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>*/}
      {/* <Test/>
      <Sample/>
      <StateDemo/>
      <Demo/> */}
      <Simple/>
    </div>
  );
}

export default App;
