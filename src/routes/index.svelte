<script lang="ts">
    import { cubicIn } from 'svelte/easing';
    import { fly } from 'svelte/transition';

    let startUp = false;

    function slidefade(node, params) {
        const existingTransform = getComputedStyle(node).transform.replace('none', '');

        return {
            delay: params.delay || 0,
            duration: params.duration || 400,
            easing: params.easing || cubicIn,
            css: (t, u) => `transform-origin: top left; transform: ${existingTransform} scaleY(${t}); opacity: ${t};`
        };
    }

    setTimeout(() => {
        startUp = true;
    }, 1000);


</script>

<div class="flex my-auto h-screen content-center items-center justify-center flex-col">
    {#if startUp}
    <h1 class="text-5xl font-sans font-bold mb-3 text-pink-500" transition:slidefade="{{ delay: 0 }}">Hello</h1>
    <h3 class="text-3xl font-sans font-extralight mb-3 text-pink-300" transition:fly="{{delay: 500, duration: 500, x: 100, opacity: 0 }}">tiny</h3>
    <h1 class="text-5xl font-sans font-bold mb-3" transition:fly="{{delay: 1000, duration: 700, x: -200, opacity: 0 }}">
        <span class="text-orange-200">M</span>
        <span class="text-orange-300">a</span>
        <span class="text-orange-400">n</span>
        <span class="text-orange-500">g</span>
        <span class="text-green-700">o</span>
    </h1>
    {/if}
    
</div>