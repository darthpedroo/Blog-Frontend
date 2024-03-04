<script setup>
import { getSingleArticle } from '@/utils/getSingleArticle';
import {ref, onMounted} from 'vue'

const response = ref(null)
onMounted(() => getSingleArticle(response, 2))

</script>

<template>
    <div v-if="response != null">

        <h1>Article: </h1>
        <h2>{{ response[0].title }}</h2>

    </div>
    <div v-else>
            Single Article is fetching
        </div>
</template>../utils/getAllArticles