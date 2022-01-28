import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Toggle from './component/Toggle';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <button className="App-button">Toggle</button>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Toggle />} />
      </Routes>
    </div>
  );
}

export default App;
