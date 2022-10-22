<script lang="ts">
	import 'prism-themes/themes/prism-vsc-dark-plus.css';
</script>

<article class="prose prose-slate @dark:prose-invert lg:text-lg mx-auto mt-10">
	<slot />
</article>

<style>
	:global(.icon-link) {
		position: relative;
	}
	:global(.icon-link::before) {
		content: '#';
		position: absolute;
		left: -1ch;
		top: 0;
		line-height: 1;
		opacity: 0;
		text-decoration: underline;
	}
	:global(:where(h1, h2, h3, h4, h5, h6):hover .icon-link::before) {
		opacity: 1;
	}
</style>
