<script lang="ts">
	import demo from '$lib/demo.mp4';
</script>

<svelte:head>
	<title>Iced Homepage</title>
	<meta name="description" content="Iced Rust cross platform type safe performant GUI framework DirectX 12, DX12, Vulkan, Metal simple easy to use responsive batteries included API" />
</svelte:head>

<div class="mx-auto mt-16 flex flex-col items-center space-y-6 text-center">
	<div class="max-w-5xl text-4xl font-bold text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
		Build reliable cross-platform applications in <span class="text-red-500 dark:text-red-400">Rust</span>
	</div>
	<!-- <div class="max-w-3xl text-lg text-slate-600">Iced is Elm inspired with an easy-to-use batteries-included API, a type-safe reactive programming model, cross-platform compatibility for Linux, Windows, Mac, and the Web, modular components, and a performant architecture.</div> -->
	<div class="flex justify-center space-x-6">
		<a class="rounded-lg bg-sky-500 px-4 py-3 font-semibold text-white drop-shadow-2xl hover:bg-sky-400" href="https://docs.rs/iced/">Get Started</a>
		<a class="rounded-lg bg-slate-600 px-4 py-3 font-semibold text-white drop-shadow-2xl hover:bg-slate-500 dark:bg-slate-800 dark:hover:bg-slate-700" href="https://github.com/iced-rs/iced/">Contribute</a>
	</div>
</div>

<div class="mx-auto mt-16 grid max-w-7xl auto-cols-auto grid-cols-1 gap-6 fill-slate-700 text-center dark:fill-slate-200 sm:grid-cols-2 lg:grid-cols-4">
	<div class="flex flex-col">
		<svg height="100" viewBox="0 0 48 48"><path d="m17.3 45-3.8-6.5-7.55-1.55.85-7.35L2 24l4.8-5.55-.85-7.35 7.55-1.55L17.3 3 24 6.1 30.7 3l3.85 6.55 7.5 1.55-.85 7.35L46 24l-4.8 5.6.85 7.35-7.5 1.55L30.7 45 24 41.9Zm1.35-3.95L24 38.8l5.5 2.25 3.35-5 5.85-1.5-.6-5.95 4.05-4.6-4.05-4.7.6-5.95-5.85-1.4-3.45-5L24 9.2l-5.5-2.25-3.35 5-5.85 1.4.6 5.95L5.85 24l4.05 4.6-.6 6.05 5.85 1.4ZM24 24Zm-2.15 6.65L33.2 19.4l-2.25-2.05-9.1 9-4.75-4.95-2.3 2.25Z" /></svg>
		<div class="mb-4 text-4xl text-slate-700 dark:text-slate-100">Easy-to-use</div>
		Batteries-included API to get started quickly and create your own widgets easily.
	</div>
	<div class="flex flex-col">
		<svg height="100" viewBox="0 0 48 48"><path d="M11 44q-1.25 0-2.125-.875T8 41V19.3q0-1.25.875-2.125T11 16.3h3.5v-4.8q0-3.95 2.775-6.725Q20.05 2 24 2q3.95 0 6.725 2.775Q33.5 7.55 33.5 11.5v4.8H37q1.25 0 2.125.875T40 19.3V41q0 1.25-.875 2.125T37 44Zm0-3h26V19.3H11V41Zm13-7q1.6 0 2.725-1.1t1.125-2.65q0-1.5-1.125-2.725T24 26.3q-1.6 0-2.725 1.225T20.15 30.25q0 1.55 1.125 2.65Q22.4 34 24 34Zm-6.5-17.7h13v-4.8q0-2.7-1.9-4.6Q26.7 5 24 5q-2.7 0-4.6 1.9-1.9 1.9-1.9 4.6ZM11 41V19.3 41Z" /></svg>
		<div class="mb-4 text-4xl text-slate-700 dark:text-slate-100">Type-safe</div>
		Iced uses reactive programming model to ensure your UI is meaningful.
	</div>
	<div class="flex flex-col">
		<svg height="100" viewBox="0 0 48 48"><path d="M4 40v-4.5h4.3V11q0-1.25.875-2.125T11.3 8h31v3h-31v24.5H23V40Zm23.95 0q-.85 0-1.4-.675Q26 38.65 26 37.8V15.95q0-.85.55-1.4.55-.55 1.4-.55h13.6q.95 0 1.7.525T44 15.95V37.8q0 .95-.725 1.575T41.55 40ZM29 35.5h12V17H29Z" /></svg>
		<div class="mb-4 text-4xl text-slate-700 dark:text-slate-100">Cross-platform</div>
		Custom renderers for every context, from native to the web.
	</div>
	<div class="flex flex-col">
		<svg height="100" viewBox="0 0 48 48"><path d="M6 22.5V6h16.5v16.5ZM6 42V25.5h16.5V42Zm19.5-19.5V6H42v16.5Zm0 19.5V25.5H42V42ZM9 19.5h10.5V9H9Zm19.5 0H39V9H28.5Zm0 19.5H39V28.5H28.5ZM9 39h10.5V28.5H9Zm19.5-19.5Zm0 9Zm-9 0Zm0-9Z" /></svg>
		<div class="mb-4 text-4xl text-slate-700 dark:text-slate-100">Modular</div>
		Iced ecosystem is split into many different reusable parts.
	</div>
