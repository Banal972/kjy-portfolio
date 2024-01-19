import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Layout/Header';
import Main from './page/Main';
import Contact from './page/Contact';
import Project from './page/Project';

function App() {
  return (

    <>
      <Header/>
      <Routes>
        <Route path='/' >
          <Route index element={<Main/>}/>
          <Route path='about' element={<>어바웃</>} />
          <Route path='project' element={<Project/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
