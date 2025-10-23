<script lang="ts">
	import type { MouseEventHandler } from "svelte/elements";

    const {resetCallback} : {resetCallback : MouseEventHandler<any>} = $props();

</script>

<main class="fixed z-2 inset-0 flex items-center bg-black/50 justify-center ">
  <div class="flex flex-col justify-evenly items-center h-30 min-w-1/4 p-3 min-h-1/4 bg-green-800 rounded-2xl">
    <h1 class="text-5xl font-bold" >
        VOCÊ GANHOU!!!
    </h1 >
    <button onclick={resetCallback} class="bg-green-950  p-3 font-bold rounded-2xl">
        Jogar de novo!
    </button>
  </div>
</main>

<style>
    
</style>