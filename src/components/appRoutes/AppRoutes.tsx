import React from 'react';
import './AppRoutes.scss';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./AppRoutes.scss";
import {Main} from "../main/Main";
import Header from "../header/Header";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
