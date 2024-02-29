<script setup>
import { getArticles } from '../utils/apiUtils';
import {ref, onMounted} from 'vue'

const response = ref(null)
onMounted(() => getArticles(response))

</script>

<template>
  <div>
    <h1>Idiot World</h1>
    
    <div>
        <div v-if="response != null && response.length > 0">
            <li v-for="data in response" :key="response.id">
                <h2> {{ data.title }}</h2>
            </li>
        </div>
        <div v-else>
            Data is fetching--
        </div>
    </div>

  </div>
</template>

<style scoped>

</style>
