<script setup>

import {getParagraphsFromArticle} from '@/utils/getParagraphsFromArticle'
import { putSingleParagraph } from '@/utils/putSingleParagraph';
import {ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'


const currentParagraphBeingEdited = ref(null)
const route = useRoute()
const articleId = route.params.id
const response = ref(null)

onMounted(() =>{
    
    getParagraphsFromArticle(response, articleId);
   
}
)

function setParagraphBeingEdited(paragraphId){
    currentParagraphBeingEdited.value = paragraphId
}

function updateParagraph(paragraph){
    const body = JSON.stringify(paragraph)
    const currParagraphId = paragraph.id
    putSingleParagraph(body, currParagraphId)
    setParagraphBeingEdited(null)
}


</script>

<template>

    <div v-if="response != null && response.length > 0">
        <div v-for="paragraph in response">
            <textarea v-on:keyup.enter="updateParagraph(paragraph)"  ref="textareaRef" id="nigga" v-if="currentParagraphBeingEdited == paragraph.id" @click="setParagraphBeingEdited(paragraph.id)" :readonly="false"  v-model="paragraph.text" ></textarea>
            <h1 v-else @click="setParagraphBeingEdited(paragraph.id)"> {{ paragraph.text }}</h1>
        </div>
        <textarea></textarea>

    </div>
    <div v-else-if="response != null && response.length == 0">
        <h1>No hay parrafos todavia...</h1>
    </div>

    <div v-else>
            Paragraphs are fetching
        </div>

</template>