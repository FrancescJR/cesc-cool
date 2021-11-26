import React from 'react';
import './tech-project.scss'
import TechBuzzWord from "../tech-buzz-word/TechBuzzWord";

interface TechProjectProps {
    title: string;
    link?: string;
    technologies:string[];
    children?: React.ReactNode;
}

export default function TechProject(props: TechProjectProps){
    let title = props.link ?
        <a href={props.link} target="_blank" rel="noreferrer">{props.title}</a> :
        props.title;

    return (
        <div>
            <div className={'tech-project-header'}>
                <div className={'tech-project-title'}>{title}</div>
                <div className={'tech-project-technologies'}>{props.technologies.map(function(technologyName:string){
                    return <TechBuzzWord indexDictionary={technologyName}/>;
                })}</div>
            </div>
            <div className={'tech-project-description'}>
                {props.children}
            </div>
        </div>
    );
}