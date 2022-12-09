import React from 'react';
import Book from "../components/book/Book";
import MainContentTitle from "../components/maincontent/MainContentTitle";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const h5_css = css`
    h5 {
        padding-top:1em;
        border-bottom:1px solid #000;
    }
`


export default function BookContent() {


    return (
        <div css={h5_css}>
            <MainContentTitle title={'Books'} />
            <p> This is a list of technical books that I have read and some of them re-read, that helped me shape
                my beliefs and my points of views of what IT on every company -big, small, start-up etc- should be.</p>

            <p>You can consider this list of books part of my education. This list is growing and growing!</p>
            
            <h5>Currently Reading</h5>
            <Book title={'CQRS by Example'} author={'Carlos buenosvinos, Christian Soronellas, Keyvan Akbary'}
                  amazonLink={'https://leanpub.com/cqrs-by-example'}>
                <p>To me Carlos Buenosvinos is a way more valid reference than codelitv - probably because people
                that follow codelytv courses become narrow minded zealots.</p>
                <p>I still go very often to the previous book DDD in PHP and I feel it will be the same with this one.</p>
            </Book>



            
            <h5>Domain Driven Design</h5>
            <Book title={'Domain-Driven Design: Tackling Complexity in the Heart of Software'} author={'Eric Evans'}
                  amazonLink={'https://www.amazon.com/gp/product/B00794TAUG/ref=kinw_myk_ro_title'}>
                <p>Known as the blue book. Now it is already a little bit old.</p>
                <p>I have to admit that I read it mainly to be able throw proper reasoning to some people seeing the disasters lurking
                    around a company I was working for.</p>
                <p>I was expecting some eye opening clear rules to follow, but what I got was a travel back in time when
                    I was at the university coursing "software engineering 1"
                    and "2". All the design patterns etc. Finally I understood the importance of those and why they were so insistent on that...</p>
                <p>I realized that I myself completely forgot about all of those teachings when I was working
                    with Drupal or following Symfony documentation.</p>
                <p>At the time of reading it, I had already experience developing in hexagonal architecture and
                    with a DDD approach, and this book didn't help me much with my battle at the company to be frank.</p>
            </Book>

            <Book title={'Implementing Domain-Driven Design'} author={'Vaughn Vernon'} amazonLink={'https://www.amazon.com/gp/product/B00BCLEBN8/ref=kinw_myk_ro_title'}>
                <p>Known as the red book, it's commonly said to be very boring, but I could read it all without being
                    bored. A big reason is that I could finally express with proper words and reasoning and not
                    just hunches what the company I was working for was doing wrong. Very wrong. (shared domain
                    between services with no clear source of truth, nor clear understanding of the behaviours, infrastructure
                    layers coupled all around everywhere and other... to find out more, read my book soon to be announced)</p>
                <p>This was more what I expected about DDD. The philosophy and intentions of the actual movement are really well explained.</p>
                <p>I realized that many people say DDD when they actually mean hexagonal architecture.</p>
                <p>You can't do DDD if you don't know the domain, and it takes time to know the domain, and a lot of
                    communication with the business, with the people in the company.</p>
                <p>Many companies, and technical people, think that applying some good practices and good code
                    will be enough to get rid of technical debt, but that's just half of the story, or the
                    outer part. The heart of the story is that is all about the domain.</p>
                <p>Aggregates, Value Objects, Repositories... all the pieces fell into place.</p>
                <p>I wish I could implement some company level techniques like event storming sessions. Or that
                    they realize of the importance of understanding the domain...</p>
            </Book>

            <Book title={'Domain-Driven Design Distilled'} author={'Vaughn Vernon'} amazonLink={'https://www.amazon.com/gp/product/B01JJSGE5S/ref=kinw_myk_ro_title'}>
                <p>Nothing much to say about this book.</p>
                <p>It's basically the same book as the Implementing DDD for people that are in a rush.</p>
            </Book>

            <Book title={'Domain-Driven Design in PHP'} author={'Carlos Buenosvinos, Christian Soronellas, Keyvan Akbary'} amazonLink={'https://www.amazon.com/Domain-Driven-Design-PHP-Carlos-Buenosvinos/dp/1787284948/ref=sr_1_1?keywords=DDD+in+PHP&qid=1637861296&s=digital-text&sr=1-1'}>
                <p>This was then super interesting to read.</p>
                <p>It's based mainly also on the implementing DDD book, but with a way more practical approach.</p>
                <p>This is really book to keep returning often</p>
                <p>I just wished that the example about CQRS + event sourcing would be a little bit extended, but well there are more books
                    about that and also open repos to check.</p>
            </Book>

            <Book title={'Practical Microservices: Build Event-Driven Architectures with Event Sourcing and CQRS'}
                  author={'Ethan Garofolo'} amazonLink={'https://www.amazon.com/gp/product/B0899K5R4P/ref=kinw_myk_ro_title'}>
                <p>Well that was more interesting than I thought it would be. I would recommend it to give it a try.</p>
                <p>Now it's a very opinionated way about what a microservice is with working examples in typescript.</p>
                <p>What would be an issue while doing this with different languages, it's no problem to use polling
                    in typescript and add what the book explains as "components" and "aggregators" in a running system.
                    If it wasn't for that, you'd have to deal with infra.</p>
                <p>It also uses evenTide messageDB which is kind of a layer on top of an postgreSQL where you query
                    this instead of the DB. All to not have to deal with infra that much.</p>
                <p>There's no DDD not hexagonal architecture, but that it's not the point of this book. I am just
                    happy I can now name some concepts (aggregators for once, they are dismissed as "projection creators" in
                    all the  github codes I check, and well they can even have a different infra if one wanted...). Or it
                    is interesting to save the commands in the message store -which maybe that was ok- it doesn't work
                    that much this way in other code I see, but I always thought that the whole reason for the existence
                    of a command is if what what was going to process them -in this book called components- lives in a different
                    machine... well in this book they live in different thread subscribed to that</p>
                <p>So yeah, it helped me to put some dots on the some i, and honestly I would not have expected that I'd come back so
                    often to this book to check some stuff.</p>
            </Book>
            <Book title={'Versioning in an Event Sourced System'} author={'Gregory Young'} amazonLink={'https://leanpub.com/esversioning'}>
                <p>I think he's the inventor of CQRS.</p>
                <p>This book is also pure gold, even though it's unfinished. It also doesn't take DDD as a religion for fanatics.</p>
                <p>Hard part for me though was to follow it, some vocabulary, at not being experienced with ES systems, made
                me wonder a lot; is the projection the view data or the reconstruction of the aggregate? It quite often
                could mean both, which confused me quite a big deal!</p>
            </Book>

            <h5>Big Picture (DevOps culture)</h5>
            <Book title={'Building microservices'} author={'Sam Newman'} amazonLink={'https://www.amazon.com/gp/product/B09B5L4NVT'}>
                <p>The second edition.</p>
                <p>I really really like this book. The easygoing approach discussing all options (as opposed
                    to some DDD books, or well, some people interpreting the DDD books as an absolute universal law)
                    and taking all *valid* options to building systems is very welcome.</p>
                <p>It's definitely a book to revisit often. I liked several of the patterns and general nuances
                    explained here. While for some I already have them quite embedded in my line of thoughts, for
                    example the event sourced kind of communication between services there are really great pieces of advice.</p>
                <p>I liked the frontend for backend approach. I liked how it reasons that having a duplicate of the whole
                    infra just for testing is probably not worth it and that for functional tests SLA should be enough, plus
                    the actual testing in production.</p>
                <p>And the most important quote of teh book probably is that one of the scientific method!</p>
            </Book>
            <Book title={'The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Wina'}
                  author={'Gene Kim'} amazonLink={'https://www.amazon.com/gp/product/B078Y98RG8/ref=kinw_myk_ro_title'}>
                <p>OMG! I couldn't stop reading this book. It was like, this is some message from above, and even
                    though I didn't work on a company alike where the book takes place.</p>
                <p>It was so easy to translate what was happening on the book to my company though.</p>
                <p>The problem is that it's me who read this book, not any "C"XX nor "director" in my company.</p>
            </Book>
            <Book  title={'The Unicorn Project: A Novel about Developers, Digital Disruption, and Thriving in the Age of Data'}
                   author={'Gene Kim'} amazonLink={'https://www.amazon.com/gp/product/B07QT9QR41/ref=kinw_myk_ro_title'}>
                <p>I wanted more of the above so I also read this one.</p>
                <p>This one pissed me off a little bit. The amount of "awesome" and alike adjectives made me roll my eyes too often.
                    Probably it was a rolling eye per page.</p>
                <p>To me there was a big contradiction: on one hand, at the end of the book you have a bunch
                    of awesome developers that develop company-level features in a week. And on the other hand
                    you have those same developers at the beginning of the book being completely useless and never wondering
                    about the big picture of the company. It's like the super smartest people were at the same time the dumbest, or dullest.</p>
                <p>None the less, it's a good book and recommendable.</p>
            </Book>
            <Book
                title={'The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations'}
                author={'Gene Kim, Jez Humble, Patrick Debois, John Willis'}
                amazonLink={'https://www.amazon.com/gp/product/B01M9ASFQ3/ref=kinw_myk_ro_title'}>
                <p>After reading the project Phoenix and project Unicorn, I had to finally know more about those
                    cryptic "ways" of devops.</p>
                <p>It's astonishing how some devops in my organization practically are working against all the principles
                    that this book is explaining.</p>
                <p>This book is simple and clear. Following the teachings is quite simple, the only problem that many
                    are kind of counterintuitive. And the other problem is that again it's me who's reading this book, and not
                    any CXX nor directory in my organization. And I can't be the one complaining all the time.</p>
                <p>The reason upgrading my web page is so easy is because I follow the advice on this book.</p>
            </Book>

            <Book title={'Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation (Addison-Wesley Signature Series (Fowler))'} author={'Jez Humble David Farley'}
                  amazonLink={'https://www.amazon.com/gp/product/B003YMNVC0'}>
                <p>I shouldn't have waited that long to read this book. Just the first chapter already helped
                    me realize many things I was doing wrong! I would have written way less <a  target="_blank" rel="noreferrer" href="https://blog.cesc.cool/self-hosted-infrastructure-on-aws-with-terraform-part4">
                        on this blog post</a> if it wasn't for this book.</p>
                <p>This book is one of the BIG ones. Like building microservices, or the devops handbook. The intention the authors
                want to convey is priceless.</p>
                <p>Of course it's not perfect, especially because it's from 2010 and I'd say they would explain things
                in a very different way now with Docker around and being a standard in the industry. Still, it doens't really
                matter much, since it's one of those books that try not to cling into any technology, and gives you help doesn't matter
                your technology stack.</p>
                <p>Summing up this book, I'd would say the subtitle is "how to be a good QA", but a good one. I've worked with
                many QA that most just go against lean principles. The same way I've met many DevOps that go against lean principles.
                Oxymoron people.</p>
            </Book>

            <Book title={'Terraform Up and Running'} author={'Yevgeniy Brikman'} amazonLink={'https://www.oreilly.com/library/view/terraform-up/9781492046899/'}>
                <p>I loved this book. It's not only about terraform, but a lot on how to use properly terraform,
                and as a side effect how to properly manage with any IaC. How to make properly modules independent
                and then reuse them per environments, test them. How to think properly about your infrastructure.. that's what book makes you</p>
                <p>I come back often for chapter 6 where it shows a comprehensive checklist to deploy
                any resource to production. Master piece.</p>
            </Book>

            <Book title={'PHP microservices'} author={'Carlos Perez Sanchez, Pablo Solar Vilarino'} amazonLink={'https://www.packtpub.com/product/php-microservices/9781787125377'}>
                <p>Luckily I didn't buy this book. My company did and I just read it.</p>
                <p>This book is better than no book. But this has been written on 2017 so I would strongly recommend
                    to read Building Microservices from Sam Newman instead.</p>
                <p>Good parts: working implementation with Consul and Autopilot. Very complete on all aspects, with
                    instructions on how to use testing tools etc.</p>
                <p>Bad parts: for one side all of this is kind of obsolete, this has been replaced by the cloud, which
                    it's just spoken about it very superficially.</p>
                <p>Domain driven design is just explained superficially, without much knowledge, no hexagonal architecture
                    on the code examples, which, by the way, they are a good example of spaghetti code, almost no SOLID principle
                    is respected on those. To top it, there's a couple of time the sentence "remember you can share database
                    in microservices" is repeated. I just hope they forgot to specify that they were speaking about the
                    database infrastructure, and inside, having separate virtual databases. But it's not specified, and that's
                    a very harmful advice, you will develop a distributed monolith this way!!!</p>
                <p>Get this book only if you know already what you are doing, which in that case, you won't be interested
                    on obsolete implementations of stuff....</p>
            </Book>

            <Book title={'Essential Scrum: A Practical Guide to the Most Popular Agile Process (Addison-Wesley Signature Series (Cohn))'}
                  author={'Rubin Kenneth S'} amazonLink={'https://www.amazon.com/gp/product/B008NAKA5O/ref=kinw_myk_ro_title'}
            >
                <p>Well I put this book on devops, but also because the philosophy that is devops goes hand in hand with
                    scrum.</p>
                <p>This is a very well explained guide. But I would say there's nothing new if you have been working
                    on some agile for a while, you would have probably guessed already what your company was doing right or
                    wrong.</p>
                <p>The most interesting part for me was how the IT department of a big company could be organized since
                    I never worked in a big IT company. And the only big "IT" company I worked in was obvious that they
                    got all of this wrong.</p>
            </Book>

            <h5>Misc</h5>
            <Book title={'The Robert C. Martin Clean Code Collection (Collection) (Robert C. Martin Series) '} author={'Uncle Bob'}
                  amazonLink={'https://www.amazon.com/gp/product/B00666M59G'}>
                <p>Should I explain this book?</p>
                <p>I haven't yet read "the clean coder" though.</p>
            </Book>

            <Book title={'Zero To Production In Rust'} author={'Luca Palmieri'} amazonLink={'https://app.gumroad.com/d/40684410d99d242f75b4a96b2bc87835'}>
                <p>This book helped me greatly by getting started with Rust way faster than anything else could have.
                Maybe by having the author himself next to me.</p>
                <p><a href={'https://github.com/FrancescJR/rust-actix-basic-miro'}>My Rust project skeleton</a> is highly
                based on that. That's why I use actix...</p>
                <p>Bad parts are the missing domain driven design and hexagonal architecture patterns that I had to
                figure out by myself. Take a look at <a href={"https://github.com/eniltrexAdmin/crappy-user"}>this</a> if you are interested.</p>
                <p>But in general the code and the implementations there are quite solid, so no much complaining about this book.</p>
            </Book>

            <Book title={'Designing Event Driven Systems'} author={'Ben Stopford'} amazonLink={'https://www.oreilly.com/library/view/designing-event-driven-systems/9781492038252/'}>
                <p>There are two main concepts on this book. The first one is the mind shift changed to an event
                    driven architecture, something that I think I already consolidated</p>
                <p>The second one is applying lots of patterns using Kafka features, but it's very hard to follow. There
                    are some practical examples about CQRS but always using Kafka as the infra. It also explain how Kafka deal with
                    several problems like atomicity in transactions using transactions, idempotency and horizontal scalability using
                    data partition. All of this is in Kafka. All of this is also very confusing if you have never played with Kafka.</p>
            </Book>




            <h5>Waiting list</h5>
            <p>I have already purchased some books and some others are about to be. This is the list on the
                order I am planning to read them:</p>
            <ol>
                <li>
                    <Book title={'Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations'}
                          author={'Nicole Forsgreen, Jez Humble, Gene Kim'}
                          amazonLink={'https://www.amazon.com/gp/product/B07B9F83WM'}
                    />
                </li>
                <li>
                    <Book title={'CQRS by example'}
                          author={'Carlos Buenosvinos, Christian Soronellas, Keyvan Akbary'}
                          amazonLink={'https://leanpub.com/cqrs-by-example'}
                    />
                </li>
                <li>
                    <Book title={'Build APIs You Won\'t Hate'}
                          author={'Phil Sturgeon, Ashley Hockney'}
                          amazonLink={'https://www.amazon.com/gp/product/B07HNFVRNH'}
                    />
                </li>
                <li>
                    <Book title={'The Kubernetes Book: 2022 Edition'}
                          author={'Nigel Poulton'}
                          amazonLink={'https://www.amazon.com/gp/product/B072TS9ZQZ/ref=kinw_myk_ro_title'}
                    ><p>never worked with kubernetes, but I'm about to in my own project.</p>
                    </Book>
                </li>
                <li>
                    <Book title={'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design'}
                          author={'Uncle Bob'}
                          amazonLink={'https://www.amazon.com/gp/product/B075LRM681'}
                    />
                </li>
                <li>
                    <Book title={'Site Reliability Engineering: How Google Runs Production Systems'}
                          author={'Niall Richard Murphy, Betsy Beyer, Chris Jones, Jennifer Petoff'}
                          amazonLink={'https://www.amazon.com/gp/product/B01DCPXKZ6/ref=kinw_myk_ro_title'}
                    />
                </li>
                <li>
                    <Book title={'The Site Reliability Workbook: Practical Ways to Implement SRE'}
                          author={'A bunch of them.'}
                          amazonLink={'https://www.amazon.com/gp/product/B07FWFPMYG/ref=kinw_myk_ro_title'}
                    />
                </li>
                <li>
                    <Book title={'NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence'}
                          author={'Pramod J. Sadalage, Martin Fowler'}
                          amazonLink={'https://www.amazon.com/gp/product/B0090J3SYW/ref=kinw_myk_ro_title'}
                    />
                </li>
                <li>
                    <Book title={'Learning Domain-Driven Design'}
                          author={'Vlad Khononov'}
                          amazonLink={'https://www.amazon.com/gp/product/B09J2CMJZY/ref=kinw_myk_ro_title'}
                    ><p>I've read some chapters in it, it's veeery similar as the implementing DDD from Vaughn Vernon, with
                        different examples and I forgot in which language the examples where.</p>
                    </Book>
                </li>
                <li>
                    <Book title={'Patterns, Principles, and Practices of Domain-Driven Design'}
                          author={'Scott Millett'}
                          amazonLink={'https://www.amazon.com/gp/product/B00XLYUA0W/ref=kinw_myk_ro_title'}
                    ><p>It also looks very similar to the above book actually...</p>
                    </Book>
                </li>
                <li>
                    <Book title={'Software Engineering at Google: Lessons Learned from Programming Over Time'}
                          author={'Titus Winters'}
                          amazonLink={'https://www.amazon.com/gp/product/B0859PF5HB/ref=kinw_myk_ro_title'}
                    > <p>I hate the elitism of Google, and they use monorepo which is nonsensical, but well,
                        it's one of the greatest tech companies in the world or maybe just the greatest.. so let's see..
                        I still need to read the SRE book too...</p>
                    </Book>
                </li>
                <li>
                    <Book title={'Effective Kafka: A Hands-On Guide to Building Robust and Scalable Event-Driven Applications with Code Examples in Java'}
                          author={'Emil Koutanov'}
                          amazonLink={'https://www.amazon.com/gp/product/B0861WN4YS/ref=kinw_myk_ro_title'}
                    />
                </li>
                <li>
                    <Book title={'RESTful API Design: Best Practices in API Design with REST (API-University Series Book 3)\n'}
                          author={'Matthias Biehl'}
                          amazonLink={'https://www.amazon.com/gp/product/B01L6STMVW/ref=kinw_myk_ro_title'}
                    ><p>
                        I have my doubts about this one. I am not sure if I will get something extra a part of what you can
                        find out on the internet. But well, book always give you a very deep point of view that you don't
                        need to consult -that often- the proper way because you eventually know it deep inside.
                    </p></Book>
                </li>
            </ol>
        </div>
    );
}
