import logo from './logo.svg';
import './App.css';
import multiButton from './helloCGU';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{multiButton(5)}</div>
        {
          document.getElementById("root").addEventListener("click", (e) => {
            document.getElementById(e.target.id).innerText = "HelloCGU";
        })
        }
      </header>
    </div>
  );
}

export default App;
