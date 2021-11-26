import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";

import {TECHNOLOGIES} from "../components/tech-buzz-word/TechBuzzWordsDictionary";
import TechBuzzWord from "../components/tech-buzz-word/TechBuzzWord";

export default function Skills() {

    let tech_cloud = Object.keys(TECHNOLOGIES).map((key) => {
        return <TechBuzzWord indexDictionary={key}/>
    })

    return (
        <div>
            <MainContentTitle title={'Skills'}/>
            <div className={'tech-words-cloud'}>
                {tech_cloud}
            </div>
            <div className={'tech-word-list'}>

            </div>
        </div>
    );
}