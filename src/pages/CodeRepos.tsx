import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";
import RepoExample from "../components/repository-example/repositoryExample";



export default function CodeRepos() {
    return (
        <div>
            <MainContentTitle title={'Public repositories'} />
            <p>Here are some of the projects that I am working on available for the general public
            to criticize and for your scrutiny basically.</p>
            <p>The order is chronological so it's also from the ones I like more to the ones that
            are just OK. I am not gonna list things that I did but I don't like.</p>
            <p>All the code here I made myself and does not belong to any company I worked with,
            but I might have been "highly inspired" by that. My point is, I am not disclosing any private knowledge
            of any of the companies I worked for.</p>
            <RepoExample title={'Last PHP Challenge'}
                  link={'https://github.com/FrancescJR/collective-minds-challenge'}
                         technologies={['PHP','Symfony','Domain Driven Design']}
            >
                <p>boo</p>
            </RepoExample>
        </div>
    )
}