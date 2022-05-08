import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";
import { Link } from "react-router-dom";
import {INTERNET_EXPOSURE} from "../index";
import TechProject from "../components/tech-project/TechProject";
import {TYPESCRIPT, REACT, GITHUB_ACTION, TERRAFORM} from "../components/tech-buzz-word/TechBuzzWordsDictionary";

export default function SideHustle() {
    return (
        <div>
            <MainContentTitle title={'Side Hustle'} />
            <p> Isn't that the trend word? Well I own a business where the main goal is to have some passive income (with
                the condition of using the least effort possible, which sometimes this minimum effort is quite big when
                speaking about bureaucracy and entrepreneurship requirements).</p>
            <p>The second goal is that I can get to learn and actually use in production many tools, languages, techniques,
                patterns and other things that I don't get to see often on my current job.</p>
            <p>Having the condition that I am doing the least effort possible (I know the exact minimum effort one needs
                to do in order to learn something, actually the trick is to deal with frustration) so I let myself
                be helped by some trust people that I know that are very good - because I work with them- and that I can
                learn from them a lot. We will share the passive income. I am fair on that.</p>
            <p>Here's a list of current projects on this business: </p>

            <TechProject
                title={'Eniltrex Public Website'}
                link={'https://eniltrex.biz/'}
                technologies={[TYPESCRIPT, REACT, GITHUB_ACTION ]} >
                <p>Main website made with React and Typescript. Ok, you can see it's nice? Because I am actually not doing it.</p>
                <p>I just did the CI/CD is with Github actions to the infra. I am adding this to the list so you can see
                the main web page of this business.</p>
                <p>If you see other pages with that domain, you can assume I did the CI/CD pipelines.</p>
            </TechProject>
            <TechProject
                title={'Cesc WebPage'}
                link={'https://cesc.cool/'}
                technologies={[TYPESCRIPT, REACT, GITHUB_ACTION ]} >
                <p>The site that you are seeing right now. Also with React (functional) and Typescript, but this one, yes
                I did it myself. Also the CI/CD done by myself.</p>
            </TechProject>
            <TechProject
                title={'React MineSweeper'}
                link={'https://minesweeper.staging.eniltrex.biz/'}
                technologies={[TYPESCRIPT, REACT, GITHUB_ACTION ]} >
                <p>Work In Progress, realize that the url, is the "staging" because it is not yet in production.</p>
                <p>Soon to allow you and other to pay me for lives, or others.</p>
            </TechProject>
            <TechProject
                title={'Eniltrex infra'}
                technologies={[TERRAFORM, GITHUB_ACTION ]} >
                <p>The whole infra for the business that supports all the above. Sorry it's a private project. There's no link.
                Just to say that we have everything "terraformed" and automatized. DevOps power.</p>
                <p>Also with CI/CD with github actions.</p>
            </TechProject>
            <TechProject
                title={'Deploy Static React site in AWS CF and S3 GitHub Action'}
                link={'https://github.com/eniltrexAdmin/deploy-static-aws-cf-s3-site-action'}
                technologies={[TERRAFORM, GITHUB_ACTION ]} >
                <p>Single Action to deploy a static site, like the one you are currently reading.</p>
            </TechProject>
            <TechProject
                title={'Install Terraform GitHub Action'}
                link={'https://github.com/eniltrexAdmin/install-terraform-github-action'}
                technologies={[TERRAFORM, GITHUB_ACTION ]} >
                <p>I had some trouble using an existing one, so I did my own. While doing my own I realized what would be
                the trouble I had and how to fix it, but too late, I already have my own.</p>
                <p>Also with CI/CD with github actions.</p>
            </TechProject>

            <h4>Other projects</h4>
            <p>I always had the dream to become economically independent. That is, to have income without having to work.
            Turns out that you need to work very hard first in order to achieve that. Or to start rich already.</p>
            <p>The above "side hustle" is the project on this aspect that is requiring from me the most amount of time.
            Eventually I should have some assets that might bring me some passive income.</p>
            <p>A part from that, you might want to take a look at the <Link to={INTERNET_EXPOSURE} >writing section</Link> to
             see my attempts failed attempts for a blog or for even a book. I'm thinking sometimes to try
                maybe more private stuff.</p>
        </div>
    );
}