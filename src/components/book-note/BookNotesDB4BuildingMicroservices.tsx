import {NoteScaffolding} from "./BookNotesDB1DDD_IN_PHP";
export const BUILDING_MICROSERVICES:  NoteScaffolding[] =
    [
        {
             "context": "Page 6",
             "quote": "Tip If you take only one thing from this book and from the concept of microservices in general, it should be this: ensure that you embrace the concept of independent deployability of your microservices. Get into the habit of deploying and releasing changes to a single microservice into production without having to deploy anything else. From this, many good things will follow.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 7",
             "quote": "Modeled Around a Business Domain Techniques like domain-driven design can allow you to structure your code to better represent the real-world domain that the software operates in.3 With microservice architectures, we use this same idea to define our service boundaries.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 7",
             "quote": "Rolling out a feature that requires changes to more than one microservice is expensive. You need to coordinate the work across each service (and potentially across separate teams) and carefully manage the order in which the new versions of these services are deployed. That takes a lot more work than making the same change inside a single service (or inside a monolith, for that matter). It therefore follows that we want to find ways to make cross-service changes as infrequent as possible.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 17",
             "quote": "distributed monolith is a system that consists of multiple services, but for whatever reason, the entire system must be deployed together. A distributed monolith might well meet the definition of an SOA, but all too often, it fails to deliver on the promises of SOA. In my experience, a distributed monolith has all the disadvantages of a distributed system, and the disadvantages of a single-process monolith, without having enough of the upsides of either.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 34",
             "quote": "Microservice architectures can give you a huge degree of flexibility in choosing technology, handling robustness and scaling, organizing teams, and more. This flexibility is in part why many people are embracing microservice architectures. But microservices bring with them a significant degree of complexity, and you need to ensure that this complexity is warranted. For many, they have become a default system architecture, to be used in virtually all situations. However, I still think that they are an architectural choice whose use must be justified by the problems you are trying to solve; often, simpler approaches can deliver much more easily. Nonetheless, many organizations, especially larger ones, have shown how effective microservices can be. When the core concepts of microservices are properly understood and implemented, they can help create empowering, productive architectures that can help systems become more than the sum of their parts.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 41",
             "quote": "Domain Coupling Domain coupling describes a situation in which one microservice needs to interact with another microservice, because the first microservice needs to make use of the functionality that the other microservice provides.8 In Figure 2-2, we see part of how orders for CDs are managed",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 42",
             "quote": "As a general rule, domain coupling is considered to be a loose form of coupling, although even here we can hit problems.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 54",
             "quote": "these relationships between aggregates exist inside the scope of a single microservice, they could easily be stored using something like a foreign key relationship if using a relational database. If the relationships between these aggregates span microservice boundaries, though, we need some way to model the relationships. Now, we could simply store the ID of the aggregate directly in our local database.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 57",
             "quote": "Shared models We can also have concepts that appear in more than one bounded context. In Figure 2-14 we saw that a customer exists in both locations. What does this mean? Is the customer copied? The way to think about this is that conceptually, both finance and the warehouse need to know something about our customer. Finance needs to know about the financial payments made to a customer, whereas the warehouse needs to know about the customer to the extent that it knows what packages have been sent so as to allow for deliveries to be traced. When you have a situation like this, a shared model like customer can have different meanings in the different bounded contexts and therefore might be called different things. We might be happy to keep the name “customer” in finance, but in the warehouse we might call them a “recipient,” as that is the role they play in that context. We store information about the customer in both locations, but the information is different. Finance stores information about the customer’s financial payments (or refunds); the warehouse stores information related to the goods shipped. We still may need to link both local concepts to a global customer, and we may want to look up common, shared information about that customer like their name or email address—we could use a technique like that shown in Figure 2-13 to achieve this.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 58",
             "quote": "Mapping Aggregates and Bounded Contexts to Microservices Both the aggregate and the bounded context give us units of cohesion with well-defined interfaces with the wider system. The aggregate is a self-contained state machine that focuses on a single domain concept in our system, with the bounded context representing a collection of associated aggregates, again with an explicit interface to the wider world. Both can therefore work well as service boundaries. When starting out, as I’ve already mentioned, you want to reduce the number of services you work with. As a result, you should probably target services that encompass entire bounded contexts. As you find your feet and decide to break these services into smaller services, you need to remember that aggregates themselves don’t want to be split apart—one microservice can manage one or more aggregates, but we don’t want one aggregate to be managed by more than one microservice.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 61",
             "quote": "bounded contexts, which are so important to DDD, are explicitly about hiding information—presenting a clear boundary to the wider system while hiding internal complexity that is able to change without impacting other parts of the system. This means that when we follow a DDD approach, whether we realize it or not, we are also adopting information hiding—and as we’ve seen, this is vital in helping to find stable microservice boundaries. Secondly, the focus on defining a common, ubiquitous language helps greatly when it comes to defining microservice endpoints. It neatly gives us a shared vocabulary to draw on when coming up with APIs, event formats, and the like. It also helps solve the problem of how far the standardization of APIs needs to go in terms of allowing language to change within bounded contexts—change inside a boundary impacting that boundary itself.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 68",
             "quote": "hope you can see by now, I’m not a fan of horizontally layered architecture. Layering can have its place, though. Within a microservice boundary, it can be totally sensible to delineate between different layers to make the code easier to manage. The problem occurs when this layering becomes the mechanism by which your microservice and ownership boundaries are drawn.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 72",
             "quote": "get to the point of deciding that breaking apart your existing monolithic system is the right thing to do, I strongly advise you to chip away at the monolith, extracting a bit at a time.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 84",
             "quote": "Databases can be useful in ensuring integrity of our data. Coming back to Figure 3-6, with both the Album and Ledger tables being in the same database, we could (and likely would) define a foreign key relationship between the rows in the Ledger table and the Album table. This would ensure that we’d always be able to navigate from a record in the Ledger table back to information about the album sold, as we wouldn’t be able to delete records from the Album table if they were referenced in Ledger.",
             "personal_note": "This whole part, on DDD ee would avoid delegating to the DB layer all those domain knowledge. Data will be saved differently for that reason to be used by a domain serice or CQRS projections can solve all of this too",
        },
        {
             "context": "Page 96",
             "quote": "Disadvantages The main challenge with synchronous calls is the inherent temporal coupling that occurs, a topic we explored briefly in Chapter 2",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 99",
             "quote": "With nonblocking asynchronous communication, the microservice making the initial call and the microservice (or microservices) receiving the call are decoupled temporarily.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 108",
             "quote": "occurred, nearly always something that has happened inside the world of the microservice that is emitting the event. The microservice emitting the event has no knowledge of the intent of other microservices to use the event, and indeed it may not even be aware that other microservices exist. It emits the event when required, and that is the end of its responsibilities.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 111",
             "quote": "Do be wary, though, about the world of middleware, of which the message broker is just a small part. Queues in and of themselves are perfectly sensible, useful things. However, vendors tend to want to package lots of software with them, which can lead to more and more smarts being pushed into the middleware, as evidenced by things like the enterprise service bus. Make sure you know what you’re getting: keep your middleware dumb, and keep the smarts in the endpoints.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 123",
             "quote": "There is a whole host of technology we could look at, but rather than looking broadly at a long list of options, I will highlight some of the most popular and interesting choices. Here are the options we’ll be looking at: Remote procedure calls Frameworks that allow for local method calls to be invoked on a remote process. Common options include SOAP and gRPC. REST An architectural style where you expose resources (Customer, Order, etc.) that can be accessed using a common set of verbs (GET, POST). There is a bit more to REST than this, but we’ll get to that shortly. GraphQL A relatively new protocol that allows consumers to define custom queries that can fetch information from multiple downstream microservices, filtering the results to return only what is needed. Message brokers Middleware that allows for asynchronous communication via queues or topics.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 133",
             "quote": "teams who have had issues with GraphQL queries causing significant load on the server side as a result of this capability. When we compare GraphQL with something like SQL, we see a similar issue.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 134",
             "quote": "Compared with normal REST-based HTTP APIs, caching is also more complex. With REST-based APIs, I can set one of many response headers to help client-side devices, or intermediate caches like content delivery networks (CDNs), cache responses so they don’t need to be requested again. This isn’t possible in the same way with GraphQL.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 134",
             "quote": "The advice I’ve seen on this issue seems to revolve around just associating an ID with every returned resource (and remember, a GraphQL query could contain multiple resources) and then having the client device cache the request against that ID. As far as I can tell, this makes using CDNs or caching reverse proxies incredibly difficult without additional work.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 134",
             "quote": "The last issue is something that may be entirely subjective, but I still think it’s worth raising. GraphQL makes it feel like you are just working with data,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 148",
             "quote": "between two schemas but will pass or fail based on compatibility; this would allow you to fail a CI build if incompatible schemas are found, ensuring that your microservice won’t get deployed.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 153",
             "quote": "consumers to put their identifer in the user-agent header when making HTTP requests, or you could require that all calls go via some sort of API gateway where clients need keys to identify themselves.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 156",
             "quote": "The argument is that this makes it easy to use your service and avoids the duplication of code required to consume the service itself. The problem, of course, is that if the same people create both the server API and the client API, there is a danger that logic that should exist on the server will start leaking into the client.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 156",
             "quote": "However, according to at least one person at Netflix, over time this has led to a degree of coupling between client and server that has been problematic.",
             "personal_note": "One person lol",
        },
        {
             "context": "Page 163",
             "quote": "Being focused more on north-south traffic, the API gateway’s main concern in a microservices environment is mapping requests from external parties to internal microservices. This responsibility is akin to what you could achieve with a simple HTTP proxy, and in fact API gateways typically build more features on top of existing HTTP proxy products, and they largely function as reverse proxies. In addition, API gateways can be used to implement mechanisms like API keys for external parties, logging, rate limiting, and the like.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 164",
             "quote": "examples I’ve seen of misuse of API gateways is for call aggregation and protocol rewriting, but I’ve also seen a wider push to use API gateways for in-perimeter (east-west) calls too. In this chapter we’ve already briefly looked at the usefulness of a protocol like GraphQL to help us in a situation in which we need to make a number of calls and then aggregate and filter the results, but people are often tempted to solve this problem in API gateway layers too. It starts off innocently enough: you combine a couple of calls and return a single payload. Then you start making another downstream call as part of the same aggregated flow. Then you start wanting to add conditional logic, and before long you realize that you’ve baked core business processes into a third-party tool that is ill suited to the task. If you find yourself needing to do call aggregation and filtering, then look at the potential of GraphQL or the BFF pattern, which we’ll cover in Chapter 14. If the call aggregation you are performing is fundamentally a business process, then this is better done through an explicitly modeled saga, which we’ll cover in Chapter 6. Aside from the aggregation angle, protocol rewriting is also often pushed as something API gateways should be used for. I remember one unnamed vendor very aggressively promoting the idea that its product could “change any SOAP API into a REST API.” Firstly, REST is an entire architectural mindset that cannot simply be implemented in a proxy layer. Secondly, protocol rewriting, which is fundamentally what this is trying to do, shouldn’t be done in intermediate layers, as it’s pushing too much behavior to the wrong place.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 169",
             "quote": "HTTP-related calls. So REST, SOAP, gRPC, and the like can be managed via these products. Things get a bit more murky, though, when you start looking at communication via other protocols, like the use of message brokers such as Kafka.",
             "personal_note": "But before he saod, of i remember well, that those call generate dependencies among micros. Why so much litersture about that then? Id say one should aspire to make a general use of message bromers instead of all this service mesb in same machine thingy",
        },
        {
             "context": "Page 170",
             "quote": "OpenAPI",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 170",
             "quote": "Ambassador’s developer portal is especially interesting. Ambassador is already a popular choice as an API gateway for Kubernetes, and its Developer Portal has the ability to autodiscover available OpenAPI endpoints.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 181",
             "quote": "Distributed Transactions—Just Say No",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 185",
             "quote": "It’s really important to note that a saga allows us to recover from business failures, not technical failures. For example, if we try and take payment from the customer but the customer has insufficient funds, then this is a business failure that the saga should be expected to handle. On the other hand, if the Payment Gateway times out or throws a 500 Internal Service Error, then this is a technical failure that we need to handle separately. The saga assumes the underlying components are working properly—that the underlying system is reliable, and that we are then coordinating the work of reliable components.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 188",
             "quote": "Sometimes you can simplify your rollback operations just by tweaking how your workflow is carried out.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 190",
             "quote": "Having our business process explicitly modeled inside the Order Processor is extremely beneficial. It allows us to look at one place in our system and understand how this process is supposed to work. That can make the onboarding of new people easier and help impart a better understanding of the core parts of the system. There are a few downsides to consider, though. First, by its nature, this is a somewhat coupled approach.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 190",
             "quote": "The other issue, which is more subtle, is that logic that should otherwise be pushed into the services can start to become absorbed in the orchestrator instead. If this begins to happen, you may find that your services become anemic, with little behavior of their own, just taking orders from orchestrators like the Order Processor.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 193",
             "quote": "In the preceding architecture, no one service knows about any other microservice. They need to know only what to do when a certain event is received—we’ve",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 193",
             "quote": "One of the easiest ways of doing this is to project a view regarding the state of a saga by consuming the events being emitted. If we generate a unique ID for the saga, what is known as a correlation ID, we can put it into all of the events that are emitted as part of this saga. When one of our services reacts to an event, the correlation ID is extracted and used for any local logging processes, and it’s also passed downstream with any further calls or events that are fired. We could then have a service whose job it is to just vacuum up all these events and present a view of what state each order is in, and perhaps programmatically carry out actions to resolve issues as part of the fulfillment process if the other services couldn’t do it themselves.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 199",
             "quote": "The problem is that when you work on a feature branch, you aren’t regularly integrating your changes with everyone else. Fundamentally, you are delaying integration. And when you finally decide to integrate your changes with everyone else, you’ll have a much more complex merge. The alternative approach is to have everyone check in to the same “trunk” of source code. To keep changes from impacting other people, techniques like feature flags are used to “hide” incomplete work. This technique of everyone working off the same trunk is called trunk-based development. The discussion around this topic is nuanced, but my own take is that the benefits of frequent integration—and validation of that integration—are significant enough that trunk-based development is my preferred style of development. Moreover, the work to implement feature flags is frequently beneficial in terms of progressive delivery, a concept we’ll explore in Chapter 8.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 200",
             "quote": "(less than a day) before being merged into trunk, and less than three active branches in total, are important aspects of continuous delivery, and all contribute to higher performance. So does merging code into trunk or master on a daily basis.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 202",
             "quote": "I have on occasion seen some confusion around the terms continuous delivery and continuous deployment. As we’ve already discussed, continuous delivery is the concept whereby each check-in is treated as a release candidate, and whereby we can assess the quality of each release candidate to decide if it’s ready to be deployed. With continuous deployment on the other hand, all check-ins have to be validated using automated mechanisms (tests for example), and any software that passes these verification checks is deployed automatically, without human intervention. Continuous deployment can therefore be considered an extention of continuous delivery. Without continuous delivery, you can’t do continuous deployment. But you can do continuous delivery without doing continuous deployment. Continuous",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 204",
             "quote": "Secondly, the artifact you verify should be the artifact you deploy! If you build a microservice, test it, say “yes, it’s working,” and then build it again for deployment into production, how do you know that the software you validated is the same software you deployed?",
             "personal_note": "That basically strips out of all sense circle ci. At least for deployment",
        },
        {
             "context": "Page 205",
             "quote": "If the same artifact is going to be used across multiple environments, any aspects of configuration that vary from environment to environment need to be kept outside the artifact itself. As a simple example, I might want to configure application logs so that everything at DEBUG level and above is logged when running the Slow Tests stage, giving me more information to diagnose why a test fails.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 206",
             "quote": "This model can work perfectly well if you buy into the idea of lockstep releases, where you don’t mind deploying multiple services at once. In general, this is absolutely a pattern to avoid,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 208",
             "quote": "When using this pattern, there is nothing to stop a microservice from depending on other code that is managed in different repositories. A simple mechanism for doing this is to have the code you want to reuse packaged into a library that then becomes an explicit dependency of the downstream microservices.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 209",
             "quote": "I’ve spoken to multiple people who find the lack of atomic deployment with this to be a significant problem. I can certainly appreciate the complexity this brings, but I think that in most cases it points to a bigger underlying issue. If you are continually making changes across multiple microservices, then your service boundaries might not be in the right place, and it could imply too much coupling between your services. As we’ve already discussed, we’re trying to optimize our architecture, and our microservice boundaries, so that changes are more likely going to apply within a microservice boundary. Cross-cutting changes should be the exception, not the norm.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 211",
             "quote": "the ability to reuse code easily and to make changes that impact multiple different projects is often cited as the major reason for adopting this pattern.",
             "personal_note": "Monorepo",
        },
        {
             "context": "Page 212",
             "quote": "One of the benefits of a monorepo approach is that we can practice finer-grained reuse across projects. With a multirepo model, if I want to reuse someone else’s code, it will likely have to be packaged as a versioned artifact that I can then include as part of my build (such as a Nuget package, a JAR file, or an NPM). With our unit of reuse being a library, we are potentially pulling in more code than we really want. Theoretically, with a monorepo I could just depend on a single source file from another project—although this of course will cause me to have a more complex build mapping.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 213",
             "quote": "With strong ownership, some code is owned by a specific group of people. If someone from outside that group wants to make a change, they have to ask the owners to make the change for them. Weak ownership still has the concept of defined owners, but people outside the ownership group are allowed to make changes, although any of these changes must be reviewed and accepted by someone in the ownership group. This would cover a pull request being sent to the core ownership team for review, before the pull request is merged. With collective ownership, any developer can change any piece of code.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 213",
             "quote": "Some source code tools allow you to specify ownership of specific directories or even specific filepaths inside a single repository. Google initially implemented this system on top of Perforce for its own monorepo before developing its own source control system, and it’s also something that GitHub has supported since 2016. With GitHub, you create a CODEOWNERS file, which lets you map owners to directories or filepaths.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 214",
             "quote": "fact, I’d suggest it is required reading for anyone thinking, “We should use a monorepo, because Google does!” Your organization probably isn’t Google and probably doesn’t have Google-type problems, constraints, or resources.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 223",
             "quote": "the same database infrastructure can support multiple logically isolated databases. So the databases for Invoice and Order might both be served by the same underlying database engine and hardware, as shown in Figure 8-6. This can have significant benefits—it allows you to pool hardware to serve multiple microservices, it can reduce licensing costs, and it can also help reduce the work around management of the database itself.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 224",
             "quote": "teams that run on public cloud providers are much more likely to provision dedicated database infrastructure on a per-microservice basis, as shown in Figure 8-7. The costs of provisioning and managing this infrastructure are much lower. AWS’s Relational Database Service (RDS), for example, can automatically handle concerns like backups, upgrades, and multiavailability zone failover, and similar products are available from the other public cloud providers. This makes it much more cost effective to have more isolated infrastructure for your microservice, giving each microservice owner more control rather than having to rely on a shared service.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 226",
             "quote": "This means that environments closer to the developer will be tuned to provide fast feedback, which may compromise how “production-like” they are. But as environments get closer to production, we will want them to be more and more like the end production environment to ensure that we catch problems.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 227",
             "quote": "The key thing, though, is that the exact topology of your microservice will change from environment to environment. You therefore need to find ways to change the number of instances from one environment to another, along with any environment-specific configuration. You also want to build your service instances once and once only, so it follows that any environment-specific information needs to be separate from the deployed service artifact.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 228",
             "quote": "Isolated execution Run microservice instances in an isolated fashion such that they have their own computing resources, and their execution cannot impact other microservice instances running nearby. Focus on automation As the number of microservices increases, automation becomes increasingly important. Focus on choosing technology that allows for a high degree of automation, and adopt automation as a core part of your culture. Infrastructure as code Represent the configuration for your infrastructure to ease automation and promote information sharing. Store this code in source control to allow for environments to be re-created. Zero-downtime deployment Take independent deployability further and ensure that deploying a new version of a microservice can be done without any downtime to users of your service (be they humans or other microservices). Desired state management Use a platform that maintains your microservice in a defined state, launching new instances if required in the event of outages or traffic increases.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 231",
             "quote": "Can you deploy database changes without manual intervention? Embracing a culture of automation is key if you want to keep the complexities of microservice architectures in check.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 232",
             "quote": "Gilt had around 10 microservices live; by 2012, over 100; and in 2014, over 450 microservices were live—or around three microservices for every developer in Gilt. This sort of ratio of microservices to developers is not uncommon among organizations that are mature in their use of microservices,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 233",
             "quote": "For more on this topic, I recommend Infrastructure as Code, 2nd edition, by Kief Morris.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 236",
             "quote": "Prerequisites To take advantage of desired state management, the platform needs some way to automatically launch instances of your microservice. So having a fully automated deployment for microservice instances is a clear prerequisite for desired state management.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 237",
             "quote": "With GitOps, your desired state for your infrastructure is defined in code and stored in source control.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 244",
             "quote": "you should view containers as a great way of isolating execution of trusted software. If you are running code written by others and are concerned about a malicious party trying to bypass container-level isolation, then you’ll want to do some deeper examination yourself regarding the current state of the art for handling such situations—some",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 246",
             "quote": "Docker images can (and should) be identical to the container image that I will eventually run in production.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 248",
             "quote": "Fundamentally, the lack of isolation this model provides is one of the main reasons why this model is increasingly rare for people adopting microservice architectures.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 249",
             "quote": "When PaaS solutions work well, they work very well indeed. However, when they don’t quite work for you, you often don’t have much control in terms of getting under the hood to fix things.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 249",
             "quote": "Serverless is actually an umbrella term for a host of different technologies where, from the point of view of the person using them, the underlying computers don’t matter.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 250",
             "quote": "FaaS a great option for situations in which you have low or unpredictable load.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 250",
             "quote": "Under the hood, all the FaaS implementations I’m aware of make use of some sort of container technology.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 250",
             "quote": "This means, though, that you lack a degree of control over what exactly can be run; as a result you need the FaaS provider to support your language of choice.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 250",
             "quote": "This lack of control over the underlying runtime also extends to the lack of control over the resources given to each function invocation.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 250",
             "quote": "you can only control the memory given to each function. This in turn seems to imply that a certain amount of CPU and I/O is given to your function runtime, but you can’t control those aspects directly.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 251",
             "quote": "function invocations can provide limits in terms of how long they can run for. Google Cloud functions, for example, are currently capped at 9 minutes of execution,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 251",
             "quote": "Finally, most function invocations are considered to be stateless. Conceptually, this means that a function cannot access state left by a previous function invocation unless that state is stored elsewhere (for example, in a database).",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 252",
             "quote": "Due to its lightweight nature and the strong sandboxing concepts built in to its core specification, Wasm has the potential to challenge the use of containers as the go-to deployment format for server-side applications.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 252",
             "quote": "Firstly, it’s important to address a concern that is often raised with FaaS, and that is the notion of spin-up time.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 252",
             "quote": "reality, though, these runtimes rarely cold start. On AWS at least, the runtimes are kept “warm,” so that requests that come in are served by already launched and running instances. This happens to such an extent that it can be difficult to gauge the impact of a “cold start” nowadays due to the optimizations being done under the hood by the FaaS providers.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 252",
             "quote": "Finally, the dynamic scaling aspect of functions can actually end up being an issue. Functions are launched when triggered. All the platforms I’ve used have a hard limit on the maximum number of concurrent function invocations, which is something you might have to take careful note of. I’ve spoken to more than one team that has had the issue of functions scaling up and overwhelming other parts of its infrastructure that didn’t have the same scaling properties.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 253",
             "quote": "Function per aggregate So how would we break up a microservice instance into smaller functions? If you’re making use of domain-driven design, you may already have explicitly modeled your aggregates (a collection of objects that are managed as a single entity, typically referring to real-world concepts). If your microservice instance handles multiple aggregates, one model that makes sense to me is to break out a function for each aggregate, as shown in Figure 8-19. This ensures that all the logic for a single aggregate is self-contained inside the function, making it easier to ensure a consistent implementation of the life-cycle management of the aggregate.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 254",
             "quote": "A few caveats here. Firstly, I would strongly urge you to maintain a coarser-grained external interface. To upstream consumers, they are still talking to the Expenses service—they are unaware that requests get mapped to smaller-scoped aggregates.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 255",
             "quote": "This mapping from a single microservice to multiple finer-grained deployable units warps our previous definition of a microservice somewhat. We normally consider a microservice as being an independently deployable unit—now one microservice is made up of multiple different independently deployable units. Conceptually, in this example, the microservice moves toward being more of a logical than a physical concept.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 257",
             "quote": "So let’s review a set of rules I like to call Sam’s Really Basic Rules of Thumb for Working Out Where to Deploy Stuff: If it ain’t broke, don’t fix it.4 Give up as much control as you feel happy with, and then give away just a little bit more. If you can offload all your work to a good PaaS like Heroku (or a FaaS platform), then do it and be happy. Do you really need to tinker with every last setting? Containerizing your microservices it is not pain-free, but is a really good compromise around cost of isolation and has some fantastic benefits for local development, while still giving you a degree of control over what happens. Expect Kubernetes in your future.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 265",
             "quote": "The Cloud Native Computing Foundation (CNCF for short) is an offshoot of the nonprofit Linux Foundation. The CNCF focuses on curating the ecosystem of projects to help promote cloud native development, although in practice this means supporting Kubernetes and projects that work with or build on Kubernetes itself.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 269",
             "quote": "book Accelerate,6 Nicole Forsgren, Jez Humble, and Gene Kim",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 270",
             "quote": "Deployment is what happens when you install some version of your software into a particular environment (the production environment is often implied). Release is when you make a system or some part of it (for example, a feature) available to users.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 270",
             "quote": "continuous delivery with fine-grained control over the blast radius”",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 270",
             "quote": "progressive delivery can empower the product owner",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 270",
             "quote": "implying a somewhat technically savvy product owner,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 271",
             "quote": "a much deeper dive into the world of feature toggles, I can heartily recommend Pete Hodgson’s writeup “Feature Toggles (aka Feature Flags)”",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 271",
             "quote": "If the feature works for that canary group, then it can be rolled out to more of your customers until everyone sees the new version. For a microservice architecture, a toggle could be configured at an individual microservice level, turning functionality on (or off) for requests to that functionality from the outside world or other microservices.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 272",
             "quote": "Another technique is to have two different versions of a microservice running side by side, and use the toggle to route to either the old or the new version. Here, the canary implementation has to be somewhere in the routing/networking path, rather than being in one microservice. When",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 273",
             "quote": "book Monolith to Microservices.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 273",
             "quote": "With blue-green deployment, feature toggles, canary releases, and parallel runs we’ve just scratched the surface of the field of progressive delivery. These ideas can work well together (we’ve already touched on how you could use feature toggles to implement a canary rollout for example), but you probably want to ease yourself in. To start off, just remember to separate the two concepts of deployment and release. Next, start looking for ways to help you deploy your software more frequently, but in a safe manner.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 278",
             "quote": "Succeeding with Agile,2 Mike Cohn",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 279",
             "quote": "Virtually every team I’ve worked on has used different names for tests than the ones that Cohn uses in the pyramid.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 279",
             "quote": "Unit tests typically test a single function or method call. The tests generated as a side effect of test-driven design (TDD) will fall into this category, as do the sorts of tests generated by techniques such as property-based testing.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 280",
             "quote": "Service tests are designed to bypass the user interface and test our microservices directly. In a monolithic application, we might just be testing a collection of classes that provide a service to the UI.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 280",
             "quote": "The cause of the test failure should be limited to just the microservice under test. To achieve this isolation, we need to stub out all external collaborators so only the microservice itself is in scope,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 282",
             "quote": "Finding that your test suite is taking too long to run? When broader-scoped tests like our service or end-to-end tests fail, write a smaller-scoped unit test to pick up that breakage sooner.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 283",
             "quote": "create a stub microservice that responds with canned responses to known requests from the microservice under test.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 284",
             "quote": "Growing Object-Oriented Software, Guided by Tests by Steve Freeman and Nat Pryce.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 286",
             "quote": "We can deal with both of these problems elegantly by having multiple pipelines “fan-in” to a single end-to-end test stage.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 287",
             "quote": "When we detect flaky tests, it is essential that we do our best to remove them. Otherwise, we start to lose faith in a test suite that “always fails like that.”",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 287",
             "quote": "start to assume that failing tests are OK. In “Eradicating Non-Determinism in Tests,”6 Martin Fowler advocates the approach that if you have flaky tests, you should track them down and—if you can’t immediately fix them—remove them from the suite so you can treat them.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 289",
             "quote": "Sometimes organizations react by having a dedicated team write these tests. This can be disastrous.",
             "personal_note": "Zinio...",
        },
        {
             "context": "Page 289",
             "quote": "Ultimately, I am convinced that at a certain level of organizational scale, you need to move away from cross-team end-to-end tests for this reason.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 291",
             "quote": "your teams work independently, it follows that they should be able to test independently.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 292",
             "quote": "With a shared end-to-end test suite, you undermine your goal of independent deployability.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 293",
             "quote": "Arguably, consumer-driven contracts are as much about fostering clear lines of communication and collaboration, where needed, between microservices and the teams that consume them. It could be argued, in fact, that implementing CDCs is just making more explicit the communication between the teams that must already exist. In cross-team collaboration, CDCs are an explicit reminder of Conway’s law. CDCs",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 295",
             "quote": "Alternatively, if you are creating an API for thousands of potential consumers, such as with a publicly available web service API, you may have to play the role of the consumer yourself (or perhaps work with a subset of your consumers) in defining these tests. Breaking huge numbers of external consumers is a pretty bad idea, so if anything the importance of CDCs is increased!",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 295",
             "quote": "From speaking to people who have been implementing microservices at scale for a while now, I have learned that most of them over time remove the need entirely for end-to-end tests in favor of other mechanisms",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 297",
             "quote": "Fundamentally, I do think that the use of cloud environments to allow a developer to run more microservices for their development and test cycles is missing the point, resulting in more complexity than is needed, in addition to higher costs.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 299",
             "quote": "When it comes to in-production testing, tests carried out on software that is deployed into production, before it is released, should be safe.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 301",
             "quote": "considerations about CFRs come far too late. I strongly suggest looking at your CFRs as early as possible and reviewing them regularly.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 301",
             "quote": "You may decide that you want performance tests that isolate individual services, but start with tests that check core journeys in your system. You may be able to take end-to-end journey tests and simply run these at volume.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 301",
             "quote": "The longer you go without running performance tests, the harder it can be to track down the culprit. Performance problems are especially difficult to resolve, so if you can reduce the number of commits you need to look at to see a newly introduced problem, your life will be much easier.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 304",
             "quote": "Optimize for fast feedback, and separate types of tests accordingly. Avoid the need for end-to-end tests that span more than one team—consider using consumer-driven contracts instead. Use consumer-driven contracts to provide focus points for conversations between teams. Try to understand the trade-off between putting more effort into testing and detecting issues faster in production (optimizing for MTBF versus optimizing for MTTR). Give testing in production a try!",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 304",
             "quote": "Agile Testing by Lisa Crispin and Janet Gregory (Addison-Wesley),",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 306",
             "quote": "Firstly, we need to monitor the small things and provide aggregation to allow us to see the bigger picture. Then, we need to make sure we have tools available to us to slice and dice this data as part of our investigation. Finally, we need to get smarter about how we think about system health, by embracing concepts like testing in production.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 310",
             "quote": "New Relic even coined the term MELT (metrics, event, logs, and traces), which hasn’t really caught on, but at least New Relic is trying.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 310",
             "quote": "Focusing too much on specific implementation details runs the risk of focusing on activity versus outcome. It’s analogous to the current world of IT, where hundreds if not thousands of organizations have fallen in love with building microservice-based systems without really understanding what they are trying to achieve!",
             "personal_note": "Brilliant Quote",
        },
        {
             "context": "Page 311",
             "quote": "We need to know that the users of our software are happy. If there is a problem, we want to know about it—ideally before our users find an issue themselves. When a problem does occur, we need to work out what we can do to get the system up and running again, and once the dust has settled we want to have enough information in hand to work out what the hell went wrong and what we can do to avoid the problem happening again.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 312",
             "quote": "we’re looking to use specialized subsystems to grab our logs and make them available centrally.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 313",
             "quote": "come as close I get to giving one-size-fits-all advice: you should view implementing a log aggregation tool as a prerequisite for implementing a microservice architecture.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 317",
             "quote": "Once you have log aggregation, get correlation IDs in as soon as possible. Easy to do at the start and hard to retrofit later, they will drastically improve the value of your logs.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 321",
             "quote": "Humio is that this was something its developers",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 321",
             "quote": "The secret to knowing when to panic and when to relax is to gather metrics about how your system behaves over a long-enough period of time that clear patterns emerge.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 327",
             "quote": "service-level agreement (SLA) is an agreement reached between the people building the system and the people using the system.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 328",
             "quote": "a team level, we instead talk about service-level objectives (SLOs). SLOs define what the team signs up to provide. Achieving the SLOs of every team across the organization will satisfy (and likely greatly exceed) the requirements of the organization’s SLAs.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 329",
             "quote": "Error budgets are as much about giving teams breathing room to try new things as anything.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 333",
             "quote": "our model for semantic correctness would be expected to greatly exceed our obligations in an SLA, and we would expect to have concrete SLOs that allow us to track against this model.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 333",
             "quote": "you may not be in a position to decide what these value statements should be. In a product-driven delivery organization, this is where the product owner should come in—but",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 336",
             "quote": "I’ve found the use of synthetic transactions to perform semantic monitoring like this to be a far better indicator of issues in systems than alerting on the lower-level metrics.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 336",
             "quote": "run a subset of these tests, on an ongoing basis, as a way of monitoring our system?",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 337",
             "quote": "Smoke tests Used after the software is deployed into production but before it is released,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 337",
             "quote": "monitoring and observability is one area in which standardization can be incredibly important.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 338",
             "quote": "You should try to write your logs out in a standard format. You definitely want to have all your metrics in one place, and you may want to have a list of standard names for your metrics too;",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 338",
             "quote": "Honeycomb and Lightstep leading the way in terms of what observability tooling for microservices looks like,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 339",
             "quote": "OpenTelemetry initiative,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 347",
             "quote": "The principle of least privilege describes the idea that when granting access we should grant the minimum access a party needs to carry out the required functionality, and only for the time period they need it.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 350",
             "quote": "Identify who your potential attackers are, what targets they are trying to acquire, and where you are most vulnerable. Protect your key assets from would-be hackers. Detect if an attack has happened, despite your best efforts. Respond when you’ve found out something bad has occurred. Recover in the wake of an incident.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 352",
             "quote": "can recommend Threat Modeling: Designing for Security5 by Adam Shostack.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 355",
             "quote": "Even if someone gets hold of your API keys for your cloud provider and doesn’t decide to destroy everything you’ve built, they might decide to spin up some expensive virtual machines to run some bitcoin mining in the hope that you won’t notice.",
             "personal_note": "Victor xD",
        },
        {
             "context": "Page 364",
             "quote": "you want to avoid what I call the Schrödinger backup.9 This is a backup that may or may not actually be a backup. Until you actually try and restore it, you really don’t know if it’s actually a backup use,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 365",
             "quote": "Being able to rebuild your microservice and recover its data in an automated fashion helps you recover in the wake of an attack and also has the advantage of making your deployments easier across the board, having positive benefits for development, test, and production operations activities.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 370",
             "quote": "due to the various potential attack vectors out there (unsecured WiFi, DNS poisoning, and the like), it is vital to ensure that when we go to a website it really is the website it claims to be. With HTTPS,",
             "personal_note": "Wait, does guzzle implement tls? Or d we normally disable it? Aking guzzle calls to servers which might not be the server we want to male the call to?",
        },
        {
             "context": "Page 371",
             "quote": "I’ve seen some solutions (including those pushed by API gateway vendors) that involve the server having to make calls to central services to check client identity, which is pretty nuts when you consider the latency implications.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 371",
             "quote": "mutual TLS is rarely used. In our microservice architecture, though, especially where we might be operating in a zero-trust environment, this is much more common.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 372",
             "quote": "When you use either plain old HTTPS or mutual TLS, data won’t be visible to intermediate parties—this is because TLS encrypts the data being sent. This can be problematic if you explicitly want the data sent in the open—for example, reverse proxies like Squid or Varnish are able to cache HTTP responses, but that isn’t possible with HTTPS.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 376",
             "quote": "managing authentication of key services that are vital to the running of your software or allow access to especially sensitive information (e.g., source code access), I’d consider the use of MFA to be a must.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 377",
             "quote": "Rather than having each service manage handshaking with our identity provider, a more common approach is to use a gateway to act as a proxy, sitting between your services and the outside world",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 378",
             "quote": "However, we still need to solve the problem of how the downstream service receives information about principals, such as their username or what roles they play. If you’re using HTTP, you could configure your gateway to populate headers with this information.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 378",
             "quote": "create a JSON Web Token (JWT) containing all the information about the principal; this has a number of benefits, including being something we can more easily pass from microservice to microservice.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 378",
             "quote": "If you decide to use a gateway, make sure your developers can launch their services behind one without too much work.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 379",
             "quote": "Assuming our gateway can extract attributes about the principal as a result of the authentication, it may be able to make more nuanced decisions.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 379",
             "quote": "example, it is common to place people in groups or assign them to roles. We can use this information to understand what they can do. So for the helpdesk application, we might allow access only to principals with a specific role (e.g., STAFF). Beyond allowing (or disallowing) access to specific resources or endpoints, though, we need to leave the rest to the microservice itself;",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 379",
             "quote": "These decisions need to be local to the microservice in question.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 379",
             "quote": "have seen people use the various attributes supplied by identity providers in horrible ways, using really fine-grained roles like CALL_CENTER_50_DOLLAR_REFUND, where they end up putting information specific to one piece of microservice functionality into their directory services. This is a nightmare to maintain and gives very little scope for our services to have their own independent life cycle, as suddenly a chunk of information about how a service behaves lives elsewhere,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 381",
             "quote": "Fundamentally, what has happened here is that while we have authenticated the user in question, we aren’t providing sufficient authorization. What we want is some part of our system to be able to judge that a request to see User A’s details can be granted only if it’s User A asking to see them. Where does this logic live, though?",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 382",
             "quote": "Therefore, we’d want to push the decision about whether or not the call should be authorized into the same microservice where the functionality being requested lives. This makes the microservice more self-contained and also gives us the option to implement zero trust if we want.",
             "personal_note": "When explaining about having the authorization in a central upstream. Imagine deploying a micro plus the gw part where it says what is being authorized",
        },
        {
             "context": "Page 382",
             "quote": "the most common solution to this particular problem has been to use JSON Web Tokens.",
             "personal_note": "About the confused deputy. Central authorization nope, just decoupled per service but how to get the user info the micro needs? and to make sure it hsnt been tempered with",
        },
        {
             "context": "Page 384",
             "quote": "once authenticated we generate some sort of token to represent their logged-in session (likely an OAuth token), which is stored on the client device. Subsequent requests from that client device hit our gateway, which generates a JWT token that will be valid for the duration of that request.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 385",
             "quote": "A variation to this approach is to generate a JWT token when the user initially authenticates themselves with the system and then have that JWT token stored on the client device. It’s worth considering, though, that such a token will have to be valid for the duration of the logged-in session;",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 386",
             "quote": "For a broader look at application security in general, I recommend Agile Application Security by Laura Bell et al.17",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 391",
             "quote": "Creating a culture that prioritizes creating an environment in which people can share information freely, without fear of retribution, is vital to encourage learning in the wake of an incident. Having the bandwidth to really examine such surprises and extract the key learnings requires time, energy, and people—all things that will reduce the resources available to you to deliver features in the short term. Deciding to embrace sustained adaptability is partly about finding the balancing point between short-term delivery and longer-term adaptability.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 391",
             "quote": "Taken more broadly, the ability to deliver resiliency is a property not of the software itself but of the people building and running the system.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 394",
             "quote": "right thing to do in any situation is often not a technical decision. We might know what is technically possible when the shopping cart is down, but unless we understand the business context we won’t understand what action we should be taking.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 397",
             "quote": "we discovered the hard way that systems that just act slow are much harder to deal with than systems that just fail fast. In a distributed system, latency kills.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 401",
             "quote": "I’d suggest starting with separate connection pools for each downstream connection, at the very least. You",
             "personal_note": "Zinio proxy might help",
        },
        {
             "context": "Page 401",
             "quote": "With a circuit breaker, after a certain number of requests to the downstream resource have failed (due either to error or to a time-out), the circuit breaker is blown.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 402",
             "quote": "While the circuit breaker is blown, you have some options. One is to queue up the requests and retry them later on.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 404",
             "quote": "Scripting the process to manually open and close a circuit breaker as part of an automated deployment process could be a sensible next step.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 408",
             "quote": "More than one client I’ve worked with has had a disaster recovery hosting platform with a different supplier, for example, to ensure they weren’t too vulnerable to the mistakes of one company.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 417",
             "quote": "resiliency requires a questioning mind—a drive to constantly examine the weaknesses in our system. This requires a culture of learning, and often the best learning can come in the wake of an incident.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 427",
             "quote": "Partitioning at the database level often makes sense if the database technology you are using supports this concept natively, as you can then offload this problem to an existing implementation.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 428",
             "quote": "Kafka supports distributing messages across partitioned topics.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 428",
             "quote": "it is common to combine data partitioning with a technique like horizontal duplication to improve the robustness of a given partition.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 430",
             "quote": "thoroughly recommend the pleasingly concise NoSQL Distilled,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 433",
             "quote": "Any form of optimization should be driven by real need.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 434",
             "quote": "you’ve identified what you think is a problem, try to identify a small amount of work that can be done to confirm whether or not your proposed solution will work. In the context of scaling systems to handle load, having a suite of automated load tests, for example, can be incredibly useful.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 434",
             "quote": "As such, if you are considering CQRS as a way to help scale your application, regard it as one of the harder forms of scaling you’d need to implement, and perhaps try some of the easier stuff first. For example, if you are simply read-constrained, a read replica may well be a significantly less risky and faster approach to start with.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 435",
             "quote": "One final note on CQRS and event sourcing: from the point of view of a microservice architecture, the decision to use or not use these techniques is an internal implementation detail of a microservice. If you’ve decided to implement a microservice by splitting responsibility for reads and writes across different processes and models, for example, this should be invisible to consumers of the microservice. If inbound requests need to be redirected to the appropriate model based on the request being made, make this the responsibility of the microservice implementing CQRS. Keeping these implementation details hidden from consumers gives you a lot of flexibility to change your mind later, or to change how you are using these patterns.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 440",
             "quote": "We could, for example, maintain a reverse proxy within our microservice’s logical boundary, use a hidden Redis node, or divert read queries to read replicas of a database.",
             "personal_note": "Server side cache",
        },
        {
             "context": "Page 441",
             "quote": "The major issue with this form of caching is that it has reduced scope for optimizing for latency, as a round trip by consumers to the microservice is still needed.",
             "personal_note": "Server side cache",
        },
        {
             "context": "Page 444",
             "quote": "If the cost of creating the response is high, perhaps requiring an expensive set of database queries, then conditional GET requests can be an effective mechanism.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 444",
             "quote": "our Recommendation microservice is maintaining a client-side cache. Entries in that cache are invalidated when the Inventory microservice fires a Stock Change event, letting Recommendation (or any other subscribers to this event) know that",
             "personal_note": "Sorry but i hate this example. This cache should be part of the bounded context. Everything else should work the same as he explains like it is a cache. But we shoul probably save this info in the same db or in the read model",
        },
        {
             "context": "Page 449",
             "quote": "Those pages with Expires: Never stuck in the caches of many of our users and would never be invalidated until the cache became full or the user cleaned them out manually. Clearly we couldn’t make either thing happen; our only option was to change the URLs of these pages so they were refetched.",
             "personal_note": "Smart unevitable solution ",
        },
        {
             "context": "Page 449",
             "quote": "Knowing how fast you can scale up once you spot an upward trend is key. If you know you’ll get only a couple of minutes’ notice about an increase in load, but scaling up will take you at least 10 minutes, then you know you’ll need to keep extra capacity around to bridge this gap.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 450",
             "quote": "Having a good suite of load tests is almost essential here.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 450",
             "quote": "You can use them to test your autoscaling rules.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 450",
             "quote": "I’d suggest using autoscaling for failure conditions first while you collect the data. Once you want to start autoscaling for load, make sure you are very cautious about scaling down too quickly.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 451",
             "quote": "There is a danger that people will see the need to rearchitect when certain scaling thresholds are reached as a reason to build for massive scale from the beginning. This can be disastrous. At the start of a new project, we often don’t know exactly what we want to build, nor do we know if it will be successful.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 459",
             "quote": "think that having a dedicated frontend team is in general a mistake if you are trying to optimize for good throughput—it creates new handoff points in your organization, slowing things down.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 464",
             "quote": "Really, this pattern works best when you want all of the implementation and behavior of your UI in one deployable unit. For a single team developing both the frontend and all supporting microservices, that might be fine. Personally, if you have more than one team working on your software, I think you should fight against that urge, as it can result in you slipping into a layered architecture with the associated organizational silos.",
             "personal_note": "About momolithic frontend",
        },
        {
             "context": "Page 464",
             "quote": "define micro frontends as follows: “An architectural style where independently deliverable frontend applications are composed into a greater whole.”",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 465",
             "quote": "we can consider two key decompositional techniques that can aid implementation of the micro frontend pattern. Widget-based decomposition involves splicing different parts of a frontend together into a single screen. Page-based decomposition, on the other hand, has the frontend split apart into independent web pages.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 466",
             "quote": "reflection, I feel that the SCS approach is a tech-focused approach to promote an organizational concept. As such, I’d rather focus on the importance of stream-aligned teams with reduced coordination, and let the technology and architecture flow from that.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 470",
             "quote": "You still need some sort of assembly layer to pull these parts together. This could be as simple as making use of server-side or client-side templates, though.",
             "personal_note": "Widget based micro frontends",
        },
        {
             "context": "Page 473",
             "quote": "The widget decomposition pattern is incredibly useful if you are building a rich web-based user interface, and I would strongly suggest the use of widgets in any situation in which you are making use of a SPA framework and want to break up responsibilities for the frontend, moving toward a micro frontend approach.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 475",
             "quote": "Pattern: Central Aggregating Gateway A central-purpose aggregating gateway sits between external user interfaces and downstream microservices and performs call filtering and aggregation for all user interfaces.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 477",
             "quote": "Fundamentally, the nature of the call aggregation and filtering is largely driven by the requirements of the external user interfaces. As such, it would make natural sense for the gateway to be owned by the team(s) creating the UI.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 479",
             "quote": "It’s common to realize that a pattern of call aggregation actually relates to some domain functionality that could justify a microservice in its own right",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 479",
             "quote": "So if you want to make use of a dedicated API gateway, go ahead—but strongly consider having your filtering and aggregation logic elsewhere.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 480",
             "quote": "Pattern: Backend for Frontend (BFF) The main distinction between a BFF and a central aggregating gateway is that a BFF is single purpose in nature—it is developed for a specific user interface.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 484",
             "quote": "The other option is to extract the shared functionality into a new microservice. This can work well if the functionality being extracted represents business domain functionality.",
             "personal_note": "About extracting common functionality from different backforfrons",
        },
        {
             "context": "Page 486",
             "quote": "You can think of BFFs as just having a use in solving the constraints of mobile devices. The desktop web experience is typically delivered on more powerful devices with better connectivity, where the cost of making multiple downstream calls is manageable.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 487",
             "quote": "This approach can be especially effective, as third parties often have limited to no ability (or desire) to use or change the API calls they make. With a central API backend, you may have to keep old versions of the API around just to satisfy a small subset of your outside parties unable to make a change; with a BFF, this problem is substantially reduced. It also limits the impact of breaking changes.",
             "personal_note": "Bff for 3rd party clirnts connecting to you via API",
        },
        {
             "context": "Page 489",
             "quote": "implement GraphQL, we need a resolver to handle the queries. A GraphQL resolver sits on the server side and maps the GraphQL queries into calls to actually fetch the information. So in the case of a microservice architecture, we’d need a resolver that would be capable of mapping the request for the order with ID 123 into an equivalent call to a microservice.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 489",
             "quote": "That said, server-side changes will still be needed if you need to expose new types or add fields to existing types. As such, you may still want multiple GraphQL server backends to align along team boundaries—so GraphQL becomes a way of implementing a BFF.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 491",
             "quote": "shift to a microservice architecture without a shift in organizational structure will blunt the usefulness of microservices—you may end up paying the (considerable) cost for the architectural change, without getting the return on your investment.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 492",
             "quote": "their book Accelerate,1 Nicole Forsgren, Jez Humble, and Gene Kim",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 497",
             "quote": "you to be able to throw more people (or teams) at a problem to go faster, the work needs to be able to be split apart into tasks that can be worked on, to some degree, in parallel. If one developer is doing some work that another developer is waiting for, the work cannot be done in parallel, it must be done sequentially.",
             "personal_note": "Why 9 pregnat women dont make a newborn in 1 month. Proof to the boss that this work cant be done in paralel and even if some bits can theres still coordination",
        },
        {
             "context": "Page 517",
             "quote": "Do Code Reviews Promptly! If you want to do code reviews and aren’t pair programming, do the review as quickly as possible after the change is submitted, and go through the feedback in as synchronous a way as possible, ideally face to face with the reviewer.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 518",
             "quote": "Personally, I have some deep reservations around some aspects of ensemble programming. You’ll find your team is in fact a neurodiverse bunch, and power imbalances in the ensemble can further undermine the goal of collective problem solving. Not everyone is comfortable working in a group, and an ensemble is definitely that. Some people will thrive in such an environment, while others will feel totally unable to contribute. When I’ve raised this issue with some proponents of ensemble programming, I’ve gotten a variety of responses, many of which boil down to the belief that if you create the right ensemble environment, anyone will be able to “come out of their shell and contribute.” Let’s just say that after that particular set of conversations, I rolled my eyes so much I nearly went blind. To be fair, these same concerns can be raised about pair programming as well!",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 518",
             "quote": "While I have no doubt that many ensemble programming proponents won’t be as unaware or tone-deaf as this, it’s important to remember that creating an inclusive workspace is in part about understanding how to create an environment in which all members of the team are able to fully contribute in a way that is safe and comfortable for them. And don’t kid yourself that just because you’ve got everyone in a room everyone is actually contributing.",
             "personal_note": "That should apply to day to day work!!!!!!",
        },
        {
             "context": "Page 523",
             "quote": "No matter how it looks at first, it’s always a people problem. Gerry Weinberg, The Second Law of Consulting",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 524",
             "quote": "James Lewis, “Scale, Microservices and Flow,” YOW! Conferences, February 10,",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 528",
             "quote": "This shared understanding is called ‘architecture.’ This understanding includes how the system is divided into components and how the components interact through interfaces.",
             "personal_note": "At cmrad theres no rchitecture, or there is but i wot change because the environment will prevent ot and a single person doesnt change it sonce its a social construct",
        },
        {
             "context": "Page 533",
             "quote": "“be worried about what happens between the boxes, and be liberal in what happens inside.”",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 533",
             "quote": "our system doesn’t just accommodate users; it also accommodates the people that actually build the software themselves. A successful architecture also helps create a nice environment in which to do our work.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 542",
             "quote": "The act of making nontechnical product owners more accountable for prioritization around technical activities is nontrivial, but it is absolutely worth it in my experience.",
             "personal_note": "Good think pplied everywhere ive worked so fr",
        },
        {
             "context": "Page 550",
             "quote": "Over time, look to reduce your reliance on end-to-end tests; consider replacing some of the effort put into this form of testing with consumer-driven contracts, schema compatibility checking, and testing in production.",
             "personal_note": " no personal note, only highlight.",
        },
        {
             "context": "Page 550",
             "quote": "“must reads.” The first is Accelerate by Nicole Forsgren, Jez Humble, and Gene Kim. The second is Team Topologies by Matthew Skelton and Manuel Pais.",
             "personal_note": " no personal note, only highlight.",
        },
    ]
