import logo from './logo.svg';
import './App.css';

const { REACT_APP_GIT_HASH, REACT_APP_MY_ENV } = process.env;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Git Hash: { REACT_APP_GIT_HASH }</div>
        <div>And my env: { REACT_APP_MY_ENV }</div>
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
      </header>
    </div>
  );
}

export default App;
