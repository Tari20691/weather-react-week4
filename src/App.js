import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React Debugging
        </h1>
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
        SheCodes</a>
        <Weather city="Brunswick"/>
      </header>
    </div>
  );
}

export default App;
