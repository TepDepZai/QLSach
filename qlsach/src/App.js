import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import HomePage from './homePage/HomePage';
import EditTruyenPage from './editTruyen/page';
import FormTimKiem from './editTruyen/FormTimKiem';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;


function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
      path='/editTruyen'
      element={<EditTruyenPage/>}
      />
      <Route
      path='/timkiem/:slug'
      element={<FormTimKiem/>}
      />

    </Routes>
  );
}

export default App;
