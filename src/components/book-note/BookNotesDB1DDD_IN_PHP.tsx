export interface NoteScaffolding {
    context: string,
    quote: string,
    personal_note: string
}

export const BOOK_DDD_IN_PHP:  NoteScaffolding[] =
    [
        {
            "context": "Getting started with DDD,chapter 1. About SelfContained Systems. (SCS)",
            "quote":'Communication with other SCSs or 3rd party systems is asynchronous wherever possible.\n' +
                '                        Specifically, others SCSs or external systems should not be accessed synchronously within the\n' +
                '                        SCS\'s own request/response cycle. This decouples the systems, reduces the effects of failure\n' +
                '                        and this supports autonomy. The goal is decoupling concerning time: An SCS should work\n' +
                '                        even if other SCSs are temporarily offline. This can be achieved even if the communication on \n' +
                '                        the technical level is synchronous, e.g. by replicating data or buffering requests.',
            "personal_note":'Highlight, so I completely agree. Guess pointing out the high coupling on systems at\n' +
                '                        some companies I work with not following the principles.'

        },
        {
            "context": "Architectural Styles, Chapter 2. Quite shocking introduction to Event Sourcing Architecture.",
            "quote": "protected function applyPostWasCreated(PostWasCreated $event):void {" +
                "$this->id = $event->postId();" +
                "$this->title = $event->title();" +
                "$this->content = $event->content()" +
                "}" +
                "protected function applyPostWasPublished(PostWasPublished $event): void" +
                "{" +
                "$this->published = true;" +
                "}" +
                "Take note, all actions that trigger a state change are implemented via DomainEvent",

            "personal_note": "First time I saw ES, and it's on the second chapter of this book and never again" +
                "you see it. Anyway now with some 'professional' experience, I know a litle bit better."
        },
        {
            "context" : "Architectural Styles, Chapter 2. Quite shocking introduction to Event Sourcing Architecture.",
            "quote" : "class AggregateRoot {" +
                "[..]" +
                "protected function applyThat(DomainEvent $event): void" +
                "{" +
                "$className = (new \\ReflectionClass($event))->getShortName();" +
                "$modifier = 'apply'.$className;" +
                "$this->$modifer($event)" +
                "}",
            "personal_note": "Not a fan of Reflection Class, I'd rather use a switch or something more explicit, but none" +
                "the less I pretty cool example."
        },
        {
            "context": "About identity on entities. Surrogate Identity",
            "quote": "class Order extends IdentifiableDomainObject{" +
                "private OrderId $orderId;" +
                "public function orderId(): OrderId" +
                "{" +
                "if (null === $this->orderId() {" +
                " $this->orderId = new OrderId($this->id());" +
                "}" +
                "return $this->orderId;" +
                "}",
            "personal_note": "Talk about side effect free function... A get that actually sets... Just avoid this" +
                "surrogate shit..."
        },
        {
            "context": "About identity. Active record vs Data Mapper:",
            "quote": "An Active Record Implementation is fine mostly for CRUD applications, but it's not the ideal" +
                "solution for Rich Domain Models for the following reasons:" +
                " - The Active Record pattern assumes a one-to-one relation between an Entity and a database table." +
                "So it couples the design of the database to the design of the object system. And in a Rich Domain Model" +
                ", sometimes Entities are constructed with information that may come from different data sources." +
                " - Advanced things like collection and inheritance are tricky to implement." +
                " - Most of the implementations force the use, through inheritance, of some sort of constructions" +
                "that impose several conventions. This can lead to persistence leakage into the Domain Model by " +
                "coupling the Domain Model with the ORM." +
                "Data Mapper decouples persistence concerns from Domain concerns, leading to persistence-free Entities." +
                "This makes the tool the best for someone wanting to build a Rich Domain Model.",
            "personal_note": "just that yes. Eloquent sucks."
        },
        {
            "context": "About Identity. Client Provides identity",
            "quote": "If the client can't provide the identity, generally the preferred way to handle the identity" +
                "operation is to let the application generate the Identities usually through a UUID. Ramsey.",
            "personal_note": "I did write a salty note pointing out that they say its better to use self so if" +
                "the class name changes you don't need to. And in some piece of code they didn't use it, they" +
                "use return static... I thought it would explain more reason why Client giving identity is the desired" +
                "escenario, but they don't actually explain the why."
        },
        {
            "context": "About identity.",
            "quote": "Exercise: think about other Domains where Identities are built in and model one.",
            "personal_note": "Yeah, promote to ignore domain experts... devs know better. [salty note]"
        },
        {
            "context" : "About mapping Entities to DB",
            "quote": "showing an example with annotations: Domain concerns are mixed with Infrastructure concerns." +
                "As a result the Entity is tightly coupled to the mapping information specified by the annotation" +
                "in the source code. If the Entity were required to be persisted using another Entity manager" +
                "and with different mapping metadata, this wouldn't be possible." +
                "Annotations tend to lead to side effects and tight coupling. So it would be better not to use them",
            "personal_note": "I don't agree with the statement saying if the entity were required to be persisted using" +
                "another Entity Manager... then you would use another mapping somewhere and it would work as find." +
                "Annotations are annotations, like comments in the code, so they would be ignored if using another" +
                "ORM or whatever... also the advantages to have it in the same file are that you are less likely" +
                "to forget some mapping and it's easier to understand." +
                "I understand that this might tend to eventually some coupling for some untrained devs... and well" +
                "with PHP 8 annotations start to not just be like comments in the code. But how useful it is to have" +
                "it in the same file, like, when having the annotation routes in the controller, you don't need to have" +
                "several files open."
        },
        {
            "context": "About mapping entites to DB",
            "quote": "An interesting feature in Doctrine 2.5 is that it's now possible to use Objects as" +
                "identifiers for Entities, so long as they implement the magic method __toString().",
            "personal_note": "Nice for VO as Identities... But you made a full case for avoiding annotations to not couple" +
                "persistence and now you are ADDING CODE TO THE DOMAIN JUST SO THE INFRA CAN WORK PROPERLY?? FOR AN" +
                "INFRA CONCERN?? OH!"
        },
        {
            "context": "About mapping entities to DB. Showing code of a field mapped:",
            "quote": "<field name='amount' type='decimal' nullable='false' scale='10' precision='5'>",
            "personal_note": "Those looks like some Domain Knowledge leaked to the Infra level..."
        },
        {
          "context":"Enitre Object Validation",
          "quote" : "Defensive programming isn't a bad thing. In general, it makes sense when developing components" +
              "or libraries that are going to be used as a third party in other projects. However, when developing" +
              "your own Bounded Context, those extra paranoid checks (nulls, basic types, type hinting, etc) can be" +
              "avoided to increase development speed by relying on the coverage of your test suite.",
            "personal_note":"none, agreed."
        },
        {
            "context":"Enitre Object Validation",
            "quote" : "There are times when an object composed of valid properties, as a whole, can still be deemed" +
                "invalid. Ir can be tempting to add this kind of validation to the object itself, bit generally this " +
                "is an antipattern. Higher-level validation changes at a rythm different than that of the object" +
                "logic itself. Also, it's good to separate responsibilities. The validation informs the client about any" +
                "errors that have been found or collects the results to be reviewed later, as sometimes we don't" +
                "want to stop the execution at the first sign of trouble.",
            "personal_note":"Interesting, but, it seems that the application is in charge to use the validator(or" +
                "forget to use it), leaving to the 'client' the responsibility. How to force that inside the domain" +
                "withot leaking to teh app layer? -- Well I know how -domain service e.g.-, but honestly, I think it's not worth the trouble."
        },
        {
            "context": "Testing Domain Events",
            "quote": "on an unit test." +
                "public function itShouldPublishUserRegisteredEvent()" +
                "$subscriber = new SpySubscriber();" +
                "DomainEventPublisher::instance()->subscribe($subscriber);" +
                "",
            "personal_note": "smart! (hard to understand the code, but we get the idea right?"
        },
        {
            "context": "Modules. Dir structure",
            "quote": "Infrastructure-> Persistance -> Doctrine-> BaseDoctrineRepository.php, " +
                "EntityManagerFactory.php, Mapping-> teh xml files.",
            "personal_note": "I like this."
        },
        {
            "context": "Modules. Dir structure",
            "quote": "The frameworks should obey you, and not the other way around.",
            "personal_note": "Agreed!"
        },
        {
            "context": "Aggregates",
            "quote": "Jumping from one Aggregate to anothers is what is called traversing or navigating the domain." +
                "With ORMS it's easy to do it by mapping all the relations between your Entities. However, " +
                "it's also really dangerous, as you can easily end up running countless queries in a specific" +
                "feature. As a rule, you shouldn't do this. Don't map all the relations between your entities because" +
                "you can. Instead, only map the relations between entities inside an Aggregate in your ORM if two" +
                "entities form an Aggregate. If this isn't the case, you'll use Repositories to get referenced" +
                "Aggregates.",
            "personal_note": "Totally agreed. And lesson I learned the hard way."
        },
        {
            "context": "Aggregates",
            "quote": "On application layer. This piece of code." +
                "protected function checkIfUserOwnsWish()... throws InvalidARgumentException",
            "personal_note": "Is about access.. but feels domain leaked to the application."
        },
        {
            "context": "Aggregates. Example code. This one is interesting for new reason I just found.",
            "quote": "class User{  " +
                "public function makeWish(things for Wirsh): Wish" +
                "}." +
                "Why are we returning a wish and not just adding the new wish to an internal collection as we " +
                "would do with Doctrine? To summarize, in this scenario, User and Wish don't conform to an" +
                " Aggregate because there's no true business invariant to protect. A user can add" +
                "and remove as many wished as they want. Wishes theis User can be updated independently in the DB" +
                "in different transaction." +
                "Following the rules about Aggregates, we should aim for small Aggregates and that's the result" +
                "here. Each entity has its own repository. Wish references its owning User" +
                "using identities. Getting al the wishes of a user can be performed by a finder in the WishRepository" +
                "and paginatd easily without any performance issues.",
            "personal_note": "I totally agree. But there's an unrelated detail here. The creator is Wish" +
                "is inside the User class. Wish has a factory which is inside User. I have been always worried" +
                "about the class having to deal solely with it's own stuff, so User should not know about Wishes." +
                "Even though I know that a rich domain is basically that... I shouldn't be that strict about" +
                "those separations especially if the code base lives in the same place, in the same micro. Here's" +
                "an example in a renowned book where they do that."
        },
        {
            "context": "Aggregates. Another thing interesting that I didn't realize before",
            "quote": "class UpdateWishService extends WishService",
            "personal_note": "That's in application layer, and to pass the common dependencies like" +
                "the repository, they extend from wish service. That's smart. There was real note of mine" +
                "that something was done here in teh application layer instead of on the domain, like above quote."
        },
        {
            "context": "Aggregates. Finally my pleas have been heard:",
            "quote": "As you may have seen, you could refactor some parts of teh code, such as the constructor" +
                "and the ownership checks to reuse them in both Application Services. Feel free to consider" +
                "how you would do that.",
            "personal_note": "In the domain! Domain service or actions in the entity."
        },
        {
            "context": "Repositories",
            "quote": "If you are using UUIDs as identifiers, you can place the creaion of the new identity" +
                "in the value object instead of the repository. This will allow you NOT to inject the repository" +
                "when it is not necessary",
            "personal_note": "Me no like.. but actually, I do."
        },
        {
            "context": "Repositories",
            "quote": "IF you check Doctrine examples out there, you may find that after running persist or remove" +
                "flush should be called. But as seen in our proposal, there's no call to flush. Flushing and" +
                "dealing with transactions is delegated to the Application Service. That's why you can work" +
                "with Doctrine considering that flushing all teh changes on teh Entities will happen at the end of the request." +
                "In terms of performance, one flush call is best.",
            "personal_note": "Yup."
        },
        {
            "context": "Repositories",
            "quote": "In some instances. You won't require the entire Aggregate for simple accessing small bits of" +
                " information. To solve this, you can add Repository methods to access there as shortcuts. You " +
                "should make sure to only access data that could be retrieved by navigating through the Aggregate" +
                "Root. As such, you shouldn't allow Access to the private and internal areas of the Aggregate Root.",
            "personal_note": "OK."
        },
        {
            "context": "Data transformers",
            "quote": "There are some cases where generating intermediate DTO for more complex responses like" +
                "JSON XML could be seen as an unnecessary overhead. We could output the representation in a buffer" +
                "and ask for it later on the delivery side." +
                "Transformers help reduce this overhead by transforming high-level Domain concepts into low " +
                "level client details.",
            "personal_note": "Now I understand some tests I've corrected..."
        },
        {
            "context": "Security",
            "quote": "In case you're wondering ow to manage and handle user credentials and security in general," +
                " unless it's the responsibility of your domain, we recommend letting the framework handle it. The" +
                "user session is a concept of the delivery mechanism. Polluting the Domain with such concepts" +
                "will make it harder to develop.",
            "personal_note": "OK"
        },
        {
            "context": "Strategic Design. Communication between services.",
            "quote": "[Well, it's an example if using superviser with php rabbitmq consumer.] PHP isn't the best" +
                "platform for executing long-running processes. It also might be a good idea to use something like" +
                "Supervisor to monitor and restart processes periodically.",
            "personal_note": "That's an option. Still better than Z, but X way is better. At least Z should use" +
                "the same container or scheduled tasks without using a whole new ECS cluster."
        }


    ]
