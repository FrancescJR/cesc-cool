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
        'url(./assets/background8.jpg)':
        '#FFF',
    'color': 'black',
    'textDecoration': 'none',
    '&:hover': {
        'background': '#3CA2F3'
    }
})



export default function RouterMenu() {
    let navLink =  <NavLink  to={"/about"} />
    console.log(navLink.type);
    let stylesForNavLink =  navLinkStyles(navLink.props);
    return (
        <MenuDiv>
            <NavLink
                to={"/about"}
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
        </MenuDiv>
    );
}