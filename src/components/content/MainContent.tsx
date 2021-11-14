import React from 'react';
import styled from "styled-components";
import {siteProps} from "../Site";
import {ABOUT, WORKING_EXPERIENCE} from "../../index";
import AboutMe from "./AboutMe";
import WorkingExperienceList from "./WorkingExperienceList";

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
            contentToRender = <WorkingExperienceList/>;
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