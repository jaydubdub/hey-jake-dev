<script context="module">
    export const load = async ({ url }) => ({
        props: {
            key: url,
        },
    });
</script>

<script lang="ts">
    import '../tailwind.css';
    import '../global.css';
    import PageContainer from "$lib/components/PageContainer.svelte"
    export let key!: string;
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css">
    <title>HeyJake.dev - Jake Whitney</title>
</svelte:head>

<div class="flex my-auto h-screen content-center items-center justify-center flex-col bg-slate-800">
    <div class="xl:w-2/3lg:w-3/4 sm:w-2/3 sm:p-4 w-full p-3">
        <PageContainer refresh={key}>
            <slot/>
        </PageContainer>
    </div>
    <p class="text-slate-400 text-xs absolute bottom-0 mb-5 text-center mx-1/2">Crafted with <a href="https://kit.svelte.dev/" target="_blank" rel="external">SvelteKit</a> and <a href="https://tailwindcss.com/" target="_blank" rel="external">Tailwind CSS</a>.  Happily hosted on <a href="https://www.netlify.com" target="_blank" rel="external">Netlify</a>.</p>
</div>