import React from 'react';
import { Route, Routes } from 'react-router-dom';
// 레이아웃
import Header from './Layout/Header';
// 라우터
import Main from './page/Main';
import Contact from './page/Contact';
import Project from './page/Project';
import About from './page/About';

function App() {
  return (

    <>
      <Header/>
      <Routes>
        <Route path='/' >
          <Route index element={<Main/>}/>
          <Route path='about' element={<About/>} />
          <Route path='project' element={<Project/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
