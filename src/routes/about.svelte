<script lang="ts">
    import SkillList from "$lib/components/SkillList.svelte";
    import type { ISkill } from "src/models/skill.model";
    import { assets } from '$app/paths';

    let proficiencies: ISkill[] = [
        {
            name: 'Angular',
            icon: 'devicon-angularjs-plain',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'JavaScript',
            icon: 'devicon-javascript-plain',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'CSS',
            icon: 'devicon-css3-plain',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'HTML',
            icon: 'devicon-html5-plain',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'Node',
            icon: 'devicon-nodejs-plain-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'Storybook',
            icon: 'devicon-storybook-plain-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
    ];

    let familiarities: ISkill[] = [
        {
            name: 'Svelte',
            icon: 'devicon-svelte-plain-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'Express',
            icon: 'devicon-express-original-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'NestJS',
            icon: 'devicon-nestjs-plain-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'Tailwind',
            icon: 'devicon-tailwindcss-original-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'MongoDB',
            icon: 'devicon-mongodb-plain-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'MySQL',
            icon: 'devicon-mysql-plain-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        }
    ];

    let tools: ISkill[] = [
        {
            name: 'NPM',
            icon: 'devicon-npm-original-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'Git',
            icon: 'devicon-git-plain-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'GitHub',
            icon: 'devicon-github-original-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'GitLab',
            icon: 'devicon-gitlab-plain-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'VS Code',
            icon: 'devicon-vscode-plain-wordmark',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
        {
            name: 'Figma',
            icon: 'devicon-figma-plain',
            description: 'A JavaScript framework developed by Google for building modern JS applications'
        },
    ];

</script>

<section>
    <a href="/" class="inline-block mb-10">Go back</a>
    
    <div class="flex lg:flex-row flex-col">
        <div class="xl:w-1/2 lg:w-3/4 lg:mr-10">
            
            <h1 class="text-5xl font-sans font-bold mb-8 text-gray-300">About <span class="text-orange-600">Jake</span></h1>
            
            <p class="font-sans mb-8 text-gray-200">I'm a software engineer with nearly <span class="text-orange-300 font-bold text-xl">15 years</span> of experience across the web and mobile SDLC, ranging from start-ups to Fortune 500 enterprise teams.</p>

            <p class="font-sans mb-8 text-gray-200">I specialize in the <span class="text-orange-300 font-bold text-xl">Front End</span> but I can work across the entire stack.  I love working with UX and UI teams to create enjoyable experiences for the end user.</p>

            <p class="font-sans mb-8 text-gray-200">I've worked across a variety of fields including <span>Marketing</span>, <span>E-commerce</span>, <span>Industrial Services</span>, <span>Healthcare</span>, <span>and Finance</span>.</p>

            <p class="font-sans mb-5 text-gray-200">Snag my resume <a href="{assets}/resume_basic.pdf" rel="external" title="Download my resume">here</a>.</p>

            <p class="font-sans mb-5 text-gray-200">Best way to contact me at the moment is via <a href="https://www.linkedin.com/in/hey-jake/" title="Link to Jake's LinkedIn" rel="external">LinkedIn</a>.</p>

        </div>

        <div>
            <h3 class="font-semibold text-orange-600 text-3xl mb-4">Skills</h3>
            <div class="flex flex-col">

                <div class="mb-8">
                    <h5 class="font-semibold text-gray-300 text-xl">Proficient With</h5>
                    <div class="flex">
                        <SkillList skills={proficiencies} />
                    </div>
                </div>
                <div class="mb-8">
                    <h5 class="font-semibold text-gray-300 text-xl">Familiarity With</h5>
                    <div class="flex">
                        <SkillList skills={familiarities} />
                    </div>
                </div>
                
                <div class="mb-8">
                    <h5 class="font-semibold text-gray-300 text-xl">Tools</h5>
                    <div class="flex">
                        <SkillList skills={tools} />
                    </div>
                </div>
                

            </div>
        </div>
    </div>
    
</section>



<!-- <section class="grid grid-flow-row">
    <div class="col-span-1">
        <h3>Likes</h3>
        <ul class="list-none">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="col-span-1">
        <h3>Dislikes</h3>
    </div>
</section> -->
