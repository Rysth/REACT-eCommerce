import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element="Hello" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
