import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import Store from './redux/Store';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Preview from './pages/Preview/Preview';
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <div className="app">
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
          <NotificationContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/preview/:id" element={<Preview />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
