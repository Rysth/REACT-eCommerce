import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
