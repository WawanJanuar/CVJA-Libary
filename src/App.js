import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import Fiksi from './kategori/Fiksi';
import NonFiksi from './kategori/NonFiksi';
import DashLogin from './dash-login/DashLogin';
import DetailBuku from './detail-buku/DetailBuku';
import KoleksiBuku from './koleksibuku/KoleksiBuku';
import Dashnonlog from './dash-nonlog/Dashnonlog';
import Regis from './Registrasi/Regis'

function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Dashnonlog />} />
          <Route path='/login' element={<Login />} />
          <Route path='SignUp' element={<Regis />} />
          <Route path='/kategori-fiksi' element={<Fiksi />} />
          <Route path='/kategori-Nonfiksi' element={<NonFiksi />} />
          <Route path='/detail-buku' element={<DetailBuku />} /> 
          <Route path="/Koleksi-Buku" element={<KoleksiBuku />} />
          <Route path='/dashboard' element={<DashLogin />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
