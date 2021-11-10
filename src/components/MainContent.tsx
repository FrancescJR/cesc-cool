import React from 'react';
import styled, {StyledComponentBase} from "styled-components";


const PublicContentDiv = styled.div`
width: auto;
min-height: 40px;
background: #fff;
padding: 1.5em;
    `

export default function MainContent() {
    return (
        <PublicContentDiv>
            <h2>About Me</h2>
            <p>I'm awesome when I'm awesome. I love as much working as I love not working.</p>
        </PublicContentDiv>
    );
}