import React from 'react';
import styled from "styled-components";
import {siteProps} from "./Site";
import {ABOUT, WORKING_EXPERIENCE, SIDE_HUSTLE, SKILLS, BOOKS, EDUCATION, BLOG, INSTAGRAM} from "../index";

import WorkingExperience from "./WorkingExperience";
import AboutMe from "./AboutMe";
import SideHustle from "./SideHustle";
import Skills from "./Skills";
import Books from "./Books";
import Education from "./Education";
import Blog from "./Blog";
import Instagram from "./Instagram";

const PublicContentDiv = styled.div`
width: auto;
min-height: 40px;
background: #fff;
padding: 1.5em;
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
            contentToRender = <Books/>;
            break;
        }
        case BLOG: {
            contentToRender = <Blog/>;
            break;
        }
        case INSTAGRAM: {
            contentToRender = <Instagram/>;
            break;
        }
        case EDUCATION: {
            contentToRender = <Education/>;
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