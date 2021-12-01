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
            <p>This page is for recruiters, so they can check and cross from their job description list's "requirements" section.
                It's just that
                many job descriptions have little sense, asking for too fine grain skills. And I am just
                mocking that here, in case you haven't noticed.</p>
            <p>If you're taking it seriously, you'll need to click one by one and read them all.</p>
            <TechCloud selectedSkills={selectedWords}/>
            <TechTable selectedSkills={selectedWords}/>
        </div>
    );
}