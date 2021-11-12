import React from 'react';
import styled from "styled-components";
import Menu from "./menu/Menu";
import MainContent from "./content/MainContent";

interface backgroundProp {
    backgroundImageIndex: number;
}

const PageWrapperDiv = styled.div`
    position: relative;
`

const PageContentWrapperDiv = styled.div`

    @media ( min-width: 1440px ) {
        margin-left: 300px;
    }
    
`

const PageWrapperCenteredDiv = styled.div`   
    padding: 5em 1em 0;
    margin: 0em auto;
    min-height: 100vh;
    max-width: 922px; 
`

const BackgroundPhoto = styled.div`
    height: 480px;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: -1;
    background-image: url(./assets/background${(props:backgroundProp) => props.backgroundImageIndex}.jpg);
    
`

interface pageWrapperProps {
    breakpoint: string
}

interface pageWrapperState {

}

export default function PageWrapper (props: pageWrapperProps) {
    let backgroundImageIndex = Math.floor(Math.random() * 8) + 1

        return (
                <PageWrapperDiv>
                    <BackgroundPhoto backgroundImageIndex={backgroundImageIndex} />
                    <Menu />
                    <PageContentWrapperDiv>
                        <PageWrapperCenteredDiv>
                            <MainContent/>
                        </PageWrapperCenteredDiv>
                    </PageContentWrapperDiv>

                </PageWrapperDiv>

        );

}

