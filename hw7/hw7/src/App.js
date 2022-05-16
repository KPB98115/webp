import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="title">CGU login</p><br/>
        <label className="login_form">
          <p>User Name : </p><input id="username"/><br/>
          <p>Password : </p><input id="password"/><br/>
          <button id="btn">Login</button>
        </label>
      </header>
    </div>
  );
}

export default App;
