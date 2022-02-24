import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";
import BookDualMenu from "../components/book-dual-menu/BookDualMenu";
import {BOOK_DDD_IN_PHP} from "../components/book-note/BookNotesDB1DDD_IN_PHP";
import BookNote from "../components/book-note/BookNote";
import {BOOK_IMPLEMENTING_DDD} from "../components/book-note/BookNotesDB2";


export default function BookNotes() {

    let ddd_in_php_book_notes = BOOK_DDD_IN_PHP.map((noteContent) => {
        return <BookNote context={noteContent.context} quote={noteContent.quote} personal_note={noteContent.personal_note} />
    })

    let implementing_ddd_notes = BOOK_IMPLEMENTING_DDD.map((noteContent) => {
        return <BookNote context={noteContent.context} quote={noteContent.quote} personal_note={noteContent.personal_note} />
    })

    return (
        <div>
            <MainContentTitle title={'Book Notes'} />
            <BookDualMenu notesActive={true}/>
            <p>This page gather all my notes and highlights of the books I read.</p>
            <p>I will probably cross reference, since many highlights refer to the same subject
            but they are from different books. It might be interesting to easily compare what
            each book said about the same subject.</p>
            <p>It will also be filterable by book, not only per subject. So kind of Matrix.</p>
            <div>
                <h5>About DDD in PHP</h5>
                <div>
                    {ddd_in_php_book_notes}
                </div>

            </div>
        </div>
        );
}
