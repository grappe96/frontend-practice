import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="link">
          <button className="App-button">Toggle</button>
        </Link>
        <Link to="/modal" className="link">
          <button className="App-button">Modal</button>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Toggle />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
