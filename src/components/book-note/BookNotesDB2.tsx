import {NoteScaffolding} from "./BookNotesDB1DDD_IN_PHP";

export const BOOK_IMPLEMENTING_DDD:  NoteScaffolding[] =
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

        }
]
