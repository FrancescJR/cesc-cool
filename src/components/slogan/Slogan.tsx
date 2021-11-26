import React from 'react';
import './slogan.scss'

const  SLOGANS:string[]  = [
    'Made for you with ❤️ to dissect me like an open book.',
    'I\'m awesome when I\'m awesome and I suck when I suck.',
    'Working is as pleasant as it is not working.',
    'I\'m a hater with a big heart.',
    'Addicted to coffee.',
    'In Japan I realized that the worst thing you can do is to disturb/bother others.'+
    ' Sometimes I feel like I can\'t help but to annoy others just by my mere existence...',
    'Circumstances differentiate us more than genetics.',
    'You might have guessed I am more a backend guy than a frontend one...',
    'I get wrong often, I correct myself, not a big deal.'
];

export default function Slogan() {

    let sloganIndex = Math.floor(Math.random() * SLOGANS.length)

    return (

        <p className={'slogan-p'}>{SLOGANS[sloganIndex]}</p>
    );
}