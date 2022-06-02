<script setup>
    import { ref } from 'vue';
    import { useCounterStore } from "../stores/counter";

    const storeCounter = useCounterStore()

    const count = ref(0)
    
    // function increement(){
    //     count.value++
    // }

    const increement = () => {
        count.value++
    }

    const decrease = () => {
        count.value--
    }
</script>

<template>
    <div>
        <button @click="increement">ajouter 1</button>
        <button class="count" @click="decrease">retirer 1</button>
        <h1>count is {{count}}</h1>
    </div>
    <div>
        <button  @click="storeCounter.increement">ajouter 1</button>
        <button @click="storeCounter.decrease">retirer 1</button>
        <h1>store Counter is {{storeCounter.counter}}</h1>
        store counter is {{ storeCounter.isEven }}
    </div>
</template>

<style>
    
</style>