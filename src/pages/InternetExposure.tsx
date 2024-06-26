import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";
import { CODE_REPOS, SIDE_HUSTLE} from "../index";



export default function InternetExposure() {
    return (
        <div>
            <MainContentTitle title={'Public me'} />
            <h4>GitHub</h4>
            <p>This is my github: <a target="_blank" rel="noreferrer" href={'https://github.com/FrancescJR'} >
                https://github.com/FrancescJR
                </a>
            </p>
            <p>And this is my <a href={"/" + SIDE_HUSTLE}> side hustle</a> Github:
                <a target="_blank" rel="noreferrer" href={'https://github.com/eniltrexAdmin'} >
                    https://github.com/eniltrexAdmin
                </a>
            </p>
            <p>Some of the repos are private though. <a href={"/" + CODE_REPOS}>Check this page</a> for a comprehensive list of the most important repositories
                I have public.
            </p>

            <h4>Social Media</h4>
            <p>I am not much active on social media. I reply linkedIn messages and I post from time to time
            on Instagram. Facebook is there to keep some contacts, but a part from that is like I don't have it.</p>
            <p>This is my instagram account: <a target="_blank" rel="noreferrer" href={'https://www.instagram.com/cesc_decko_car/?hl=en'}>
                https://www.instagram.com/cesc_decko_car/?hl=en</a></p>
            <p>LinkedIn: <a target="_blank" rel="noreferrer"
                            href={"https://es.linkedin.com/in/francesc-travesa-3a836130"}>https://es.linkedin.com/in/francesc-travesa-3a836130</a>
            </p>
            <p>And facebook if you want to see some picture from &lt; 2012 is here:
                <a href={'https://es-la.facebook.com/francesc.travesacentrich'} target="_blank" rel="noreferrer">
                    https://es-la.facebook.com/francesc.travesacentrich</a></p>
            <h4>Writing</h4>
            <p>You might have noticed that I like to write... a lot. Especially with my Thinkpad lenovo keyboard. Nothing
                can be compared to the feeling your fingers get when you type on that keyboard.</p>
            <p>I used to write in different platforms but lately I am posting some articles in hashnode. This is my blog page:</p>
            <p><a href={'https://blog.cesc.cool/'} target="_blank" rel="noreferrer" >https://blog.cesc.cool/</a></p>

            <p>I will probably write some books. One that I have a little bit unorganized but with chapters all over
                Penzu will be about some bad coding practices that I've been seeing among the years. This book
                will be intended for technical people though, with code examples, and written as a satire and also
                as autocriticism.</p>
        </div>
    );
}