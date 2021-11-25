import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuDiv = styled.div`
`


interface menuItemProps {
    isActive:boolean,
}
// note this is a fucking arrow function.
const navLinkStyles = (isActive:menuItemProps) => ({
    'display': 'block',
    'padding': '15px',
    'background': isActive.isActive ?
        'url(./assets/background1.jpg)':
        '#FFF',
    'color': 'black',
    'textDecoration': 'none',
    '&:hover': {
        'background': '#3CA2F3'
    }
})



export default function RouterMenu() {
    return (
        <MenuDiv>
            <NavLink
                to={"/"}
                style={navLinkStyles}
            >
                About Me
            </NavLink>
            <NavLink
                to={"/working-experience"}
                style={navLinkStyles}
            >
                Working Experience
            </NavLink>
            <NavLink
                to={"/side-hustle"}
                style={navLinkStyles}
            >
                Side Hustle
            </NavLink>
            <NavLink
                to={"/skills"}
                style={navLinkStyles}
            >
                Skills
            </NavLink>
            <NavLink
                to={"/books"}
                style={navLinkStyles}
            >
                Books
            </NavLink>
            <NavLink
                to={"/blog"}
                style={navLinkStyles}
            >
                Blog
            </NavLink>
            <NavLink
                to={"/instagram"}
                style={navLinkStyles}
            >
                Instagram
            </NavLink>
            <NavLink
                to={"/education"}
                style={navLinkStyles}
            >
                Education
            </NavLink>
        </MenuDiv>
    );
}