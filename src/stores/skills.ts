import type { ISkill } from "src/models/skill.model";
import { type Readable, readable } from "svelte/store";
const skills: ISkill[] = [
    {
        name: 'Angular',
        icon: 'devicon-angularjs-plain',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'proficient'
    },
    {
        name: 'JavaScript',
        icon: 'devicon-javascript-plain',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'proficient'
    },
    {
        name: 'CSS',
        icon: 'devicon-css3-plain',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'proficient'
    },
    {
        name: 'HTML',
        icon: 'devicon-html5-plain',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'proficient'
    },
    {
        name: 'Node',
        icon: 'devicon-nodejs-plain-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'proficient'
    },
    {
        name: 'Storybook',
        icon: 'devicon-storybook-plain-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'proficient'
    },
    {
        name: 'Svelte',
        icon: 'devicon-svelte-plain-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'familiar'
    },
    {
        name: 'Express',
        icon: 'devicon-express-original-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'familiar'
    },
    {
        name: 'NestJS',
        icon: 'devicon-nestjs-plain-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'familiar'
    },
    {
        name: 'Tailwind',
        icon: 'devicon-tailwindcss-original-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'familiar'
    },
    {
        name: 'MongoDB',
        icon: 'devicon-mongodb-plain-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'familiar'
    },
    {
        name: 'MySQL',
        icon: 'devicon-mysql-plain-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'familiar'
    },
    {
        name: 'NPM',
        icon: 'devicon-npm-original-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'tool'
    },
    {
        name: 'Git',
        icon: 'devicon-git-plain-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'tool'
    },
    {
        name: 'GitHub',
        icon: 'devicon-github-original-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'tool'
    },
    {
        name: 'GitLab',
        icon: 'devicon-gitlab-plain-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'tool'
    },
    {
        name: 'VS Code',
        icon: 'devicon-vscode-plain-wordmark',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'tool'
    },
    {
        name: 'Figma',
        icon: 'devicon-figma-plain',
        description: 'A JavaScript framework developed by Google for building modern JS applications',
        type: 'tool'
    },
];

export const skillStore: Readable<ISkill[]> = readable(skills);