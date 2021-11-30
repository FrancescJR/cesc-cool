import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";
import TechCloud from "../components/tech-cloud/tech-skill-cloud";
import TechTable from "../components/tech-table/tech-table";
import {useSearchParams} from "react-router-dom";

export default function Skills() {

    let [searchParams] = useSearchParams();

    let selectedWords: string[];
    selectedWords = [];
    let searchString = searchParams.get('search');

    if (searchString) {
        selectedWords = searchString.split(',');
    }


    return (
        <div>
            <MainContentTitle title={'Skills'}/>
            <p>If you can make sense of this page. For me is just a game.</p>
            <p>If you're taking it seriously, you'll need to click one by one.</p>
            <TechCloud selectedSkills={selectedWords}/>
            <TechTable selectedSkills={selectedWords}/>
        </div>
    );
}