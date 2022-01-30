<script lang="ts">
import { onMount } from 'svelte';

    import { fly } from 'svelte/transition';
    import type { ISkill } from '../../models/skill.model';
    import Skill from "./Skill.svelte";

    // Inputs
    export let skills: ISkill[];

    let showSkills: boolean = false;

    // Lifecycle
    onMount(() => {
        setTimeout(() => {
            showSkills = true;
        }, 500)
        
        return () => { showSkills = false };
    });


    // Component operations
    let selectedSkill: ISkill;
    function setSkill(event: CustomEvent): void {
        const { skill }: { skill: ISkill } = event.detail;
        selectedSkill = skill;
    }
</script>

<div class="skill-list">
    {#if skills.length && showSkills}
    <div class="flex flex-wrap">
        {#each skills as skill, i }
            <div in:fly={{ delay: 30 * i, duration: 500, y: 25, opacity: 0 }} out:fly={{ duration: 250, y: -15 }}>
                <Skill { skill } />
            </div>
        {/each}
    </div> 
    {/if}
    
    <!-- <div class="h-3">
        {#if selectedSkill}
        <p class="mt-3 text-sm text-gray-300 h-2" transition:fly={{ duration: 250, y: -15 }}>
            <span class="font-semibold text-lime-400">{selectedSkill.name}</span> - {selectedSkill.description}
        </p>
        {/if}
    </div> -->
    
    
</div>
