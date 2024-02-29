<script setup>
import { ref } from 'vue';
let count = ref(0)

function sum(){
    count.value += 1
}

</script>

<template>
    <h1>{{ count }}</h1>
    <button @click="sum">CLICKEAME</button>
</template>

