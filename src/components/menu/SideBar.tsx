import React from 'react';
import styled from "styled-components";
import RouterMenu from "./RouterMenu";
import Slogan from "../slogan/Slogan";
import {NavLink} from "react-router-dom";

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
    height: 422px;

`

const SideBarTopContentWrapper = styled.div`
 padding: 1em;
      min-width:284px;
`

const SideBarBottomWrapper = styled.div`
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


interface sideBarProps {

}

export default function SideBar (props: sideBarProps) {

    return (
        <SidebarWrapper>
                <SidebarTopWrapper>
                    <SideBarTopContentWrapper>
                        <NavLink
                            to={"/"}
                        >
                            <AvatarDiv/>
                        </NavLink>
                        <NameDiv>Cesc</NameDiv>
                        <Slogan />
                    </SideBarTopContentWrapper>
                </SidebarTopWrapper>
            <SideBarBottomWrapper>
                <RouterMenu/>
            </SideBarBottomWrapper>
        </SidebarWrapper>
    );

}
