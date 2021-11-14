import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function RouterMenu() {
    return (
        <div>
            <Link to={"/about"}>About Me</Link>
            <Link to={"/working-experience"}>Working Experience</Link>
        </div>
    );
}