</div>

<div class="mx-auto mt-16 flex w-min max-w-full flex-col items-center lg:flex-row">
	<pre class="flex h-56 max-w-full overflow-auto rounded-xl bg-slate-800 drop-shadow-2xl">
<div class="hidden select-none pl-4 pr-8 text-right md:block">1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50</div>
<code class="text-white"
			><span class="text-blue-400">use</span> <span class="text-green-400">iced</span>::<span class="text-green-400">widget</span>::<span class="text-yellow-400">{`{`}</span><span class="text-yellow-200">button</span>, <span class="text-yellow-200">column</span>, <span class="text-yellow-200">text</span><span class="text-yellow-400">{`}`}</span>;
<span class="text-blue-400">use</span> <span class="text-green-400">iced</span>::<span class="text-yellow-400">{`{`}</span><span class="text-green-400">Alignment</span>, <span class="text-green-400">Element</span>, <span class="text-green-400">Sandbox</span>, <span class="text-green-400">Settings</span><span class="text-yellow-400">{`}`}</span>;

<span class="text-blue-400">pub fn</span> <span class="text-yellow-200">main</span><span class="text-yellow-400">()</span> -> <span class="text-green-400">iced</span>::<span class="text-green-400">Result</span> <span class="text-yellow-400">{`{`}</span>
	<span class="text-green-400">Counter</span>::<span class="text-yellow-200">run</span><span class="text-pink-400">(</span><span class="text-green-400">Settings</span>::<span class="text-blue-400"><span class="text-yellow-200">default</span>()</span><span class="text-pink-400">)</span>
<span class="text-yellow-400">{`}`}</span>

<span class="text-blue-400">struct</span> <span class="text-green-400">Counter</span> <span class="text-yellow-400">{`{`}</span>
    <span class="text-sky-200">value</span>: <span class="text-green-400">i32</span>,
<span class="text-yellow-400">{`}`}</span>

#<span class="text-yellow-400">[</span><span class="text-yellow-200">derive</span><span class="text-pink-400">(</span><span class="text-green-400">Debug</span>, <span class="text-green-400">Clone</span>, <span class="text-green-400">Copy</span><span class="text-pink-400">)</span><span class="text-yellow-400">]</span>
<span class="text-blue-400">enum</span> <span class="text-green-400">Message</span> <span class="text-yellow-400">{`{`}</span>
    <span class="text-sky-400">IncrementPressed</span>,
    <span class="text-sky-400">DecrementPressed</span>,
<span class="text-yellow-400">{`}`}</span>
	
