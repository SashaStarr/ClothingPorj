import React from 'react';
import './AppRoutes.scss';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./AppRoutes.scss";
import {Main} from "../main/Main";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
