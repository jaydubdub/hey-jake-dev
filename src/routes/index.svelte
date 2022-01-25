<script lang="ts">
    import { assets } from '$app/paths';
    import { cubicIn } from 'svelte/easing';
    import { fly } from 'svelte/transition';

    let startUp = false;

    function slidefade(node, params) {
        const existingTransform = getComputedStyle(node).transform.replace('none', '');

        return {
            delay: params.delay || 0,
            duration: params.duration || 400,
            easing: params.easing || cubicIn,
            css: (t, u) => `transform-origin: bottom left; transform: ${existingTransform} scaleY(${t}); opacity: ${t};`
        };
    }

    setTimeout(() => {
        startUp = true;
    }, 1000);


</script>

<div>
    <h1 class="text-5xl font-sans font-bold mb-5 text-orange-600 transition-all ease-in-out">Hey there.</h1>
    <h3 class="text-2xl font-sans mb-5 text-gray-200">Kinda bare bones here at the moment.</h3>

    <h3 class="text-xl font-sans mb-5 text-gray-200">I promise I'll have more soon.</h3>

    <p class="font-sans mb-5 text-gray-200">In the meantime, if you're curious, feel free to read a bit <a href="/about">about me</a>.</p>

    <p class="text-sm font-sans mb-5 text-gray-200">Otherwise feel free to check out my <a href="https://www.linkedin.com/in/hey-jake/" rel="external">LinkedIn</a>, <a href="https://github.com/jaydubdub" rel="external">GitHub</a>, or just grab my <a href="{assets}/resume_basic.pdf" rel="external">resume</a>.</p>

</div>