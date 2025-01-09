import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/login';
import Fiksi from './kategori/Fiksi';
import Nav from './nav/Nav';
import NonFiksi from './kategori/NonFiksi';
import DashLogin from './dash-login/DashLogin';
import DetailBuku from './detail-buku/DetailBuku';
import KoleksiBuku from './koleksibuku/KoleksiBuku';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<DashLogin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/kategori-fiksi' element={<Fiksi />} />
          <Route path='/kategori-Nonfiksi' element={<NonFiksi />} />
          <Route path='/detail-buku' element={<DetailBuku />} /> 
          <Route path="/Koleksi-Buku" element={<KoleksiBuku />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
