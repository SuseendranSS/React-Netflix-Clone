import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure you import BrowserRouter
import Main from './components/main/Main';
import Login from './components/login/Login';
import Sign from './components/sign-in/Sign';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'f0fc2c2ea8db74c1852293bba58ac8d9',
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<Sign />}/>
        <Route path="/home" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
