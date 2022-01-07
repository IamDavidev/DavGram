import React, { useEffect, useState } from 'react';
import usePhotos from './hooks/usePhotos';
import styled from 'styled-components';
import Posts from './pages/Posts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Giffy from './pages/Giffy';
import Profile from './pages/Profile';
import Search from './pages/Search';

const StyledApp = styled.div`
  background: linear-gradient(45deg, #4d5968, #5c6a7b);
  box-shadow: 5px -5px 100px #22282e, -5px 5px 100px #8a9eb8;
  padding: 1rem;
  color: #00dafc;
  img {
    border: 2px solid #131b26;
    border-radius: 0.5rem;
  }
`;

//render the app
const App = () => {
  const data = usePhotos({});
  data;
  return (
    <StyledApp>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts data={data} />} />
          <Route path="/user/:user/" element={<Profile />} />
          <Route path="/giffy/" element={<Giffy />} />
          <Route path="/explore" element={<Search />} />
        </Routes> 
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
