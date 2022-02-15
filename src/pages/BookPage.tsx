import React from 'react';
import {useSearchParams} from "react-router-dom";
import BookContent from "./BookContent";
import BookNotes from "./BookNotes";



export default function BookPage() {

    let [searchParams] = useSearchParams();
    let notes = searchParams.get('notes');
    let render = <BookContent/>;
    if (notes) {
        render = <BookNotes/>;
    }
    return (
        render
    );
}
