import React from 'react';
import ReactDOM from 'react-dom';
import Site from "./pages/Site";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const ABOUT = 'about';
export const WORKING_EXPERIENCE = 'working_experience';
export const SIDE_HUSTLE = 'side_hustle'
export const SKILLS = 'skills';
export const BOOKS = 'books';
export const BLOG = 'blog';
export const INSTAGRAM = 'instagram';
export const EDUCATION = 'education';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Site route={ABOUT} />} />
              <Route path={"/working-experience"} element={<Site route={WORKING_EXPERIENCE} />} />
              <Route path={"/side-hustle"} element={<Site route={SKILLS} />} />
              <Route path={"/skills"} element={<Site route={SKILLS} />} />
              <Route path={"/books"} element={<Site route={BOOKS} />} />
              <Route path={"/blog"} element={<Site route={BLOG} />} />
              <Route path={"/instagram"} element={<Site route={INSTAGRAM} />} />
              <Route path={"/education"} element={<Site route={EDUCATION} />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