<span class="text-blue-400">impl</span> <span class="text-green-400">Sandbox</span> <span class="text-blue-400">for</span> <span class="text-green-400">Counter</span> <span class="text-yellow-400">{`{`}</span>
    <span class="text-blue-400">type</span> <span class="text-green-400">Message</span> = <span class="text-green-400">Message</span>;

    <span class="text-blue-400">fn</span> <span class="text-yellow-200">new</span><span class="text-pink-400">()</span> -> <span class="text-blue-400">Self</span> <span class="text-pink-400">{`{`}</span>
        <span class="text-blue-400">Self</span> <span class="text-sky-500">{`{`}</span> <span class="text-sky-200">value</span>: <span class="text-green-200">0</span> <span class="text-sky-500">{`}`}</span>
    <span class="text-pink-400">{`}`}</span>

    <span class="text-blue-400">fn</span> <span class="text-yellow-200">title</span><span class="text-green-400"><span class="text-pink-400">(</span></span>&<span class="text-blue-400">self</span><span class="text-pink-400">)</span> -> <span class="text-green-400">String</span> <span class="text-pink-400">{`{`}</span>
        <span class="text-green-400">String</span>::<span class="text-yellow-200">from</span><span class="text-sky-500">(</span><span class="text-orange-400">"Counter - Iced"</span><span class="text-sky-500">)</span>
    <span class="text-pink-400">{`}`}</span>

    <span class="text-blue-400">fn</span> <span class="text-yellow-200">update</span><span class="text-pink-400">(</span>&<span class="text-blue-400">mut self</span>, <span class="text-sky-200">message</span>: <span class="text-green-400">Message</span><span class="text-pink-400">) {`{`}</span>
        <span class="text-fuchsia-400">match</span> <span class="text-sky-200">message</span> <span class="text-sky-500">{`{`}</span>
            <span class="text-green-400">Message</span>::<span class="text-sky-400">IncrementPressed</span> => <span class="text-yellow-400">{`{`}</span>
                <span class="text-blue-400">self</span>.<span class="text-sky-200">value</span> += <span class="text-green-200">1</span>;
            <span class="text-yellow-400">{`}`}</span>
            <span class="text-green-400">Message</span>::<span class="text-sky-400">DecrementPressed</span> => <span class="text-yellow-400">{`{`}</span>
                <span class="text-blue-400">self</span>.<span class="text-sky-200">value</span> -= <span class="text-green-200">1</span>;
            <span class="text-yellow-400">{`}`}</span>
        <span class="text-sky-500">{`}`}</span>
    <span class="text-pink-400">{`}`}</span>

    <span class="text-blue-400">fn</span> <span class="text-yellow-200">view</span><span class="text-pink-400">(</span>&<span class="text-blue-400">self</span><span class="text-pink-400">)</span> -> <span class="text-green-400">Element</span>{`<`}<span class="text-green-400">Message</span>{`>`} <span class="text-pink-400">{`{`}</span>
        <span class="text-blue-400">column!</span><span class="text-sky-500">[</span>
            <span class="text-yellow-200">button</span><span class="text-yellow-400">(</span><span class="text-orange-400">"Increment"</span><span class="text-yellow-400">)</span>.<span class="text-yellow-200">on_press</span><span class="text-yellow-400">(</span><span class="text-green-400">Message</span>::<span class="text-green-400">IncrementPressed</span><span class="text-yellow-400">)</span>,
            <span class="text-yellow-200">text</span><span class="text-yellow-400">(</span><span class="text-blue-400">self</span>.value<span class="text-yellow-400">)</span>.<span class="text-yellow-200">size</span><span class="text-yellow-400">(</span><span class="text-green-200">50</span><span class="text-yellow-400">)</span>,
            <span class="text-yellow-200">button</span><span class="text-yellow-400">(</span><span class="text-orange-400">"Decrement"</span><span class="text-yellow-400">)</span>.<span class="text-yellow-200">on_press</span><span class="text-yellow-400">(</span><span class="text-green-400">Message</span>::<span class="text-green-400">DecrementPressed</span><span class="text-yellow-400">)</span>
        <span class="text-sky-500">]</span>
        .<span class="text-yellow-200">padding</span><span class="text-sky-500">(</span><span class="text-green-200">20</span><span class="text-sky-500">)</span>
        .<span class="text-yellow-200">align_items</span><span class="text-sky-500">(</span><span class="text-green-400">Alignment</span>::<span class="text-sky-400">Center</span><span class="text-sky-500">)</span>
        .<span class="text-yellow-200">into</span><span class="text-sky-500">()</span>
    <span class="text-pink-400">{`}`}</span>
<span class="text-yellow-400">{`}`}</span>
</code>
</pre>
	<div class="m-10 w-[140px] overflow-hidden rounded-lg drop-shadow-2xl">
		<video loop autoplay controls>
			<source src={demo} />
			<track kind="captions" />
		</video>
	</div>
</div>
