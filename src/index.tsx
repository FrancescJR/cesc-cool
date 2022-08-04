import React from 'react';
import ReactDOM from 'react-dom';
import Site from "./pages/Site";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const ABOUT = 'about';
export const FAQRecruiters = 'faq';
export const WORKING_EXPERIENCE = 'working_experience';
export const SIDE_HUSTLE = 'side_hustle'
export const CODE_REPOS = 'repositories';
export const SKILLS = 'skills';
export const BOOKS = 'books';
export const INTERNET_EXPOSURE = 'internet-exposure';
export const EDUCATION = 'education';
export const LANGUAGES = 'languages';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Site route={ABOUT} />} />
              <Route path={"/" + FAQRecruiters} element={<Site route={FAQRecruiters} />} />
              <Route path={"/" + WORKING_EXPERIENCE} element={<Site route={WORKING_EXPERIENCE} />} />
              <Route path={"/" + SIDE_HUSTLE} element={<Site route={SIDE_HUSTLE} />} />
              <Route path={"/" + CODE_REPOS} element={<Site route={CODE_REPOS} />} />
              <Route path={"/" + SKILLS} element={<Site route={SKILLS} />} />
              <Route path={"/" + BOOKS} element={<Site route={BOOKS} />} />
              <Route path={"/" + INTERNET_EXPOSURE} element={<Site route={INTERNET_EXPOSURE} />} />
              <Route path={"/" + EDUCATION} element={<Site route={EDUCATION} />} />
              <Route path={"/" + LANGUAGES} element={<Site route={LANGUAGES} />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
