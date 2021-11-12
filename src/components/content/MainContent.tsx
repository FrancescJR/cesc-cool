import React from 'react';
import styled from "styled-components";
import AboutMe from "./AboutMe";


const PublicContentDiv = styled.div`
width: auto;
min-height: 40px;
background: #fff;
padding: 1.5em;
    `;

export default function MainContent() {
    return (
        <PublicContentDiv>
            <AboutMe />
        </PublicContentDiv>
    );
}