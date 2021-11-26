import React, {useState} from 'react';
import './book.scss'

interface BookProps {
    title: string;
    author:string;
    amazonLink: string;
    children?: React.ReactNode;
}

export default function Book(props: BookProps){
    return (
        <div>
            <div className={'book-header'}>
                <div className={'book-title'}><a href={props.amazonLink} target="_blank" rel="noreferrer">{props.title}</a></div>
                <div className={'book-author'}>{props.author}</div>
            </div>
            <div className={'book-opinion'}>
                {props.children}
            </div>
        </div>
    );
}