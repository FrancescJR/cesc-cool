import React from 'react';
import styled, {StyledComponentBase} from "styled-components";
import Menu from "./menu/Menu";
import MainContent from "./MainContent";

interface backgroundProp {
    backgroundImageIndex: number;
}

const PageWrapperDiv = styled.div`
    position: relative;
`


const PageWrapperCenteredDiv = styled.div`    
    margin: 0 auto; #since there it no header 3 em on top;
    min-height: 100vh;
    max-width: 100vh; 
`

const PageContentWrapperDiv = styled.div`
padding-top:24px;
    
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

}

interface pageWrapperState {

}

export default function PageWrapper (props: pageWrapperProps) {
    let backgroundImageIndex = Math.floor(Math.random() * 8) + 1

        return (
                <PageWrapperDiv>
                    <BackgroundPhoto backgroundImageIndex={backgroundImageIndex} />
                    <Menu />
                    <PageWrapperCenteredDiv>
                        <PageContentWrapperDiv>
                            <MainContent/>
                        </PageContentWrapperDiv>
                    </PageWrapperCenteredDiv>

                </PageWrapperDiv>

        );

}

