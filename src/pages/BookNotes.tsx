import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";
import BookDualMenu from "../components/book-dual-menu/BookDualMenu";
import {BOOK_DDD_IN_PHP} from "../components/book-note/BookNotesDB1DDD_IN_PHP";
import BookNote from "../components/book-note/BookNote";
import {BOOK_IMPLEMENTING_DDD} from "../components/book-note/BookNotesDB2IDDD";
import {BUILDING_MICROSERVICES} from "../components/book-note/BookNotesDB4BuildingMicroservices";
import {DEVOPS_HANDBOOK} from "../components/book-note/BookNotesDB3DevopsHandBook";
import BookTabs from "../components/book-tab/BookTabs";
import BookTab from "../components/book-tab/BookTab";
import {KAFKA_PAMPHLET} from "../components/book-note/BookNotesDB5Kafka";


export default function BookNotes() {

    let ddd_in_php_book_notes = BOOK_DDD_IN_PHP.map((noteContent) => {
        return <BookNote context={noteContent.context} quote={noteContent.quote} personal_note={noteContent.personal_note} />
    });

    let implementing_ddd_notes = BOOK_IMPLEMENTING_DDD.map((noteContent) => {
        return <BookNote context={noteContent.context} quote={noteContent.quote} personal_note={noteContent.personal_note} />
    });

    let building_microservices = BUILDING_MICROSERVICES.map((noteContent) => {
        return <BookNote context={noteContent.context} quote={noteContent.quote} personal_note={noteContent.personal_note} />
    });

    let devops_handbook = DEVOPS_HANDBOOK.map((noteContent) => {
        return <BookNote context={noteContent.context} quote={noteContent.quote} personal_note={noteContent.personal_note} />
    });

    let kafka_pamphlet = KAFKA_PAMPHLET.map((noteContent) => {
        return <BookNote context={noteContent.context} quote={noteContent.quote} personal_note={noteContent.personal_note} />
    });

    return (
        <div>
            <MainContentTitle title={'Book Notes'} />
            <BookDualMenu notesActive={true}/>
            <p>Some of the notes I took exported from kindle. Or in the case of PDF, manually transcribed here...</p>
            <div>
                <BookTabs>
                    <BookTab title="DDD in PHP (C.B.)">{ddd_in_php_book_notes}</BookTab>
                    <BookTab title="Implementing DDD (V.V)">{implementing_ddd_notes}</BookTab>
                    <BookTab title="Building Microservices (Sam Newman)">{building_microservices}</BookTab>
                    <BookTab title="DevOps Handbook (Gene Kim, Jez Humble...)">{devops_handbook}</BookTab>
                    <BookTab title="Designing Event Driven Systems">{kafka_pamphlet}</BookTab>
                </BookTabs>
            </div>
        </div>
        );
}
