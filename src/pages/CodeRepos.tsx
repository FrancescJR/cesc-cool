import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";
import RepoExample from "../components/repository-example/repositoryExample";
import {
    AWS_WILDCARD, CI_CD,
    CQRS,
    DDD,
    EVENT_SOURCING, GIT, GITHUB_ACTION,
    HEX_ARC, LARAVEL, LOVE_2D, LUA,
    PHP, REACT, RUST,
    SYMFONY, TYPESCRIPT
} from "../components/tech-buzz-word/TechBuzzWordsDictionary";



export default function CodeRepos() {
    return (
        <div>
            <MainContentTitle title={'Public repositories'} />
            <p>Here are some of the projects that I am working on available for the general public
            to criticize and for your scrutiny basically.</p>
            <p>The order is from the ones I like more to the ones that
            are just OK. I am not gonna list things that I did but I don't like. So it's kind of chronological
            at least for what PHP matters.</p>
            <p>All the code here I made myself and does not belong to any company I worked with,
            but I might have been "highly inspired" by that. My point is, I am not disclosing any private knowledge
            of any of the companies I worked for.</p>
            <RepoExample title={'Last PHP Challenge'}
                  link={'https://github.com/FrancescJR/another-example-challenge'}
                         technologies={['PHP','Symfony','Domain Driven Design', 'Hexagonal Architecture']}
            >
                <p>Last tech challenge I did. PHP 8.1. Symfony. Working app, like always. Hexagonal Architecture.</p>
                <p>It has no CQRS (just some preparation) or ES but a part from that, it does a good job of what's being asked.</p>
            </RepoExample>
            <RepoExample title={'Crappy User'}
                         link={'https://github.com/eniltrexAdmin/crappy-user'}
                         technologies={[RUST,CQRS, EVENT_SOURCING, DDD,HEX_ARC]}
            >
                <p>Work In Progress!!! (the current one when I have some time)</p>
                <p>Regular micro centered on identity domain. I am planning to make the same one in GO.</p>
                <p>Rust micro with Actix, Hex architecture, ES, CQRS i la mare que els va parir a tots.
                    Many questions, still deciding which "middleware" to use for a message store</p>.
                <p>I am based in the book and in the cqrs-rust project, and in my experience to do this one.</p>
                <p>It's part of an ecosystem of micros for my project CRAPPY (yet to be added on my side hustle).
                CRAPPY stands for Celebrity Recognition (yeah, nothing original, I just wanted to use AWS AI service),
                and API.... So CRAPI... CRAPPY.</p>
                <p>The infra for that will be Kubernetes cluster, so I finally will have some working experience on that.</p>
            </RepoExample>
            <RepoExample title={'This very webpage'}
                         link={'https://github.com/FrancescJR/cesc-cool'}
                         technologies={[REACT, TYPESCRIPT]}
            >
                <p>The code of the page you are seeing now. React and Typescript.</p>
            </RepoExample>
            <RepoExample title={'Deploy static AWS CF s3 github action'}
                         link={'https://github.com/eniltrexAdmin/deploy-static-aws-cf-s3-site-action'}
                         technologies={[AWS_WILDCARD,GIT, GITHUB_ACTION, CI_CD]}
            >
                <p>The github action I use to deploy this very web page.</p>
                <p>This web page is hosted in S3, served by Cloudfront.</p>
            </RepoExample>
            <RepoExample title={'Simple Tower Defense Canvas'}
                         link={'https://github.com/eniltrexAdmin/simple-tower-defense-canvas'}
                         technologies={[TYPESCRIPT,DDD,HEX_ARC]}
            >
                <p>Work BLOCKED (by the rust project above)</p>
                <p>I created a computer game by turns, using rust and hexagonal architecture. If it wasn't by turns,
                maybe I would have had to rethink the architecure.</p>
                <p>Now I am trying to print it with regular HTML5 canvas, using PIXI.js library for it.</p>
            </RepoExample>
            <RepoExample title={'Love2d Minesweeper'}
                         link={'https://github.com/FrancescJR/minsweeper'}
                         technologies={[LOVE_2D, LUA]}
            >
                <p>Work in progress as for graphics concern. Hexagonal Minesweeper -working- made in
                Love2d framework. Lua.</p>
            </RepoExample>
            <RepoExample title={'React Minesweeper'}
                         link={'https://github.com/eniltrexAdmin/react-minsesweeper'}
                         technologies={[REACT, TYPESCRIPT]}
            >
                <p>Regular Minesweeper. Also WIP, missing many features, but the game works. Graphics are well...
                I am not a designer let's say.</p>
            </RepoExample>
            <RepoExample title={'Laravel PHP Challenge 1'}
                         link={'https://github.com/FrancescJR/bitpanda-task1'}
                         technologies={[PHP,LARAVEL,DDD,HEX_ARC]}
            >
                <p>You can see how to properly use Laravel wih hex architecture here. Now. I was pissed at this challenge.
                It was this and the following one and they told me that I should be "proud" of the solution so I should
                spend about 1.5-2 hours... 8 endpoints in total! Taking into account that I ALWAYS send a solution that
                works, and to be proud... like 1 endpoint might take me 8 hours - the subsequent way less time... but
                it was WTF... btw it's form a company that now they had to layoff 30% of their taskforce...</p>
            </RepoExample>
            <RepoExample title={'Laravel PHP Challenge 2'}
                         link={'https://github.com/FrancescJR/bitpanda-task2'}
                         technologies={[PHP,LARAVEL,DDD,HEX_ARC]}
            >
                <p>More on Laravel. If you want me to do a challenge and to use Laravel, then you have the wrong
                candidate, but also, the wrong challenge and you should probably rethink it. To me it's a huge red flag,
                deal breaker: </p>
                <ul>
                    <li>Laravel gives you out of the box all of frontend stuff that is totally unneeded to do API.</li>
                    <li>Since Laravel gives you both frontend and backend, it's always used as a monolith, not microservices.</li>
                    <li>Also, having frontend and backend together, makes the -so desired by all the companies I have
                        interviewed with- move to microservices harder than it has to be.</li>
                    <li>Laravel uses Eloquent, active record ORM. Active record doesn't let you have inheritance, which
                    is veeeery common to have a proper modelled domain in PHP. (you can have something very weird).</li>
                    <li>Eloquent models clash directly with hexagonal architecture. It brings the infra right inside your
                    domain. To avoid that, you have to do very weird things on your repository implementations, very unnatural
                    things.</li>
                </ul>
                <p>For all of that, I consider a huge red flag being forced to use Laravel for the tech challenge: that
                    means this company doesn't know about Hexagonal Architecture, about DDD, and that the code is totally
                    legacy, and that they don't even know what to do to move to microservices.</p>
                <p>True story of the last company I was contacted from. They want to move to micros, they have a laravel
                monolith, and they force you to do a tech challenge in Laravel.... Well kiddos, if the examples above
                are not sufficient or you don't really understand them, my work there will be more of a babysitting
                than a programmer...</p>
            </RepoExample>
            <RepoExample title={'Another PHP challenge'}
                         link={'https://github.com/FrancescJR/wallbox'}
                         technologies={[PHP,SYMFONY,DDD,HEX_ARC]}
            >
                <p>Another challenge in PHP. No CQRS or ES, but quite Okish - if I remember well</p>
            </RepoExample>
            <RepoExample title={'Another PHP challenge'}
                         link={'https://github.com/FrancescJR/zinio'}
                         technologies={[PHP,SYMFONY,DDD,HEX_ARC]}
            >
                <p>Not much to say.</p>
            </RepoExample>
            <RepoExample title={'Yet Another PHP challenge'}
                         link={'https://github.com/FrancescJR/docler'}
                         technologies={[PHP,SYMFONY,DDD,HEX_ARC]}
            >
                <p>Oh I spend some time implementing the actual infra for that one.</p>
            </RepoExample>
            <RepoExample title={'Yet Another older PHP challenge'}
                         link={'https://github.com/FrancescJR/ottonova'}
                         technologies={[PHP,SYMFONY,DDD,HEX_ARC]}
            >
                <p>Not much to say, some issues there, I received nice feedback of some wrong stuff.. this is quite old.</p>
            </RepoExample>
            <RepoExample title={'Yet Another even older PHP challenge'}
                         link={'https://github.com/FrancescJR/signaturit'}
                         technologies={[PHP,SYMFONY,DDD,HEX_ARC]}
            >
                <p>Not much to say, some issues there, I received nice feedback of some wrong stuff.. this is quite old.</p>
            </RepoExample>
            <RepoExample title={'Yet Another even older 2 PHP challenge'}
                         link={'https://github.com/FrancescJR/signaturit'}
                         technologies={[PHP,SYMFONY,DDD,HEX_ARC]}
            >
                <p>Not much to say. I don't remember this one that much.</p>
            </RepoExample>
        </div>
    )
}