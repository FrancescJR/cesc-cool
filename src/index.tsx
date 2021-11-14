import React from 'react';
import ReactDOM from 'react-dom';
import Site from "./components/Site";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';

export const ABOUT = 'about';
export const WORKING_EXPERIENCE = 'l';



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Site route={ABOUT} />} />
              <Route path={"/about"} element={<Site route={ABOUT} />} />
              <Route path={"/working-experience"} element={<Site route={WORKING_EXPERIENCE} />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
