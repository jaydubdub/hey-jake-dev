<script lang="ts">
import { createEventDispatcher } from 'svelte';

    import type { ISkill } from '../../models/skill.model';
    export let skill: ISkill;

    const dispatch = createEventDispatcher();

    const emitHover = (event: Event) => {
        dispatch('skillHover', { skill });
    }

    const exitHover = (event: Event) => {
        dispatch('skillExit', { skill });
    }

    function onFocus() {
        // console.log('hi')
    }
</script>
<div class="flex justify-center items-center bg-slate-700 p-2 m-1 group hover:scale-150 hover:bg-orange-300 hover:z-10 transition-transform duration-200 ease-in-out relative" on:mouseenter={emitHover} on:mouseleave={exitHover} on:focus={onFocus}>
    <i class="{skill.icon} text-5xl text-orange-300 group-hover:text-slate-800"></i>
</div>