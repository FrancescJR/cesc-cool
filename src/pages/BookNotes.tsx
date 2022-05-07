import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";
import BookDualMenu from "../components/book-dual-menu/BookDualMenu";
import {BOOK_DDD_IN_PHP} from "../components/book-note/BookNotesDB1DDD_IN_PHP";
import BookNote from "../components/book-note/BookNote";
import {BOOK_IMPLEMENTING_DDD} from "../components/book-note/BookNotesDB2IDDD";
import BookTabs from "../components/book-tab/BookTabs";
import BookTab from "../components/book-tab/BookTab";


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
            <p>It will also be filterable by book, not only per subject. So kind of Matrix. WIP!</p>
            <div>
                <BookTabs>
                    <BookTab title="DDD in PHP (C.B.)">{ddd_in_php_book_notes}</BookTab>
                    <BookTab title="Implementing DDD (V.V)">{implementing_ddd_notes}</BookTab>
                </BookTabs>
            </div>
        </div>
        );
}
