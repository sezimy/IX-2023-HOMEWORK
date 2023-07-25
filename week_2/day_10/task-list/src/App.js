import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState, useEffect } from 'react';
import { auth } from './firebase/firebase';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import TaskPage from './components/task/TaskPage';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from './components/auth/LoginPage';
import Navbar from './components/common/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);


  
  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<TaskPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
