<script lang="ts">
    import { onMount } from "svelte";
    const { class:classname }: { class: string } = $props()

    let contador = $state(1);
    const total = $state(4);
    const intervalo = $state(1000);

    onMount(() => {
        const timer = setInterval(() => {
        contador = contador % total + 1;
        }, intervalo);

        return () => clearInterval(timer);
    });

    function getClasse(base:string, offset:number) {
        let numero = ((contador - 1 + offset) % total) + 1;
        return `${base}${numero}`;
    }

    const texto = "Quebra-Cabeça";
</script>

<div class={classname}>
    {#each texto.split('') as letra, i}
        <span class={getClasse('cor', i)}>{letra}</span>
    {/each}
</div>

<style>
    div {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 2rem;
        display: inline-block;
    }
    
    span {
        transition: color 1s;
    }

    .cor1{
        color: #E6255C;
    }
    .cor2{
        color: #87BF76;
    }
    .cor3{
        color: #4994CE;
    }
    .cor4{
        color: #FFB90B;
    }
</style>
