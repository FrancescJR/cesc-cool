import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";
import {BOOKS, SIDE_HUSTLE} from "../index";



export default function InternetExposure() {
    return (
        <div>
            <MainContentTitle title={'Public me'} />
            <h4>GitHub</h4>
            <p>For my personal projects, and some from my side hustle (see <a href={"/" + SIDE_HUSTLE}>here</a>) this is my github:
            <a target="_blank" rel="noreferrer" href={'https://github.com/FrancescJR'} >https://github.com/FrancescJR</a></p>
            <p>There are also some technical challenges completed. All of them I did before actually reading all the books
             from <a href={'/' + BOOKS}>here</a>.</p>
            <p>
                They are in general quite OK for my point of view. Probably I am missing here and there some technique that
                would make them better, but I don't think I am doing anything wrong on those (until I review them, which
                I haven't yet). There are no examples of event sourcing or CQRS for example, but, again,
                nothing wrong in there - so far- that's why I am not embarrassed to show them.</p>
            <p><a href={"https://github.com/FrancescJR/collective-minds-challenge"}>This one</a> might be the best so far.
            I already thought of a slightly better solution, but it's the latest test I did. I was actually plannign to use
            this one for myself to have some examples at hand - so I want to add event sourcing approach, CQRS and others.
            Only that the test itself, as you can understand by the readme I wrote, has little sense. But since it's the
            latest I did, it still the better, at least from my point of view.</p>
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
            <p>The platform I use is blogger. I had many during the years. Right now I just write mainly for myself.
            I switched Blogger for Penzu. Before I used to share my posts on Facebook and everywhere, but my Facebook
            account is kind of inactive and I don't dare to show my deepest thoughts there. It's just my cowardice, because
            those posts were written with an audience in mind. Let's say I have sometimes bursts of bravery, then I post publicly everywhere, and
                on the following day my cowardice gains terrain and I put it all back to private again.</p>
            <p>Well here you will find some of the posts, the few ones I dare to have public now. I have all the old ones
                too but this time I haven't published them.</p>
            <p>I just messed up this subdomain at moving the name servers from google to aws. Sorry...</p>
            <p><a href={'http://economic.cesc.cool/'} target="_blank" rel="noreferrer" >http://economic.cesc.cool/</a></p>

            <p>I will probably write some books. One that I have a little bit unorganized but with chapters all over
                Penzu will be about some bad coding practices that I've been seeing among the years. This book
                will be intended for technical people though, with code examples, and written as a satire and also
                as autocriticism.</p>
        </div>
    );
}