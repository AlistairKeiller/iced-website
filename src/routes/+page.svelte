<svelte:head>
	<title>Iced Homepage</title>
	<meta name="description" content="Iced: A cross platform type-safe blazingly fast performant reactive GUI framework written in Rust with support for DirectX 12, Vulkan, and Metal. It is simple andeasy to use because of its batteries included API." />
</svelte:head>

<div class="mt-16 flex flex-col space-y-6 items-center text-center">
	<div class="max-w-5xl text-4xl font-bold text-slate-9 @dark:text-slate-1 sm:text-5xl lg:text-6xl">
		Build reliable cross-platform applications in <span class="text-red-5 @dark:text-red-4">Rust</span>
	</div>
	<div class="flex justify-center space-x-6">
		<a class="rounded-lg bg-sky-5 px-4 py-3 font-semibold text-white drop-shadow-2xl hover:bg-sky-4" href="https://docs.rs/iced">Get Started</a>
		<a class="rounded-lg bg-slate-6 px-4 py-3 font-semibold text-white drop-shadow-2xl hover:bg-slate-5 @dark:bg-slate-8 @dark:hover:bg-slate-7" href="https://github.com/iced-rs/iced">Contribute</a>
	</div>
</div>

<div class="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 text-center text-slate-7 @dark:text-slate-2 sm:grid-cols-2 lg:grid-cols-4">
	<div class="flex flex-col items-center">
		<div class="i-material-symbols-verified-outline-rounded text-8xl" />
		<div class="text-4xl">Easy to use</div>
		<div class="mt-4 text-slate-5 @dark:text-slate-4">Batteries-included API to get started quickly and create your own widgets easily.</div>
	</div>
	<div class="flex flex-col items-center">
		<div class="i-material-symbols-lock-outline text-8xl" />
		<div class="text-4xl">Type-safe</div>
		<div class="mt-4 text-slate-5 @dark:text-slate-4">Iced uses reactive programming model to ensure your UI is meaningful.</div>
	</div>
	<div class="flex flex-col items-center">
		<div class="i-material-symbols-devices-rounded text-8xl" />
		<div class="text-4xl">Cross-platform</div>
		<div class="mt-4 text-slate-5 @dark:text-slate-4">Custom renderers for every context, from native to the web.</div>
	</div>
	<div class="flex flex-col items-center">
		<div class="i-material-symbols-grid-view-outline-rounded text-8xl" />
		<div class="text-4xl">Modular</div>
		<div class="mt-4 text-slate-5 @dark:text-slate-4">Iced ecosystem is split into many different reusable parts.</div>
	</div>
</div>

<div class="mx-auto mt-16 flex w-min max-w-full flex-col items-center lg:flex-row">
	<pre class="flex h-96 max-w-full overflow-auto rounded-lg bg-slate-8 drop-shadow-2xl">
<div class="hidden select-none pl-4 pr-8 text-right md:block text-slate-4">1
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
			><span class="text-blue-4">use</span> <span class="text-green-4">iced</span>::<span class="text-green-4">widget</span>::<span class="text-yellow-4">{`{`}</span><span class="text-yellow-2">button</span>, <span class="text-yellow-2">column</span>, <span class="text-yellow-2">text</span><span class="text-yellow-4">{`}`}</span>;
<span class="text-blue-4">use</span> <span class="text-green-4">iced</span>::<span class="text-yellow-4">{`{`}</span><span class="text-green-4">Alignment</span>, <span class="text-green-4">Element</span>, <span class="text-green-4">Sandbox</span>, <span class="text-green-4">Settings</span><span class="text-yellow-4">{`}`}</span>;

<span class="text-blue-4">pub fn</span> <span class="text-yellow-2">main</span><span class="text-yellow-4">()</span> -> <span class="text-green-4">iced</span>::<span class="text-green-4">Result</span> <span class="text-yellow-4">{`{`}</span>
	<span class="text-green-4">Counter</span>::<span class="text-yellow-2">run</span><span class="text-pink-4">(</span><span class="text-green-4">Settings</span>::<span class="text-blue-4"><span class="text-yellow-2">default</span>()</span><span class="text-pink-4">)</span>
<span class="text-yellow-4">{`}`}</span>

<span class="text-blue-4">struct</span> <span class="text-green-4">Counter</span> <span class="text-yellow-4">{`{`}</span>
    <span class="text-sky-2">value</span>: <span class="text-green-4">i32</span>,
<span class="text-yellow-4">{`}`}</span>

#<span class="text-yellow-4">[</span><span class="text-yellow-2">derive</span><span class="text-pink-4">(</span><span class="text-green-4">Debug</span>, <span class="text-green-4">Clone</span>, <span class="text-green-4">Copy</span><span class="text-pink-4">)</span><span class="text-yellow-4">]</span>
<span class="text-blue-4">enum</span> <span class="text-green-4">Message</span> <span class="text-yellow-4">{`{`}</span>
    <span class="text-sky-4">IncrementPressed</span>,
    <span class="text-sky-4">DecrementPressed</span>,
