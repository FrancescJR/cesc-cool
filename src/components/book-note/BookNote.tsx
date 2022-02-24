import React from 'react';
import {NoteScaffolding} from "./BookNotesDB1DDD_IN_PHP";

import './book-note.scss'

export default function BookNote(props:NoteScaffolding) {
    return (
        <div className={'book-note-container'}>
            <div className={'context'}>
                {props.context}
            </div>
            <blockquote className={'quote'}>
                {props.quote}
            </blockquote>
            <div className={'personal-note'}>
                {props.personal_note}
            </div>
        </div>

    );
}
