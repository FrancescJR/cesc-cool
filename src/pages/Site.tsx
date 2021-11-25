import React from 'react';
import styled from "styled-components";
import Menu from "../components/menu/Menu";
import MainContent from "./MainContent";

interface backgroundProp {
    backgroundImageIndex: number;
}

const PageWrapperDiv = styled.div`
    position: relative;
`

const PageContentWrapperDiv = styled.div`
    @media ( min-width: 1440px ) {
        margin-left: 284px;
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

export interface siteProps {
    route: string
}


export default function Site (props: siteProps) {
    let backgroundImageIndex = Math.floor(Math.random() * 8) + 1

        return (
            <div>
                <Menu />
                <PageWrapperDiv>
                    <BackgroundPhoto backgroundImageIndex={backgroundImageIndex} />
                    <PageContentWrapperDiv>
                        <PageWrapperCenteredDiv>
                            <MainContent route={props.route}/>
                        </PageWrapperCenteredDiv>
                    </PageContentWrapperDiv>
                </PageWrapperDiv>
            </div>
        );

}

