<!-- <script context="module">
	const prerender=true
	// @ts-ignore
	export async function load({ fetch }) {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos');
		let json;
		if (res.ok) {
			console.log('here', 9999999999999);
			json = await res.json();
			return {
				props: {
					name: 'omar alhussan',
					data: json,
					status: res.status
				}
			};
		}
		return {
			props: {
				status: res.status,
				error: new Error('could not fetch')
			}
		};
	}
</script> -->
<script>
	import { GET,POST } from './index.js';

	//import Header from "$lib/header.svelte";
	export let url=false;
	export let json={title:undefined};
	$:console.log(url)
	// @ts-ignore

	function dothis(e){
		//console.log(e.target.value);
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h1 class="text-2xl bg-red-300">s</h1>
<a href="/about">here</a>
<div />
<button
	on:click={() => {
		GET();
	}}>click</button
>

<form  action="" on:input={dothis}  method="post">
  <input name="pokemon" type="text" />
  <button  type="submit" >submit</button>
</form>
{#if url}
<div>{url}</div>

<div>{json.title}</div>
{/if}


<style>
	input {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
</style>
