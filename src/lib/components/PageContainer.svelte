<script>
	import { backIn } from 'svelte/easing';

	import { slide } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<div in:slide={{ duration: 500, delay: 550 }} out:slide={{ duration: 500, easing: backIn }}>
		<slot />
	</div>
{/key}
