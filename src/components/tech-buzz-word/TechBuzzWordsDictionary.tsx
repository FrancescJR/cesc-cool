export const PHP = 'PHP';
export const TYPESCRIPT = 'Typescript';
export const JAVASCRIPT = 'Javascript';
export const TERRAFORM = 'Terraform';
export const REACT = 'React'
export const SCSS = 'Sassy CSS';
export const HTML = 'HTML';
export const SYMFONY = 'Symfony';
export const LARAVEL = 'Laravel';
export const GIT = 'Git'
export const ANSIBLE = 'Ansible';
export const AWS ='AWS';
export const MARIA_DB = 'MariaDB';
export const POSTGRESQL = 'PostGreSQL';
export const MYSQL = 'MySQL';
export const DRUPAL = 'Drupal';
export const SEO = 'SEO';
export const SERVERLESS = 'Serverless';
export const ELASTIC_SEARCH = 'Elastic Search';
export const KIBANA = 'Kibana';
export const LOGSTASH = 'Logstash';
export const NGINX = 'Nginx';
export const PYTHON = 'Python';
export const LOVE_2D = 'Love2D';
export const VARNISH = 'Varnish';
export const LUA = 'Lua';
export const UNITY = 'Unity';
export const CSHARP = 'C#';
export const DYNAMODB = 'DynamoDB';
export const AWS_ALB = 'AWS ALB';
export const AWS_AURORA = 'AWS Aurora';
export const AWS_RDS = 'AWS RDS';
export const AWS_EC2 = 'AWS EC2';
export const AWS_ECS = 'AWS ECS';
export const AWS_LAMBDA = 'AWS Lambda';
export const AWS_SG = 'AWS Security Groups';
export const AWS_SNS = 'AWS SNS';
export const AWS_SQS = 'AWS SQS';
export const AWS_VPC = 'AWS VPC';
export const REDIS = 'Redis';
export const RabbitMQ = 'RabbitMQ';
export const KUBERNETES = 'Kubernetes';
export const DDD = 'Domain Driven Design';
export const CQRS = 'CQRS';
export const EVENT_SOURCING = 'Event Sourcing';
export const HEX_ARC = 'Hexagonal Architecture';
export const WORDPRESS = 'Wordpress';
export const GO = 'GoLang';
export const RUST = 'Rust';
export const BASH = 'Bash Script';
export const SSH = 'SSH'
export const GITHUB_ACTION = 'GitHub Actions';
export const CI_CD = 'CI/CD';
export const DOCKER = 'Docker';
export const JENKINS = 'Jenkins';
export const AWS_WILDCARD = 'AWS services';
export const PHP_CMS_WILDCARD = 'The rest of CMS';
export const PHP_UNIT = 'PHP unit';
export const VAGRANT = 'Vagrant';
export const LINUX_SYSADMIN = 'Sysadmin for Linux';
export const ARTICUNO = 'Articuno';
export const ZAPDOS = 'Zapdos';
export const MOLTRES = 'Moltres';
export const SNORLAX = 'Snorlax';
export const SQUIRTLE = 'Squirtle';
export const JOLTEON = 'Jolteon';

export interface TechBuzzWordScaffolding {
    name: string,
    level: number,
    experience_description: string
}

