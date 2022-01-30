<script lang="ts">
    import SkillList from "$lib/components/SkillList.svelte";
    import type { ISkill } from "src/models/skill.model";
    import { assets } from '$app/paths';
    import { skillStore } from '../stores/skills';


    let proficiencies: ISkill[];
    let familiarities: ISkill[];
    let tools: ISkill[];

    skillStore.subscribe(skills => {
        proficiencies = skills.filter(s => s.type === 'proficient');
        familiarities = skills.filter(s => s.type === 'familiar');
        tools = skills.filter(s => s.type === 'tool');
    });

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
