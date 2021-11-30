import React from 'react';

import {TECHNOLOGIES} from "../tech-buzz-word/TechBuzzWordsDictionary";
import TechBuzzWord from "../tech-buzz-word/TechBuzzWord";

import "./tech-cloud.scss"

interface techCloudProps {
    selectedSkills: string[]
}

export default function TechCloud(props:techCloudProps) {


    let tech_cloud = Object.keys(TECHNOLOGIES).map((key) => {
        return <TechBuzzWord indexDictionary={key} key={key} selectedWords={props.selectedSkills} inSkillPage={true}/>
    })

    return (
        <div className={'tech-words-cloud'}>
            {tech_cloud}
        </div>

    );
}