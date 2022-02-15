import React from 'react';
import styled from "styled-components";
import {siteProps} from "./Site";
import {ABOUT, WORKING_EXPERIENCE, SIDE_HUSTLE, SKILLS, BOOKS, EDUCATION, INTERNET_EXPOSURE, LANGUAGES} from "../index";

import WorkingExperience from "./WorkingExperience";
import AboutMe from "./AboutMe";
import SideHustle from "./SideHustle";
import Skills from "./Skills";
import Education from "./Education";
import InternetExposure from "./InternetExposure";
import Languages from "./Languages";
import BookPage from "./BookPage";

const PublicContentDiv = styled.div`
width: auto;
min-height: 40px;
background: #fff;
padding: 1.5em 3.5em;
margin-bottom: 2em;
    `;



export default function MainContent(props: siteProps) {
    let contentToRender;
    switch(props.route) {
        case ABOUT: {
            contentToRender = <AboutMe/>;
            break;
        }
        case WORKING_EXPERIENCE: {
            contentToRender = <WorkingExperience/>;
            break;
        }
        case SIDE_HUSTLE: {
            contentToRender = <SideHustle/>;
            break;
        }
        case SKILLS: {
            contentToRender = <Skills/>;
            break;
        }
        case BOOKS: {
            contentToRender = <BookPage/>;
            break;
        }
        case INTERNET_EXPOSURE: {
            contentToRender = <InternetExposure/>;
            break;
        }
        case EDUCATION: {
            contentToRender = <Education/>;
            break;
        }
        case LANGUAGES: {
            contentToRender = <Languages/>;
            break;
        }
        default: {
            contentToRender = <AboutMe/>;
            break;
        }
    }


    return (
        <PublicContentDiv>
            {contentToRender}
        </PublicContentDiv>
    );
}
