import React from 'react';
import {TECHNOLOGIES} from "../tech-buzz-word/TechBuzzWordsDictionary";
import SkillLevel from "../skill-level/SkillLevel";

interface techRowProps{
    indexDictionary:string
}

export default function TechTableRow(props: techRowProps) {


    let tech_skill_info = TECHNOLOGIES[props.indexDictionary];

    return (window.innerWidth > 1440 ?
        <div className={'tech-table-row'} >
            <div className={'tech-table-row-title'}>{tech_skill_info.name}</div>
            <div className={'tech-table-row-level'}><SkillLevel level={tech_skill_info.level} /></div>
            <div className={'tech-table-row-description'}>{tech_skill_info.experience_description}</div>
        </div> :
            <div className={'tech-table-row-mobile'} >
                <div className={'tech-table-row mobile'} >
                    <div className={'tech-table-row-title mobile'}>{tech_skill_info.name}</div>
                    <div className={'tech-table-row-level mobile'}><SkillLevel level={tech_skill_info.level} /></div>

                </div>
                <div className={'tech-table-row mobile'}>
                    <div className={'tech-table-row-description mobile'}>{tech_skill_info.experience_description}</div>
                </div>
            </div>

    );
}