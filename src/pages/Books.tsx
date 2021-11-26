import React from 'react';
import Book from "../components/book/Book";
import MainContentTitle from "../components/maincontent/MainContentTitle";



export default function Books() {
    return (
        <div>
            <MainContentTitle title={'Books'} />
            <p> This is a list of technical books that I have read and some of them re-read, that helped me shape
                my beliefs and my points of views of what IT on every company -big, small, start-up etc- should be.</p>
            <p>You can consider that part of my education.</p>
            <h5>Domain Driven Design</h5>
            <Book title={'Domain-Driven Design: Tackling Complexity in the Heart of Software'} author={'Eric Evans'}
                  amazonLink={'https://www.amazon.com/gp/product/B00794TAUG/ref=kinw_myk_ro_title'}>
                <p>Known as the blue book. Now it is already a little bit old.</p>
                <p>I have to admin that I read it mainly to be able throw proper reasoning to the disasters that I
                was seeing the company I was working for did.</p>
                <p>But what I got was a travel back in time when I was at the university coursing "software engineering 1"
                and "2". All the design patterns etc.</p>
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
            <h5>DevOps</h5>
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

            <h5>Wish list</h5>
            <p>I have already purchased some books and some others are about to be. This is the list:</p>
            <Book title={'NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence'}
                  author={'Pramod J. Sadalage, Martin Fowler'}
                      amazonLink={'https://www.amazon.com/gp/product/B0090J3SYW/ref=kinw_myk_ro_title'}
                  />
            <Book title={'Site Reliability Engineering: How Google Runs Production Systems'}
                  author={'Niall Richard Murphy, Betsy Beyer, Chris Jones, Jennifer Petoff'}
                  amazonLink={'https://www.amazon.com/gp/product/B01DCPXKZ6/ref=kinw_myk_ro_title'}
            />
            <Book title={'The Site Reliability Workbook: Practical Ways to Implement SRE'}
                  author={'A bunch of them.'}
                  amazonLink={'https://www.amazon.com/gp/product/B07FWFPMYG/ref=kinw_myk_ro_title'}
            />
            <Book title={'RESTful API Design: Best Practices in API Design with REST (API-University Series Book 3)\n'}
                  author={'Matthias Biehl'}
                  amazonLink={'https://www.amazon.com/gp/product/B01L6STMVW/ref=kinw_myk_ro_title'}
            ><p>
                I have my doubts about this one. I am not sure if I will get something extra a part of what you can
                find out on the internet. But well, book always give you a very deep point of view that you don't
                need to consult -that often- the proper way because you eventually know it deep inside.
            </p></Book>
            <p>Finally I am missing a book of event sourcing and CQRS by Mr.Young that I found somewhere, and this
            one is the next one on my list for real, since right now we are implementing that.</p>

        </div>
    );
}