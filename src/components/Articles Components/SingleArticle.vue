<script setup>
import { getSingleArticle } from '@/utils/getSingleArticle';
import {ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'
import ParagraphsFromArticle from '../Paragraphs Components/ParagraphsFromArticle.vue';

const route = useRoute()
const articleId = route.params.id
const response = ref(null)
onMounted(() => getSingleArticle(response, articleId))

</script>

<template>
    <div v-if="response != null && response.length > 0" class="row">
        <h1 class="col-6 mx-auto text-center sex">{{ response[0].title }}</h1>
    </div>
    <div v-else-if="response != null && response.length == 0">
        <h1 class="col-6 mx-auto text-center">No se macheo el articulo</h1>
    </div>

    <div v-else>
            Single Article is fetching
        </div>
    
    <ParagraphsFromArticle></ParagraphsFromArticle>
</template>

<style>

.sex {
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
}


</style>