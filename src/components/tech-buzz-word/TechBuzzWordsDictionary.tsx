import React from 'react';

export const PHP = 'PHP';
export const TYPESCRIPT = 'Typescript';
export const JAVASCRIPT = 'Javascript';
export const TERRAFORM = 'Terraform';
export const REACT = 'React'
export const SCSS = 'Sassy CSS';
export const HTML = 'HTML';


export const GITHUB_ACTION = 'GitHub Actions';
export const DOCKER = 'Docker';

interface TechBuzzWordScaffolding {
    name: string
}

export const TECHNOLOGIES: {[key:string] : TechBuzzWordScaffolding}  = {
    [TERRAFORM] : {
        'name': TERRAFORM,
    },
    [REACT] : {
        'name': REACT
    },
    [TYPESCRIPT] : {
        'name': TYPESCRIPT
    },
    [JAVASCRIPT] : {
        'name': JAVASCRIPT
    },
    [GITHUB_ACTION] : {
        'name': GITHUB_ACTION
    },
    [PHP] : {
        'name': PHP
    },
    [DOCKER] : {
        'name': DOCKER
    }
};