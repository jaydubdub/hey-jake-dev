<script lang="ts">
    import { fly } from 'svelte/transition';
    import type { ISkill } from '../../models/skill.model';
    import Skill from "./Skill.svelte";

    // Inputs
    export let skills: ISkill[];


    // Component operations
    let selectedSkill: ISkill;
    function setSkill(event: CustomEvent): void {
        const { skill }: { skill: ISkill } = event.detail;
        selectedSkill = skill;
    }
</script>

<div class="skill-list">
    <div class="flex flex-wrap">
        {#each skills as skill }
            <div in:fly={{ duration: 250, y: 15 }} out:fly={{ duration: 250, y: -15 }}>
                <Skill { skill } />
            </div>
        {/each}
    </div>
    <div class="h-3">
        {#if selectedSkill}
        <p class="mt-3 text-sm text-gray-300 h-2" transition:fly={{ duration: 250, y: -15 }}>
            <span class="font-semibold text-lime-400">{selectedSkill.name}</span> - {selectedSkill.description}
        </p>
        {/if}
    </div>
    
    
</div>
