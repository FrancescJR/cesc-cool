import React from 'react';
import TechBuzzWord from "../tech-buzz-word/TechBuzzWord";
import styled from "styled-components";

interface RepoProps {
    title: string;
    technologies: string[];
    link: string;
    children?: React.ReactNode;
}

const PILL_COLOR=  "#a1a1a1";

export default function RepoExample(props: RepoProps){
    return (
        <div className={'repo-code-pill'} style={codeRepoPillStyles}>
            <div className={'repo-code-header'}>
                <div className={'repo-code-title'} style={codeRepoTechTitle}>
                    <a href={props.link} target="_blank" rel="noreferrer" style={codeRepoTitleLinkStyle}>{props.title}</a>
                </div>
                <div className={'repo-code-technologies'} style={codeRepoTechStyle}>{props.technologies.map(function(technologyName:string){
                    return <TechBuzzWord indexDictionary={technologyName} selectedWords={[]} inSkillPage={false} key={technologyName} />;
                })}</div>
            </div>
            <div className={'repo-code-description'} style={codeRepoDescriptionStyle}>
                {props.children}
            </div>
        </div>
);
}

const codeRepoPillStyles = {
    'margin': '1em',
};

const codeRepoTechTitle = {
    'font-weight': 'bold',
    'color': PILL_COLOR
}

const codeRepoTitleLinkStyle = {
    'border-bottom': '1px solid ' + PILL_COLOR,
    'padding': '0.5em 0',
    'margin': '0 2em 1em',
    'color': '#000',
    'width': '90%',
    'display': 'inline-block'
}
const codeRepoTechStyle = {
    'padding': '0.5em 2em 0.75em',
};

const codeRepoDescriptionStyle = {
    'padding': '0.5em 2em',
};