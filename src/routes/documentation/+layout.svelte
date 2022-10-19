<script lang="ts">
	import 'prism-themes/themes/prism-vsc-dark-plus.css';
</script>

<div class="flex">
	<nav class="mt-5 ml-5 font-bold text-slate-9 @dark:text-slate-1">
		<ul>
			<li><a href="/documentation/introduction">Introduction</a></li>
			<!-- <a href="/documentation/introduction">Getting Started</a> -->
		</ul>
	</nav>
	<article class="prose prose-slate @dark:prose-invert lg:text-lg mx-auto">
		<slot />
	</article>
</div>

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
