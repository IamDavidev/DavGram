import React, { useEffect, useState } from 'react';
import usePhotos from './hooks/usePhotos';
import styled from 'styled-components';
import Posts from './pages/Posts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Giffy from './pages/Giffy';

const StyledApp = styled.div`
  background-color: #4fbdba;
  padding: 1rem;
  color: #072227;
`;

//render the app
const App = () => {
  const data = usePhotos({});
  console.log(data);
  return (
    <StyledApp>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts data={data} />} />
          <Route path="/user/:user" element={<Profile/>} />
          <Route path="/giffy" element={<Giffy />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
