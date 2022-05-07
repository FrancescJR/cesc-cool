import {NoteScaffolding} from "./BookNotesDB1DDD_IN_PHP";

export const BOOK_IMPLEMENTING_DDD:  NoteScaffolding[] =
    [
        {
             "context": "Page 143",
             "quote": "That said, some will conclude that an asynchronous approach providing temporal decoupling leads to more resilient systems. That viewpoint will often lead to a bias toward implementing the messaging style of Command Handlers.",
             "personal_note": "Without queue infra do we get the realnadvantage ofall the command bus hustle?",
        },
        {
             "context": "Page 148",
             "quote": "EDA style decouples all but the systems’ dependency on the messaging mechanism itself and the Event types they subscribe to.",
             "personal_note": "Soo yup still coupling, thats why terraform has like domainish notions when defining subscribers",
        },
        {
             "context": "Page 178",
             "quote": "client can ask for identity details, such as the date the product was created, and it’s conveniently provided.",
             "personal_note": "Interesting use of id value object",
        },
        {
             "context": "Page 197",
             "quote": "The multiple setters make the intention ambiguous. They also complicate publishing a single, meaningful Domain Event as an outcome to what should actually be a single logical command.",
             "personal_note": "Other downside of anemic and settrrs everywhere",
        },
        {
             "context": "Page 207",
             "quote": "In the preceding example, did you notice that the User constructor has protected visibility? The Tenant Entity serves as a Factory for User instances, and only classes in the same Module can see the User constructor. That way no object other than a Tenant may create User instances:",
             "personal_note": "I dont think that is possible in PHP, is it? If method is private protected something ABOVE cant see it, only below, extended entities, right?",
        },
        {
             "context": "Page 244",
             "quote": "Since all setter methods in a Value Object are always private scope, there is no opportunity for attributes to be exposed to mutation by consumers.",
             "personal_note": "Nosatres normalment no pose ni el setter tot i que ell insisteix en frr passar tot per alla pero posanlo private",
        },
        {
             "context": "Page 244",
             "quote": "This second constructor, the copy constructor, is important for unit tests. When we test a Value Object, we want to include verification that it is immutable.",
             "personal_note": "Too much work...",
        },
        {
             "context": "Page 246",
             "quote": "Yet, if all else fails, you may need to grudgingly design your domain objects with getters.",
             "personal_note": "Of aftrr all kust coders read, starting the function with grt, and having software ahtcompletr and show you options alphabetcally mightcome more in handy",
        },
        {
             "context": "Page 248",
             "quote": "This constructor enables Hibernate and other tools to create instances of the type as they are being reconstituted from, for example, the persistence store.",
             "personal_note": "Really, PHP is better for that actually, language closer to spoken language, no overhead of hibernate weird things... A value object is a value object, no need to program the copy constructor, maybe a private setter since hes insistent on that, no need for weird empty constructor, and if its from db, can be created easily",
        },
        {
             "context": "Page 279",
             "quote": "A Service in the domain is welcome to use Repositories as needed, but accessing Repositories from an Aggregate instance is not a recommended practice.",
             "personal_note": "Noted , but then will need repo impl when actually used",
        },
        {
             "context": "Page 281",
             "quote": "Sometimes it may be desirable to create a “mini-layer” of Domain Services above the rest of your domain model Entities and Value Objects. As I previously indicated, this will often lead down the precarious path of Anemic Domain Model, which should be considered an anti-pattern. Yet, there are some systems where designing in the mini-layer of Domain Services makes more sense than in others and will not lead to Anemic Domain Model. It depends on the characteristics of the domain model, and in the case of the Identity and Access Context this is actually quite helpful. If you were to experience working in such a domain and you did decide to produce a mini-layer of Domain Services, remember that such are always different from Application Services in the Application Layer. Address transactions and security as application concerns in Application Services, not in Domain Services.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 290",
             "quote": "Consider including whatever would be necessary to trigger the Event again.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 345",
             "quote": "We’ve just considered domain model modularization, why it is important,",
             "personal_note": "Useless chapter. Domain is organized explicitly and commonly with an intuitive approach to domain concepts. Thinking too much or making weird separations like a single VO on a parent module/directory its a waste of time and probably will work against you",
        },
        {
             "context": "Page 354",
             "quote": "Thus, Aggregate is synonymous with transactional consistency boundary.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 377",
             "quote": "a Domain Service to coordinate the consistency processing. The Service would • Use the BacklogItemRepository to retrieve the identified BacklogItem.",
             "personal_note": "Repository on a domain service?",
        },
        {
             "context": "Page 382",
             "quote": "change ProductBacklogItem to be a Value type instead.",
             "personal_note": "How can ot be a value object now? 20pages of th book dedicated to how to model properly this aggregate and now it says it could br changed to a VO???",
        },
        {
             "context": "Page 383",
             "quote": "the client should “Tell”",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 388",
             "quote": "You now know why you should favor referencing other Aggregates by identity.",
             "personal_note": "Remember that!",
        },
        {
             "context": "Page 394",
             "quote": "you’d like to be doubly cautious, you could add guards here as well.",
             "personal_note": "Noooo, bad advice dont do the same thin in different parts!",
        },
        {
             "context": "Page 398",
             "quote": "Service and transform user and role objects from that model into corresponding collaborator objects of their own model’s Context.",
             "personal_note": "Xceed promoter from users paralelism, remember this possibility ",
        },
        {
             "context": "Page 413",
             "quote": "underlying persistence framework, we want to insulate clients from all such details, including exceptions.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 414",
             "quote": "am a strong opponent of Aggregate-managed persistence, and I strongly advocate Repository-only persistence.",
             "personal_note": "What the hell are the differences between those two types??",
        },
        {
             "context": "Page 432",
             "quote": "If you find that you must create many finder methods supporting use case optimal queries on multiple Repositories, it’s probably a code smell. First of all, this situation could be an indication that you’ve misjudged Aggregate boundaries and overlooked the opportunity to design one or more Aggregates of different types. The code smell here might be called Repository masks Aggregate mis-design. However, what if you encounter this situation and your analysis indicates that your Aggregate boundaries are well designed? This could point to the need to consider using CQRS (4).",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 433",
             "quote": "if (transaction != null) {                 transaction.rollback();             }",
             "personal_note": "This is application layer, if somebody tell you that this is wrng, hey, heres a exampe!",
        },
        {
             "context": "Page 435",
             "quote": "means of this annotation, when the business method is invoked, Spring automatically starts a transaction, and when the method completes, the transaction is either committed or rolled back as appropriate.",
             "personal_note": "Ah amigo, now i get why there wasthis annotation everywhere, if use cases where suficiently well defined, with dkctine we could mimic this brhaviour manually",
        },
        {
             "context": "Page 440",
             "quote": "situation could also be sidestepped with the use of role-based interfaces.",
             "personal_note": "Nope",
        },
        {
             "context": "Page 440",
             "quote": "Even if inheritance is used, Aggregate polymorphic behavior can most often be carefully designed such that no special cases are surfaced to clients.",
             "personal_note": "Lets try that, remember ehat it sayd about repositories. Zinio coupon problem mihht be solved by maing frontend call action to specific type of coupon, in the meantime application use cases will handle the logic",
        },
        {
             "context": "Page 441",
             "quote": "Since you can use DAO and related patterns to perform fine-grained CRUD operations on data that would otherwise be considered parts of an Aggregate, this would be a pattern to avoid with a domain model. Under normal conditions you want the Aggregate itself to manage its business logic and other internals and keep everyone else out.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 447",
             "quote": "you could use this approach when testing Application Services that must explicitly save() changes to an Aggregate.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 448",
             "quote": "You saw how to test Repositories and different ways to test using Repositories.",
             "personal_note": "Useless part. Either you need a db connection or you are testing code that is different tan the one that will be executed in production",
        },
        {
             "context": "Page 451",
             "quote": "because those inexperienced with distribution commonly imagine that any one remote call is as good as an in-process call.",
             "personal_note": "Zinio...",
        },
        {
             "context": "Page 452",
             "quote": "There is also the danger of using the foreign objects freely in the consuming system as if they were our very own, which would tend to violate the very DDD strategic design principles we have been fighting so hard to follow. Some may think that by declaring this as a Shared Kernel (3), it indemnifies the approach. However, be aware that the convenience of objects that are shared between systems can lead you down a slippery slope. Yet, regardless of the complexity and potential danger of polluted models, many believe that any strong typing afforded by this tactic is a suitable trade-off for the required complexity.",
             "personal_note": "Well... Emoji of man shrugging",
        },
        {
             "context": "Page 457",
             "quote": "This approach has the added advantage that Events can hold more than just primitive attributes and strings. Events may also safely hold instances of more sophisticated Value Objects (6), which is especially effective when their Value types tend to be stable. This is certainly the case with BacklogItemId, SprintId, and TenantId, as demonstrated by the following code, this time using dot-separated property navigation:",
             "personal_note": "Then the reader hould be used in application yer not in infra ",
        },
        {
             "context": "Page 457",
             "quote": "backlogItemId.id\")); String sprintId = reader.eventStringValue(\"sprintId.id\"));",
             "personal_note": "What? He was saying we can get the value object, not just a plain string",
        },
        {
             "context": "Page 458",
             "quote": "If the remote system is unavailable, the timer threshold can be backed off, or if using messaging the message can be negatively acknowledged to the broker and redelivered.",
             "personal_note": "But its the client who does that not the open host service!",
        },
        {
             "context": "Page 460",
             "quote": "Publishing a Shared Kernel or accepting a Conformist relationship puts consumers into a tightly coupled integration with the consumed domain model.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 460",
             "quote": "That means that you provide only what integrators need at present, and you understand those needs only by considering a range of use case scenarios.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 478",
             "quote": "Both the disable() and the enable() methods are designed to query a changeTracker to determine whether the requested operation can be carried out according to the asOfDate parameter (the command’s occurredOn value).",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 479",
             "quote": "The MemberChangeTracker also serves to make Member subclass command operations idempotent,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 479",
             "quote": "might argue that introducing the MemberChangeTracker in the Aggregate design is a mistake. We might conclude that this has nothing to do with the Ubiquitous Language of Scrum-based teams. That is true. However, we never expose the MemberChangeTracker outside the Aggregate boundary.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 506",
             "quote": "For example, we could make Product subclass AbstractProcess, although it doesn’t need that level of sophistication.",
             "personal_note": "Ugh... Hate this role interfaces",
        },
        {
             "context": "Page 507",
             "quote": "Remember, if your system has an Event Store, your Events will continue to be queued in your live system and can be sent as soon as messaging is available again.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 507",
             "quote": "When the messaging mechanism becomes available again, will your client listeners be automatically reactivated, or will it be necessary to subscribe to your consumer-side client mechanism again?",
             "personal_note": "If the just receive a POST from the actual consumer, mo need to worry",
        },
        {
             "context": "Page 516",
             "quote": "However, it may be more accurate to think of a set of RESTful resources as a separate model in their own right—a View Model or Presentation Model [Fowler, PM]. Resist the temptation to produce representations that are a one-to-one reflection of your domain model Aggregate states, possibly with links to navigate to deeper state.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 517",
             "quote": "You design a Value Object, not a DTO, because the query is domain specific, not application specific (as are DTOs).",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 523",
             "quote": "an alternative to these approaches, however, a better approach may be to design Command [Gamma et al.] objects instead. There is not necessarily a right or wrong way. It mostly depends on your tastes and goals.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 526",
             "quote": "This, of course, would require integration between IdOvation and Spring Security.",
             "personal_note": "Tgats it? No more info on that?",
        },
        {
             "context": "Page 528",
             "quote": "having public setters allows the Command to be populated by UI form-field-to-object mappers",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 535",
             "quote": "can do so because it is itself injected with the Spring Application-Context when the bean is newly created.",
             "personal_note": "Ughhh",
        },
        {
             "context": "Page 550",
             "quote": "Anyway, decoupling the client from the Service can enhance load balancing, enable competing consumers, and support system partitioning.",
             "personal_note": "And if it all runs in the same machine then its just useless overhead, you cant grt any of the advantages",
        },
        {
             "context": "Page 551",
             "quote": "Another advantage is the ability to chain additional aspects before Command dispatching as needed. For example, we could easily patch in auditing, logging, authorization, and validation.",
             "personal_note": "Tht is indeed applicable even in the same machine",
        },
        {
             "context": "Page 579",
             "quote": "Wherever possible we should strive to employ Value Objects, whether for Command objects, Events, or Aggregate parts.",
             "personal_note": "For commad mmmh not bad domain exceptions when trying to create new VOwould be the ones being fired and we dont break layers since application can see domain",
        },
    ]
