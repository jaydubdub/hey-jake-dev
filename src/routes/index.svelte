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

<div class="sm:mt-0 mt-20">
    <h1 class="text-5xl font-sans font-bold mb-5 text-orange-600 transition-all ease-in-out">Hey there.</h1>

    <h3 class="text-3xl font-sans mb-5 text-gray-200">My name is <span class="text-orange-300">Jake Whitney</span>.</h3>

    <h5 class="text-2xl font-sans mb-5 text-gray-200">I'm a <span class="text-orange-300">software engineer</span> working primarily in the <span class="text-orange-300">front end</span> of the web.</h5>

    <p class="font-sans mb-5 text-gray-200">It's a little bit sparse here at the moment but I promise I'll have more soon.</p>

    <p class="font-sans mb-5 text-gray-200">In the meantime, if you're curious, feel free to read a bit <a href="/about">about me</a>.</p>

    <p class="text-sm font-sans mb-5 text-gray-200">Otherwise feel free to check out my <a href="https://www.linkedin.com/in/hey-jake/" rel="external">LinkedIn</a>, <a href="https://github.com/jaydubdub" rel="external">GitHub</a>, or just grab my <a href="{assets}/resume_basic.pdf" rel="external">resume</a>.</p>

</div>