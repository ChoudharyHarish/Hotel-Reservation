import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return <div className='flex flex-col justify-center align-center'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/rooms/:id' element={<RoomDetails />} />
    </Routes>
    <Footer />
  </div>;
};

export default App;
