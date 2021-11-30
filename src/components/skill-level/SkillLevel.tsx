import React from "react";
import './skill-level.scss';
interface SkillLevelProps {
    level: number
}

export const MAX_LEVEL = 5;

export default function SkillLevel(props: SkillLevelProps) {

    let render = [];
    for(let i =0; i < MAX_LEVEL; i++) {
        props.level> i ?
            render.push(<span className={'completed'} key={i}>⬤</span>) :
            render.push(<span className={'incomplete'} key={i}>◯</span>) ;

    }

    return (
        <div className={'skill-level'}>{render}</div>
    );
}