export const TECHNOLOGIES: {[key:string] : TechBuzzWordScaffolding}  = {
    [PHP] : {
        'name': PHP,
        'level': 5,
        'experience_description': '12 years of experience and counting. It\'s the language I feel more comfortable with,' +
            'but that doesn\'t mean is my favourite. Really happy with the version 8.',
    },
    [PHP_UNIT] : {
        'name': PHP_UNIT,
        'level': 4,
        'experience_description': 'If I can, I start with the tests. I\'m lately realizing that I could improve a little bit' +
            ' the way I\'ve been testing.'
    },
    [SYMFONY] : {
        'name': SYMFONY,
        'level': 5,
        'experience_description': 'Almost the same experience as I have with PHP. Unfortunately I have not been at the' +
            'latest and Symfony 6 is being released and I still need to learn the improvements of the 5!.'
    },
    [LARAVEL] : {
        'name': LARAVEL,
        'level': 4,
        'experience_description': 'A lost of experience recently with cmrad. I don\'t know all the insides' +
            'but I jumped in so deep that I feel quite comfortable now with it. Especially the backend side.' +
            'Laravel has also frontend side which I mainly ignore. Laravel is good for prototype but quite' +
            'but for everything else. Laravel users, use Lumen for god\'s sake, but above all, ditch eloquent!' +
            'Eloquent is plainly an antipattern in itself being an active record ORM and not a data Mapper.'
    },
    [TYPESCRIPT] : {
        'name': TYPESCRIPT,
        'level': 3,
        'experience_description': 'Javascript is basically suicide. So many things can go wrong. After a couple of hours on my' +
            'first React project I had to googlt how to strong Type Javascript and I discovered Typescript. I know it\'s Microsoft' +
            ' but it\'s indeed a good invention.'
    },
    [JAVASCRIPT] : {
        'name': JAVASCRIPT,
        'level': 3,
        'experience_description': 'If I can, I\'ll always use Typescript instead. Anyway Typescript doesn' +
            '\'t solve some basic issues Javascript has like arrays treatment. (I will publish eventually, Array constructor is basically bugged!).'
    },
    [TERRAFORM] : {
        'name': TERRAFORM,
        'level': 4,
        'experience_description': 'The whole infra at Xceed is IaC with Terraform. Admitedly I haven\'t done it only by myself' +
            'It has been extended and upgraded mainly by our amazing DevOps we had at Xceed. In any case, I\'d say I\'m proficient.'
    },
    [ANSIBLE] : {
        'name': ANSIBLE,
        'level': 3,
        'experience_description': 'Basic usage is very simple and I really doubt there\'s more than this basic usage for 99% of the cases.'
    },
    [REACT] : {
        'name': REACT,
        'level': 3,
        'experience_description': 'This very site is done in REACT with some typical components like the react-routing. I' +
            '\'m still kind of at the beginning of learning it, haven\'t event used Redux or other typical things frontends do.' +
            'But I don\'t feel I\'m in trouble, it\'s quite a pleasant tech to use.'
    },

    [SCSS] : {
        'name': SCSS,
        'level': 3,
        'experience_description': 'Ah that I have to put that, well, is for recruiters so they can cross on their requirements' +
            'checklist... I just wonder if I put a 3 out of 5 if that will make a check or not. For more clarification. Sassy CSS' +
            'is quite new to me, but after all is a better CSS (like Typescript is to Javascript), and I always did what I wanted to do with CSS.'
    },
    [GITHUB_ACTION] : {
        'name': GITHUB_ACTION,
        'level': 3,
        'experience_description': 'You can see on the projects page I did one... It doesn\'t differ much from an actual' +
            'ansible playbook...'
    },

    [DOCKER] : {
        'name': DOCKER,
        'level': 4,
        'experience_description': 'Using Docker for quite some years now. Creating my own Dockerfiles for some time but there' +
            'are some advanced and latest features that I don\'t control much.'
    },

    [GIT] : {
        'name': GIT,
        'level': 5,
        'experience_description': 'I normally give help to others on GIT commands etc. I always dodged and GUI interface of ' +
            'it and I think that makes a difference understanding what you are really doing.'
    },
    [CI_CD] : {
        'name': CI_CD,
        'level': 3,
        'experience_description': 'It\'s maybe the most complicating part of devops, so easy to reach to metaprogramming.' +
            'I have to admit that I am missing some lectures about it.'
    },
    [AWS] : {
        'name': AWS,
        'level': 5,
        'experience_description': 'I have my personal account. My business has it\'s account. The whole infra of Xceed' +
            'was in AWS, the same in Zinio. That doens\'t mean I know it all... but a lot.'
    },
    [MARIA_DB] : {
        'name': MARIA_DB,
        'level': 5,
        'experience_description': 'See MySQL for God\'s sake'
    },
    [MOLTRES] : {
        'name': MOLTRES,
        'level': 3,
        'experience_description': 'You found another pokemon!'
    },
    [MYSQL] : {
        'name': MYSQL,
        'level': 5,
        'experience_description': 'See MariaDB xD. I\'d say all backends are very proficient about that, maybe there\'s some' +
            'caveat about some DB engine that we might be unaware, but that would be all.'
    },
    [POSTGRESQL] : {
        'name': POSTGRESQL,
        'level': 4,
        'experience_description': 'So... another relational DB, see MySQL. Lately using PostGre more often than MariaDB.'
    },
    [REDIS] : {
        'name': REDIS,
        'level': 5,
        'experience_description': 'Xceed relied on redis a lot. Where I am now not that much -infra is costly-. But I think' +
            'it\'s a very simple to use tech and I have no trouble with it.'
    },
    [DYNAMODB] : {
        'name': DYNAMODB,
        'level': 4,
        'experience_description': 'AWS thingy for a document DB. Lately using it quite a lot. Like really, recruiters, if' +
            'you have to check "DynamoDB" as per the job description, your job description is just weird.'
    },
    [ELASTIC_SEARCH] : {
        'name': ELASTIC_SEARCH,
        'level': 4,
        'experience_description': 'I have some experience with it, developed features/debug stuff using ES for both Xceed' +
            'and Zinio. But for one, I think it\'s documentation sucks. You never find what you\'re looking for.'
    },
    [LOGSTASH] : {
        'name': LOGSTASH,
        'level': 3,
        'experience_description': 'Not much secret to it. Configuration files and so on. Not an expert hough either.'
    },
    [KIBANA] : {
        'name': KIBANA,
        'level': 4,
        'experience_description': 'Well I\'m good using it. Configuring and debugging it. Might it e I always go to the bottom of the issue.'
    },
    [NGINX] : {
        'name': NGINX,
        'level': 4,
        'experience_description': 'I used to have my own custom nginx configuration files, but slowly I\'ve been starting' +
            'to rely to default configurations etc. I can fix issues, but I haven\'t seen any issue recently to be frank.'
    },
    [ZAPDOS] : {
        'name': ZAPDOS,
        'level': 3,
        'experience_description': 'You found another pokemon!'
    },
    [AWS_VPC] : {
        'name': AWS_VPC,
        'level': 4,
        'experience_description': 'One of the services of AWS that I know how it works.'
    },
    [AWS_SG] : {
        'name': AWS_SG,
        'level': 4,
        'experience_description': 'To add another AWS service that I use to work with, not that by itself makes much sense.' +
            'But this whole skills page doesn\'t make sense either.'
    },
    [AWS_ALB] : {
        'name': AWS_ALB,
        'level': 4,
        'experience_description': 'See AWS Security group for example.'
    },
    [AWS_EC2] : {
        'name': AWS_EC2,
        'level': 4,
        'experience_description': 'There was a time I created my own AMIs to use for the EC2, when Docker wasn\'t used.'
    },
    [AWS_ECS] : {
        'name': AWS_ECS,
        'level': 4,
        'experience_description': 'Both Zinio and Xceed use ECS for it\'s production. One of them have it configured better' +
            'than the other.'
    },
    [KUBERNETES] : {
        'name': KUBERNETES,
        'level': 0,
        'experience_description': 'A shame, I have no idea, well a little bit, but I\'m a beginner. Knowing me I\'ll ' +
            'probably know more than many as soon as I start to use it for real.'
    },
    [SNORLAX] : {
        'name': SNORLAX,
        'level': 3,
        'experience_description': 'You found another pokemon!'
    },
    [AWS_RDS] : {
        'name': AWS_RDS,
        'level': 4,
        'experience_description': 'Well, just see MySQL'
    },
    [AWS_AURORA] : {
        'name': AWS_AURORA,
        'level': 4,
        'experience_description': 'Just see AWS RDS :D'
    },
    [ARTICUNO] : {
        'name': ARTICUNO,
        'level': 3,
        'experience_description': 'Yes! you just found a Pokemon!'
    },
    [BASH] : {
        'name': BASH,
        'level': 4,
        'experience_description': 'Not very comfortable to program with bash scripting, but quite used to it.'
    },
    [SQUIRTLE] : {
        'name': SQUIRTLE,
        'level': 3,
        'experience_description': 'You found another pokemon!'
    },
    [UNITY] : {
        'name': UNITY,
        'level': 1,
        'experience_description': 'Just a 1 now, check in some months!'
    },
    [VARNISH] : {
        'name': VARNISH,
        'level': 2,
        'experience_description': 'I used to deal with Varnish, but not being able to use it with http was a deal breaker' +
            'until it wasn\'t for private networks, but all of those caches... invalidation is always a nightmare.'
    },
    [VAGRANT] : {
        'name': VAGRANT,
        'level': 3,
        'experience_description': 'Lately not using it much. It got replaced by Docker.'
    },
    [LUA] : {
        'name': LUA,
        'level': 4,
        'experience_description': 'I did some computer games with Lua, which btw is the language to configure routines' +
            'in Varnish. Something very annoying that has Lua is the object oriented programming, but it\'s doable.'
    },
    [CSHARP] : {
        'name': CSHARP,
        'level': 2,
        'experience_description': 'Together with Unity, check back soon. Another microsoft thingy, I start to like what they do.'
    },
    [PYTHON] : {
        'name': PYTHON,
        'level': 3,
        'experience_description': 'That is more or less my second most comfortable language, well no, Bash scripting would be it.'
    },
    [DDD] : {
        'name': DDD,
        'level': 5,
        'experience_description': 'Just see the books I read. Not that I know all of them by heart, but almost... Enough' +
            ' to know what to do in almost any situation.'
    },
    [CQRS] : {
        'name': CQRS,
        'level': 4,
        'experience_description': 'I still need to have that in production, but I have read now enough books and seen' +
            'enough that I feel confident about it. I can even decide whether I want to use together with ES or not.' +
            'This is an email I sent to myself while working with a Rust CQRS project of mine trying to mix together' +
            'the book from Garofolo, the cqrs-rust docs and what I\'ve seen prior:' +
            'I like the command in the domain;\n' +
            'An aggregate +a command souls emit xx events. -> that\'s the Component part... Mmmh the whole thing is the component. ( Init with empty state, load from all the events, domain That has applyXXevent) The app is what I don\'t do for as long as I don\'t persist the commands... Too much infra... So synchronous command to componen.' +
            'On the query side yes I\'ll have the app.' +
            'I need the aggregator part, i should call it aggregator...\n' +
            '\n' +
            'Final word m this is event sourcing as truth of source. I can still have cqrs without event sourcing, I just need the aggregator, commands fire domain events, no need to save em, (better if i do though) and an aggregator that creates/generares the views... Aggregators can also live in a complete different infra (the same as the apps). Dispatching or polling, polling is better so you can start from the event 0...\n' +
            '\n' +
            'Thinking then why ES is at all necessary. For pijadas like get the state of the aggregate at that point in time, but that can also be implemented independently. Can I execute a command without loading via ES, just by quering the aggregate like always?... Yes, you just need to have a "regular" db which you\'ll probably have as the view will be like that'

    },
    [EVENT_SOURCING] : {
        'name': EVENT_SOURCING,
        'level': 4,
        'experience_description': 'Same as CQRS, but well, by default there are no projections here, so it\'s easier!' +
            '.. depending on the book you read. For some people, projections are actually the result of the aggregate ' +
            'after applying all of its events.'
    },
    [HEX_ARC] : {
        'name': HEX_ARC,
        'level': 5,
        'experience_description': 'Basically I can not develop in another paradigm that is not ports and adapters. ' +
            'I get quite amazed how many repos though, especially on the "new" programming languages such as RUST or Typescript' +
            'do not even mention this architecture, but they do speak about domain driven design... I am making an effort' +
            ' to apply this in Rust backend projects I am doing.'
    },
    [LOVE_2D] : {
        'name': LOVE_2D,
        'level': 4,
        'experience_description': 'The computer games I did with Lua, were using the Love2d framework. Give me an update' +
            'function and I\'ll change the world.'
    },
    [JOLTEON] : {
        'name': JOLTEON,
        'level': 3,
        'experience_description': 'You found another pokemon!'
    },
    [DRUPAL] : {
        'name': DRUPAL,
        'level': 4,
        'experience_description': 'If I can, I don\'t want to see it again.'
    },
    [WORDPRESS] : {
        'name': WORDPRESS,
        'level': 4,
        'experience_description': 'Same feeling as with Drupal, but way stronger. At least Drupal has like some' +
            ' quality standard, on Wordpress, it\'s a jungle.'
    },
    [AWS_SQS] : {
        'name': AWS_SQS,
        'level': 4,
        'experience_description': 'The queue system of choice on the last company. I\'d say it\'s easier to understand' +
            'than Rabbit.'
    },
    [AWS_SNS] : {
        'name': AWS_SNS,
        'level': 4,
        'experience_description': 'The event publishes system of choice on the old company. Easy to understand.'
    },
    [RabbitMQ] : {
        'name': RabbitMQ,
        'level': 3,
        'experience_description': 'The queue system of choice on the current company. Professional experience.'
    },
    [AWS_LAMBDA] : {
        'name': AWS_LAMBDA,
        'level': 4,
        'experience_description': 'Working with them quite often. Tomorrow I' +
            '\'ll be a 4.'
    },
    [SERVERLESS] : {
        'name': SERVERLESS,
        'level': 3,
        'experience_description': 'Darling, there is no such thing as serverless. When you see something' +
            'serverless, like a lambda, it is nothing more than a docker with an Nginx installed. But see Lambdas.'
    },
    [SEO] : {
        'name': SEO,
        'level': 1,
        'experience_description': 'I know the content is important. I know the advice some companies gave me. Not more.'
    },
    [HTML] : {
        'name': HTML,
        'level': 5,
        'experience_description': 'Well... this is like asking, do you know how to multiply numbers?' +
            'And do you know how to multiply 9 by any other number? So well '
    },
    [GO] : {
        'name': GO,
        'level': 1,
        'experience_description': 'I guess I\'ll know more when I start testing my terraform modules with that.' +
            'I am planning to have one of my repos on rust to port them in Go too.'
    },
    [RUST] : {
        'name': RUST,
        'level': 3,
        'experience_description': 'Getting better, still I am missing the "philosophy" and trying to us hierarchy and ' +
            'others things that are not in rust paradigm, and probably I am misusing traits, but hang in there. I am ' +
            'probably one of the few people that use DDD patterns in rust.'
    },
    [SSH] : {
        'name': SSH,
        'level': 5,
        'experience_description': 'I decided to put SSH to remark that I am quite skilled just about this specific command...'
    },
    [JENKINS] : {
        'name': JENKINS,
        'level': 3,
        'experience_description': 'I prefer any other kind of CiCD, even bitbutcket pipelines. But I used Jenkins' +
            ' at Xceed and it wasn\'t that bad.'
    },
    [AWS_WILDCARD] : {
        'name': AWS_WILDCARD,
        'level': 5,
        'experience_description': 'See AWS.'
    },
    [LINUX_SYSADMIN] : {
        'name': LINUX_SYSADMIN,
        'level': 4,
        'experience_description': 'Just related with Bash scripting, docker, ssh, etc. I feel very comfortable with ' +
            'Linux based OS and I normally customize them at my liking.'
    },
    [PHP_CMS_WILDCARD] : {
        'name': PHP_CMS_WILDCARD,
        'level': 2,
        'experience_description': 'Well, here would be Joomly, and Magento, and prestashop, and all of the things' +
            ' that be definition break DDD since it\'s infra coupled all the way to the domain and the source' +
            ' of all the frustration of devs. Because never never never a vanilla out of the box XXX is what' +
            ' the client wants at the end.'
    },
};