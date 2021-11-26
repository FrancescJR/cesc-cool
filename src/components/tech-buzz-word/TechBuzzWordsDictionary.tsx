import React from 'react';

export const TERRAFORM = 'Terraform';
export const REACT = 'React'
export const TYPESCRIPT = 'Typescript';
export const PHP = 'PHP';
export const GITHUB_ACTION = 'GitHub Action';
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