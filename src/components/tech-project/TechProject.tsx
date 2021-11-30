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
        <div className={'no-link-title'}>{props.title}</div>;

    return (
        <div className={'tech-project-pill'}>
            <div className={'tech-project-header'}>
                <div className={'tech-project-title'}>{title}</div>
                <div className={'tech-project-technologies'}>{props.technologies.map(function(technologyName:string){
                    return <TechBuzzWord indexDictionary={technologyName} selectedWords={[]} inSkillPage={false} key={technologyName} />;
                })}</div>
            </div>
            <div className={'tech-project-description'}>
                {props.children}
            </div>
        </div>
    );
}