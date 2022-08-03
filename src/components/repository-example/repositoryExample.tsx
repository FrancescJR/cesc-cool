import React from 'react';

interface RepoProps {
    title: string;
    language: string;
    link: string;
    children?: React.ReactNode;
}

export default function RepoExample(props: RepoProps){
    return (
        <div>
            <div className={'repo-header'}>
        <div className={'repo-title'}><a href={props.link} target="_blank" rel="noreferrer">{props.title}</a></div>
        </div>
        <div className={'repo-description'}>
        {props.children}
        </div>
        </div>
);
}