import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';

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
        <Link to="/tab" className="link">
          <button className="App-button">Tab</button>
        </Link>
        <Link to="/tag" className="link">
          <button className="App-button">Tag</button>
        </Link>
        <Link to="/autoComplete" className="link">
          <button className="App-button">AutoComplete</button>
        </Link>
        <Link to="/clickToEdit" className="link">
          <button className="App-button">ClickToEdit</button>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Toggle />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/tag" element={<Tag />} />
        <Route path="autoComplete" element={<AutoComplete />} />
        <Route path="/clickToEdit" element={<ClickToEdit />} />
      </Routes>
    </div>
  );
}

export default App;
