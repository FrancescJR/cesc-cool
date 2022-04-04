import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";



export default function AboutMe() {
    return (
        <div>
            <MainContentTitle title={'About Me'} />
            <h5>Short story</h5>
            <p>Hello! It is most certainly a pleasure to meet you.</p>
            <p>I am an engineer born and raised in Barcelona and seasoned in Japan for 5 years. My major
            is computer science and since I graduated I have been working on the development of full web applications
            and systems. I try to always follow SOLID principles and to have a DDD approach to problems. Those and
                a good devops mindset are the best tools to minimize technical debt and make the SCRUM velocity
                of any team soar.</p>

            <h5>Long story</h5>
            <p>I am an engineer - graduated on "informatics" which is computer science, but it is not computer science
                as probably it is on USA, but anyway I graduated long time ago so that doesn't matter that much anymore</p>
            <p> I've been born and raised in Barcelona but my professional experience -without counting a long internship-
                started in Japan where I lived almost 5 years</p>
            <p> Now, though, it's been almost the same amount of time in Barcelona already, again.</p>
            <p> I always worked on distributed systems on internet. I used to use Drupal and CMS and now I run away
                from them as much as possible. But I can't deny that thanks to Drupal I got the change to live and
                work in Japan and that is something that I will always be grateful for.</p>
            <p>I always -well, ehem, since I was aware of them, but it's been some time now- try to follow SOLID principles
                and I also try to have a Domain Driven Design approach to the development - Hexagonal Architecture, Aggregates,
                Value Objects and recently getting messy with even sourcing and CQRS projections...</p>
            <p>I believe DDD is the only approach that actually minimizes technical debt. This and a good devops mindset.</p>
            <p>Devops should be a competence not a job title, and while I like that there are experts about the tools
                and directions and everything that you can learn from them, they should never be unaware of the business
                at hand, of the domain.</p>
            <p>Strongly believe that team members should have T shaped skills (while devops skills should be the strongest
                second skill for every member, so I am not sure which would be the resulting letter) and that teams should
                be autonomous to deploy to production and solve the problems without having to ask anything to people that
                are probably unrelated to the question at hand.</p>
            <h5>Companies</h5>
            <p>Recently recruiters ask me what am I looking for in a company. After seeing and working in a fair
            amount of them, the answer is quite extense, but here I will try to summarize the points that will
            make me motivate enough to work in a place.</p>
            <h6>Environment</h6>
            <p>That is from my latest experiences, the environment is what makes me feel miserable going to work
            or what makes me thrive. It is crucial and should be carefully looked upon to get rid of certain
            behaviours.</p>
            <p>Small comments like "don't you know that?". "No, this has nothing to do with it". Or just out of the
            blue lectures that are sketchy at least of tangent things. They all dynamite the safety of the environment.
            People over sure about theis knowledge are the worst in my opinion. Especially because I am almost never
            sure, and I need to go and check the code, or the book that explained some concepts. I am really annoyed
            when I am lectured of something and then I read on the books (see the books section about the kind
            of books I am reading) that this lecture is either plain wrong, incomplete, or misses the point.</p>
            <p>Look, we are all here constantly learning, constantly getting things wrong, but everybody should assume
            the best of other people, not the opposite.</p>
            <p>The problem, with that is that it is very hard to identify such environments. Just a single person
            can make everybody afraid of speaking up and asking questions. Discussions that would get the best solution
            never happen. Only the talent of one person is valid in this environment. The talents of the rest of
            the people become useless.</p>
            <p>Managers should make extra effort about correcting this. The problem is that often managers are also
            afraid of being singled out and looking like idiots. Some advice here: </p>
            <ul>
                <li>constantly ask for opinions of everybody. (if anybody is resistant of giving it, probably this person
                doesn't feel comfortable).</li>
                <li>try to limit the size of the groups. The bigger the group, the bigger the fear to speak up.</li>
                <li>Always assume that you might be wrong.</li>
                <li>Identify harmful behaviour, but never point it out in front of others, deal with it personally.</li>
                <li>Language nuances matter, sometimes the toxicity happens only, or stronger, in a language that
                it is not native to you, but looking on the points above, you might discover if things like those
                are happening.</li>
            </ul>
            <p>Because of my aversion to conflict, the chances that I quit the company instead of solving the problem
            with this kind of people are way higher.</p>
            <p>Well to sum-up: safe environment. With proactive work to make it safe for real (doing the
                bullet points above should be enough). If you are hiring
            and you do absolutely no action to make the environment safe, then it is as well as a not safe environment.</p>
            <h6>Impact</h6>
            <p>On the DevOps Handbook, and also on Building Microservices books it is explained how useful/profitable/great
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
            <h6>Technologies</h6>
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
            <h6>Language</h6>
            <p> I am based in Spain and I speak Spanish, obviously, but for work I feel way more comfortable speaking
            in English. A big reason is that I believe all of the toxic behaviours go down a level when people are
            forced to use a a non-native language. And if it is, well, it's not native to me, so I might miss all
            the toxic nuances that one might say when using English, so it's all for the best in any case.</p>
            <p>When I reason a discuss and try to find solution, I normally quote the books or use the same reasoning,
            those books are written in English, and somehow I think I do a terrible job translating the intentions
            written there to Spanish. Maybe I'd do a better job translating to Catalan.</p>
            <p> Also, using English makes me feel that I am "at the edge". Not falling behind technical wise. That the
            company I am working for is advanced!</p>
            <h6>Remote work policy</h6>
            <p>The office should be mandatory only when it makes sense to go: some meetings, maybe on boardings
            and some other similar things. If you need to force people to go to the office... you have a problem.</p>
            <p>I am totally happy to go to the office to meet with the peers, and I like to go maybe once a week,
            but of course this day will be about meetings, talking to each other, team building, and doing little
            work. Maybe some pair programming.</p>
            <p>I complete all the tasks that I am assigned on time always. There's no need to go to the office to prove
            that. To go a share a bathroom, to argue about the temperature of the office, and to commute (really,
            commuting feels so absurd at this time and age).</p>
            <h6>Career trajectory</h6>
            <p>This is mainly for the long term. But I won't stay in a company in which I don't see myself in the future.
            but well, I have my aspirations of both getting the "devops title" and eventually working for myself only.
            Can you make it attractive enough that I can do the same but working for you?</p>


            <h5>Stats</h5>
            <p>Full name: Francesc Travesa Centrich</p>
            <p>Email: name+lastname at gmail.com</p>
            <p>Color: brownish light, like Turkish</p>
            <p>Appearance: Irresistibly handsome</p>
        </div>
    );
}