import React from 'react';
import {TECHNOLOGIES} from "../tech-buzz-word/TechBuzzWordsDictionary";
import TechTableRow from "./tech-table-row";
import './tech-table.scss';

interface techTableProps {
    selectedSkills: string[]
}

export default function TechTable(props: techTableProps) {

    let tech_table = Object.keys(TECHNOLOGIES).map((key) => {
        // all right I'm lazy I should make hte array with the parsed keys lower case, instead
        // this ugly if:
        let link = key.toLowerCase().replace(/\s/g, '');
        if (props.selectedSkills.length > 0) {
            if ( props.selectedSkills.includes(link)) {
                return <TechTableRow indexDictionary={key} key={key}/>
            }
            return null;
        }

        return <TechTableRow indexDictionary={key} key={key}/>
    })

    return (
        <div className={'tech-table'}>
            {tech_table}
        </div>

    );
}