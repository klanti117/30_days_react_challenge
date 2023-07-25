import logo from './logo2.png';
import './App.css';
import Button from './components/Button/Button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* TODO: these br are here so that the logo doesnot rotate over text */}
      <br/>
      <br/>
      <br/>
      <h1>Day4: Show Time </h1>
      <Button buttonText='Show Me the times'/>
    </div>
  );
}

export default App;
