import React from 'react';
import MainContentTitle from "../components/maincontent/MainContentTitle";


export default function AboutMe() {
    return (
        <div>
            <MainContentTitle title={'About Me'} />
            <h4>Short story</h4>
            <p>Hello! It is most certainly a pleasure to meet you.</p>
            <p>I am an engineer born and raised in Barcelona and seasoned in Japan for 5 years. My major
            is computer science and since I graduated I have been working on the development of full web applications
            and systems. I try to always follow SOLID principles and to have a DDD approach to problems. Those and
                a good devops mindset are the best tools to minimize technical debt and make the SCRUM velocity
                of any team soar.</p>

            <h4>Long story</h4>
            <p>I am an engineer - graduated on "informatics" which is computer science, but it is not computer science
                as probably it is on the USA, but anyway I graduated long time ago so that doesn't matter that much anymore.</p>
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
            <p>There are a couple of things that define that make me different than the rest of the society. First of all
            I always assume that my colleagues, the other people walking on the street, that anybody else is better than
            me, at least in something. A japanese trait probably, the worst thing you can do is
            to annoy the others. The bad thing about that is that I also expect a similar respect from others and that's
            not always the case.</p>
            <p>The other differential trait is that I commonly take the scientific approach to solve problems/issues.
            What's that? I start by some hypothesis of what could the problem, then I design and experiment that proves
            or refutes my hypothesis, I gain this knowledge, and then I can finally solve the issue. I rarely solve an issue
            without being able to explain exactly what was happening. This approach normally takes longer, but it's worth it
            and with some experience on my shoulders I can go quite fast.</p>
        </div>
    );
}