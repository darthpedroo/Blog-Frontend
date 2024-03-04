<script setup>
import { getAllArticles } from '@/utils/getAllArticles';
import {ref, onMounted} from 'vue'

const response = ref(null)
onMounted(() => getAllArticles(response))

</script>

<template>
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
</template>../utils/getAllArticles