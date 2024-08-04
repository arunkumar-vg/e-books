import './App.css';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './common/Navbar';
import Routes from './Routes';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <div className={darkMode ? 'dark-mode hide-scrollbar' : 'light-mode hide-scrollbar'}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <ToastContainer />
        <Routes />
      </div>
    </div>
  );
}

export default App;
