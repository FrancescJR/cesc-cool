import React from 'react';
import './tech-buzz-word.scss'
import {TECHNOLOGIES} from "./TechBuzzWordsDictionary";

interface TechBuzzWordProps {
    indexDictionary: string;
}



export default function TechBuzzWord(props: TechBuzzWordProps) {
console.log(props.indexDictionary);
console.log("here");
    let name = TECHNOLOGIES[props.indexDictionary].name;

    return (
        <a className={'tech-buzz-word'} href={'#'}>{name}</a>
    );
}

