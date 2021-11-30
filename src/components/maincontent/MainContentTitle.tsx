import React from 'react';
import './mainContentTitle.scss';


interface titleProps {
    title: string
}

export default function MainContentTitle(props:titleProps) {
    return (
        <div className={'header'}>
            {/*<div className={'empty-space'}/>*/}
            <h2 className={'list-title'}>{props.title}</h2>
        </div>
    );
}