<span class="text-yellow-4">{`}`}</span>
	
<span class="text-blue-4">impl</span> <span class="text-green-4">Sandbox</span> <span class="text-blue-4">for</span> <span class="text-green-4">Counter</span> <span class="text-yellow-4">{`{`}</span>
    <span class="text-blue-4">type</span> <span class="text-green-4">Message</span> = <span class="text-green-4">Message</span>;

    <span class="text-blue-4">fn</span> <span class="text-yellow-2">new</span><span class="text-pink-4">()</span> -> <span class="text-blue-4">Self</span> <span class="text-pink-4">{`{`}</span>
        <span class="text-blue-4">Self</span> <span class="text-sky-5">{`{`}</span> <span class="text-sky-2">value</span>: <span class="text-green-2">0</span> <span class="text-sky-5">{`}`}</span>
    <span class="text-pink-4">{`}`}</span>

    <span class="text-blue-4">fn</span> <span class="text-yellow-2">title</span><span class="text-green-4"><span class="text-pink-4">(</span></span>&<span class="text-blue-4">self</span><span class="text-pink-4">)</span> -> <span class="text-green-4">String</span> <span class="text-pink-4">{`{`}</span>
        <span class="text-green-4">String</span>::<span class="text-yellow-2">from</span><span class="text-sky-5">(</span><span class="text-orange-4">"Counter - Iced"</span><span class="text-sky-5">)</span>
    <span class="text-pink-4">{`}`}</span>

    <span class="text-blue-4">fn</span> <span class="text-yellow-2">update</span><span class="text-pink-4">(</span>&<span class="text-blue-4">mut self</span>, <span class="text-sky-2">message</span>: <span class="text-green-4">Message</span><span class="text-pink-4">) {`{`}</span>
        <span class="text-fuchsia-4">match</span> <span class="text-sky-2">message</span> <span class="text-sky-5">{`{`}</span>
            <span class="text-green-4">Message</span>::<span class="text-sky-4">IncrementPressed</span> => <span class="text-yellow-4">{`{`}</span>
                <span class="text-blue-4">self</span>.<span class="text-sky-2">value</span> += <span class="text-green-2">1</span>;
            <span class="text-yellow-4">{`}`}</span>
            <span class="text-green-4">Message</span>::<span class="text-sky-4">DecrementPressed</span> => <span class="text-yellow-4">{`{`}</span>
                <span class="text-blue-4">self</span>.<span class="text-sky-2">value</span> -= <span class="text-green-2">1</span>;
            <span class="text-yellow-4">{`}`}</span>
        <span class="text-sky-5">{`}`}</span>
    <span class="text-pink-4">{`}`}</span>

    <span class="text-blue-4">fn</span> <span class="text-yellow-2">view</span><span class="text-pink-4">(</span>&<span class="text-blue-4">self</span><span class="text-pink-4">)</span> -> <span class="text-green-4">Element</span>{`<`}<span class="text-green-4">Message</span>{`>`} <span class="text-pink-4">{`{`}</span>
        <span class="text-blue-4">column!</span><span class="text-sky-5">[</span>
            <span class="text-yellow-2">button</span><span class="text-yellow-4">(</span><span class="text-orange-4">"Increment"</span><span class="text-yellow-4">)</span>.<span class="text-yellow-2">on_press</span><span class="text-yellow-4">(</span><span class="text-green-4">Message</span>::<span class="text-green-4">IncrementPressed</span><span class="text-yellow-4">)</span>,
            <span class="text-yellow-2">text</span><span class="text-yellow-4">(</span><span class="text-blue-4">self</span>.value<span class="text-yellow-4">)</span>.<span class="text-yellow-2">size</span><span class="text-yellow-4">(</span><span class="text-green-2">50</span><span class="text-yellow-4">)</span>,
            <span class="text-yellow-2">button</span><span class="text-yellow-4">(</span><span class="text-orange-4">"Decrement"</span><span class="text-yellow-4">)</span>.<span class="text-yellow-2">on_press</span><span class="text-yellow-4">(</span><span class="text-green-4">Message</span>::<span class="text-green-4">DecrementPressed</span><span class="text-yellow-4">)</span>
        <span class="text-sky-5">]</span>
        .<span class="text-yellow-2">padding</span><span class="text-sky-5">(</span><span class="text-green-2">20</span><span class="text-sky-5">)</span>
        .<span class="text-yellow-2">align_items</span><span class="text-sky-5">(</span><span class="text-green-4">Alignment</span>::<span class="text-sky-4">Center</span><span class="text-sky-5">)</span>
        .<span class="text-yellow-2">into</span><span class="text-sky-5">()</span>
    <span class="text-pink-4">{`}`}</span>
<span class="text-yellow-4">{`}`}</span>
</code>
</pre>
</div>
