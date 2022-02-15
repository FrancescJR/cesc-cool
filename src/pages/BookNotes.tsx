import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";
import BookDualMenu from "../components/book-dual-menu/BookDualMenu";


export default function BookNotes() {
    return (
        <div>
            <MainContentTitle title={'Book Notes'} />
            <BookDualMenu notesActive={true}/>
            <p>This page gather all my notes and highlights of the books I read.</p>
            <p>I still don't know the whole content so I am not sure how I am going to design this page.</p>
        </div>
        );
}
