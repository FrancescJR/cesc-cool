import React from 'react';
import './tech-buzz-word.scss'
import {useSearchParams} from "react-router-dom";
import {TECHNOLOGIES} from "./TechBuzzWordsDictionary";
import {SKILLS} from "../../index";

export interface TechBuzzWordProps {
    indexDictionary: string;
    selectedWords: string[]
    inSkillPage: boolean;
}



export default function TechBuzzWord(props: TechBuzzWordProps) {
    let name = TECHNOLOGIES[props.indexDictionary].name;
    let link = name.toLowerCase().replace(/\s/g, '');

    let selected = props.selectedWords.includes(link);

    let [searchParams, setSearchParams] = useSearchParams();

    function handleClick(event:any) {
        event.preventDefault();
        let newSelectedWords = props.selectedWords.slice();

        if (selected) {
            newSelectedWords.splice(props.selectedWords.indexOf(link), 1)
        } else {
            newSelectedWords.push(link)
        }
        searchParams.set('search', newSelectedWords.join(','))
        setSearchParams(searchParams);
    }

    return (
        <a
            onClick={props.inSkillPage ? handleClick : ()=>{} }
            className={selected ? 'tech-buzz-word selected': 'tech-buzz-word'}
            href={'/'+ SKILLS +'?search=' + link}>{name}</a>
    );
}

