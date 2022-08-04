import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
    WORKING_EXPERIENCE,
    SIDE_HUSTLE,
    SKILLS,
    BOOKS,
    EDUCATION,
    INTERNET_EXPOSURE,
    LANGUAGES,
    FAQRecruiters, CODE_REPOS
} from "../../index";

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
                to={"/" + FAQRecruiters}
                style={navLinkStyles}
            >
                F.A.Q. by recruiters
            </NavLink>
            <NavLink
                to={"/" + WORKING_EXPERIENCE}
                style={navLinkStyles}
            >
                Working Experience
            </NavLink>
            <NavLink
                to={"/" + SKILLS}
                style={navLinkStyles}
            >
                Skills
            </NavLink>
            <NavLink
                to={"/" + SIDE_HUSTLE}
                style={navLinkStyles}
            >
                Side Hustle
            </NavLink>
            <NavLink
                to={"/" + CODE_REPOS}
                style={navLinkStyles}
            >
                Public Repositories
            </NavLink>
            <NavLink
                to={"/" + BOOKS}
                style={navLinkStyles}
            >
                Books
            </NavLink>
            <NavLink
                to={"/" + EDUCATION}
                style={navLinkStyles}
            >
                Education
            </NavLink>
            <NavLink
                to={"/" + INTERNET_EXPOSURE}
                style={navLinkStyles}
            >
                Internet Exposure
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