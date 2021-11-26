import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {ABOUT, WORKING_EXPERIENCE, SIDE_HUSTLE, SKILLS, BOOKS, EDUCATION, INTERNET_EXPOSURE, LANGUAGES} from "../../index";

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
                to={"/" + WORKING_EXPERIENCE}
                style={navLinkStyles}
            >
                Working Experience
            </NavLink>
            <NavLink
                to={"/" + SIDE_HUSTLE}
                style={navLinkStyles}
            >
                Side Hustle
            </NavLink>
            <NavLink
                to={"/" + SKILLS}
                style={navLinkStyles}
            >
                Skills
            </NavLink>
            <NavLink
                to={"/" + BOOKS}
                style={navLinkStyles}
            >
                Books
            </NavLink>
            <NavLink
                to={"/" + INTERNET_EXPOSURE}
                style={navLinkStyles}
            >
                Internet Exposure
            </NavLink>
            <NavLink
                to={"/" + EDUCATION}
                style={navLinkStyles}
            >
                Education
            </NavLink>
            <NavLink
                to={"/" + LANGUAGES}
                style={navLinkStyles}
            >
                Languages
            </NavLink>
        </MenuDiv>
    );
}