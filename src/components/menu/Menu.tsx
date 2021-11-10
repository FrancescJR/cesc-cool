import React from 'react';
import styled from "styled-components";
import {ReactBurgerMenu} from "react-burger-menu";
import {slide as ReactMenu2} from 'react-burger-menu';

const SidebarWrapper = styled.div`
    background: #fff;
    max-width:284px;
    position: fixed;
    top: 0;
    left:0;
    right:auto;
    bottom:0;

    
`

const SidebarTopWrapper = styled.div`
    background: #efefef;
   
    height: 480px;
`

const SideBarTopContentWrapper = styled.div`
 padding: 1em;

`

const AvatarDiv = styled.div`
 margin:0 auto;
 background-image: url(./assets/avatar.png);
 background-size: 120px;
 border-radius: 50%;
 height: 120px;
 width: 120px;
`

const NameDiv = styled.div`
    margin: 1em 0;
    text-align:center;
    font-size:1.5em;
`



interface pageWrapperProps {

}

export default function Menu (props: pageWrapperProps) {

    return (
        <SidebarWrapper>
            <ReactMenu2>
                <a id="home" className="menu-item" href="/">Home</a>
            </ReactMenu2>
            <SidebarTopWrapper>
                <SideBarTopContentWrapper>
                    <AvatarDiv/>
                    <NameDiv>Cesc</NameDiv>
                    <p>Made for you with ❤️ to dissect me like an open book.</p>
                </SideBarTopContentWrapper>
            </SidebarTopWrapper>

        </SidebarWrapper>

    );

}
