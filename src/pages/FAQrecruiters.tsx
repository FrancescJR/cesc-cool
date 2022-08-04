import React from 'react';
import {BOOKS, CODE_REPOS} from "../index";
import MainContentTitle from "../components/maincontent/MainContentTitle";



export default function FAQRecruitersPage() {
    return (
        <div>
            <MainContentTitle title={'F.A.Q. for hiring companies:'} />
            <p>First of all, I am tired of technical challenges, so if you are really interested in me, please go
                and <a href={'/' + CODE_REPOS}>where my work is available for your scrutiny.</a></p>
            <p>Often recruiters ask me the same exact things so they can somehow "profile me". Let me try to summarize
                what I am looking for in a company, so you can properly "profile" me:</p>
            <h5>Environment</h5>
            <p>That is from my latest experiences, the environment is what makes me feel miserable going to work
                or what makes me thrive. It is crucial and should be carefully looked upon to get rid of certain
                behaviours.</p>
            <p>Managers should make extra effort about correcting this. The problem is that often managers are also
                afraid of being singled out and being made look like idiots. Some advice here: </p>
            <ul>
                <li>constantly ask for opinions from everybody. (if anybody is resistant of giving it, probably this person
                    doesn't feel comfortable).</li>
                <li>try to limit the size of the groups. The bigger the group, the bigger the fear to speak up.</li>
                <li>Always assume that you might be wrong.</li>
                <li>Identify harmful behaviour, but never point it out in front of others, deal with it personally.</li>
            </ul>
            <p>How to identify harmful behaviour? listen at the message being conveyed. You can single out the people
                that on every interaction the message they want to convey is only this one: "I know this, I know a lot,
                I know more than anybody else. Others don't know as much as me. I am better than my colleagues".
                Regardless of the conversation at hand. A person whose motivation to show
                off surpasses the motivation for a candid communication discussion is a person that destroys the environment.
                You will realize those people hardly listen to others, and when they have to they don't do it for long normally
                cutting before you aren't finished. Those are not good teachers either.</p>
            <p>Well to sum-up: safe environment. With proactive work to make it safe for real (doing the
                bullet points above should be enough). If you are hiring
                and you do absolutely no action to make the environment safe, then it is as well as a not safe environment.</p>
            <h5>Impact</h5>
            <p>On the <a href={'/' + BOOKS}>DevOps Handbook</a>, and also on <a href={'/' + BOOKS}>
                Building Microservices</a> books it is explained how useful/profitable/great
                it is to enable teams. Teams should have the whole stream and responsibility of a (part) of the
                product, from frontend to the infra. If the company has a single team, then this is pretty much the
                only way of working.</p>
            <p>That is not the same on big companies. Technical divisions of frontends/backends/devops/DBA and any
                other division on any other technical concern is simply a mistake, a bad decision.</p>
            <p>I know that by experience, where it doesn't matter how much effort you put on a task that it might
                even become obsolete before reaching production. Companies that are organized like that just give frustration
                to all of its employees.</p>
            <p>Now, managers that don't see this problems shouldn't be managers at all. You can accept how things are
                when you join a company, but there should be some proactive steps to make teams responsible of the
                whole work stream. And keep being better at it. Keep pushing the responsibility inside a single team.
                You will find the next step on changes on the organization that needs to be done, until you can finally
                reach totally autonomous teams. Teams not being autonomous should be the first priority to address.</p>
            <p>There's way more things to say in here but I don't want to get out of the scope.</p>
            <p>Summing up: I want to have impact on a company, that either implies that the company is small or
                that the organization allows for it.</p>
            <h5>Technologies</h5>
            <p>Well, it's not secret that PHP is the world of Wordpress and CMS. It's hard to find proper DDD approaches
                in the PHP world. In Spain maybe the panorama is a little bit better thanks to codily.tv, but a reality
                is that PHP is probably the language where are the lowest-paying tech jobs (which is unfair in my opinion)</p>
            <p>Unfair is it maybe, it is a reality, so anything that WITH the job comes learning - so using in production
                - other languages is very welcome.</p>
            <p>Another thing, and related to impact, is that sometimes I feel that I need the "title" of devops (despite
                probably having way more real life experience on that) to be heard and to actually solve problems that are
                worth solving. So if it comes with the job that is very welcome. In any case, since I am paying for all the
                books I am reading, I am now paying for some certifications for myself too.</p>
            <p>Finally, since the job I will do will probably be in PHP because it is the only language that I feel
                I can justify a senior salary, at least that it follows some "latest" trends: hexagonal architecture,
                event sourcing CQRS, all of this is welcome. Code splitted in bounded contexts instead of a huge Monolith, etc
                (but a caution word here, codilytv zealots and other people
                that never read a book in English think there's only one way of being right here,
                it is very easy to find the egos and the toxic behaviours
                on this aspect, let's not fall into this trap and keep an open mind, shall we?).</p>
            <h5>Language</h5>
            <p> I am based in Spain and I speak Spanish, obviously, but for work I feel way more comfortable speaking
                in English. A big reason is that I believe all of the toxic behaviours go down a level when people are
                forced to use a a non-native language. And if it is, well, it's not native to me, so I might miss all
                the toxic nuances that one might say when using English, so it's all for the best in any case.</p>
            <p>When I reason a discuss and try to find solution, I normally quote the books or use the same reasoning,
                those books are written in English, and somehow I think I do a terrible job translating the intentions
                written there to Spanish. Maybe I'd do a better job translating to Catalan.</p>
            <p> Also, using English makes me feel that I am "at the edge". Not falling behind technical wise. That the
                company I am working for is advanced!</p>
            <h5>Remote work policy</h5>
            <p>The office should be mandatory only when it makes sense to go: some meetings, maybe on boardings
                and some other similar things. If you need to force people to go to the office... you have a problem.</p>
            <p>I am totally happy to go to the office to meet with the peers, and I like to go maybe once a week,
                but of course this day will be about meetings, talking to each other, team building, and doing little
                work. Maybe some pair programming.</p>
            <p>I complete all the tasks that I am assigned on time always. There's no need to go to the office to prove
                that. To go a share a bathroom, to argue about the temperature of the office, and to commute (really,
                commuting feels so absurd at this time and age).</p>
            <h5>Career trajectory</h5>
            <p>This is mainly for the long term. But I won't stay in a company in which I don't see myself in the future.
                but well, I have my aspirations of both getting the "devops title" and eventually working for myself only.
                Can you make it attractive enough that I can do the same but working for you?</p>
            <h6><a href={'/' + BOOKS}>Books</a></h6>
            <p>I would say books are very important to understand the big picture of the industry. You can not know
                which are the good or bad practices without reading the appropriate books. There is knowledge of
                people that have decades of experience, validated by other people that also have years of experience.</p>
            <p>I have seen very smart people trying to solve problems in the most complicated way while several
                easier options and more appropriate are just explained on those books. If in an interview I don't see absolutely
                none of the books here mentioned not even once, to me that would be a red flag that the company is in a knowledge
                cave, not aware of the industry standards.</p>
            <p>Imagine a non safe environment on a place where nobody read any of the books! Well, I've seen some!</p>
            <h4>Stats</h4>
            <p>Full name: Francesc Travesa Centrich</p>
            <p>Email: name.lastname at gmail.com</p>
            <p>Color: brownish light, like Turkish</p>
            <p>Appearance: Irresistibly handsome and young, very young, so don't get surprised please.</p>
        </div>
    )
}