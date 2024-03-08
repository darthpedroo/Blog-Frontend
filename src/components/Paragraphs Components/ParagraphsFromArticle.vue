<script setup>

import {getParagraphsFromArticle} from '@/utils/getParagraphsFromArticle'
import { putSingleParagraph } from '@/utils/putSingleParagraph';
import { postSingleParagraph } from '@/utils/postSingleParagraph';
import { deleteSingleParagraph } from '@/utils/deleteSingleParagraph';
import {ref, watch , onMounted} from 'vue'
import { useRoute } from 'vue-router'

const currentParagraphBeingEdited = ref(null)
const route = useRoute()
const articleId = route.params.id
const response = ref(null)
const amountOfParagraphs = ref(null)


onMounted(() => {
  getParagraphsFromArticle(response, articleId)
   
});

function setParagraphBeingEdited(paragraphId){
    currentParagraphBeingEdited.value = paragraphId
}

function updateParagraph(paragraph){
    const body = JSON.stringify(paragraph)
    const currParagraphId = paragraph.id
    putSingleParagraph(body, currParagraphId)
    setParagraphBeingEdited(null)
}

function postParagraph(text){

    if (amountOfParagraphs.value === null)  {
        amountOfParagraphs.value = getAmountOfParagraphs()+1
    }    
    const index_order = amountOfParagraphs.value
    console.log(index_order)
    const body = {
        'text': text,
        'articleId': articleId,
        'index_order': index_order
    }
    
    postSingleParagraph(body);
    amountOfParagraphs.value += 1;

}

function deleteParagraph(paragraphId){ //Sometimes the console.log don't work and therefore it doesn' trigger the watcher and the amount of Paragrpahs doesn't updates and everythin breaks
    console.log(amountOfParagraphs.value)
    amountOfParagraphs.value -= 1;
    deleteSingleParagraph(paragraphId)
    console.log(amountOfParagraphs.value)
}

function getAmountOfParagraphs(){

    if(response !== null){
        
       return response.value.length
    }
    else {
        return 0
    }
}

function getTextAreaContent(value){
    return value
}

watch(response, () => {
  amountOfParagraphs.value = getAmountOfParagraphs()
});

watch(amountOfParagraphs, ()=> {
    console.log("DONDE ESTA EL WATCHERR ?")
    
    getParagraphsFromArticle(response, articleId)
    const textarea = document.querySelector('textarea');
    if (textarea) {
        textarea.value = '';
    }
})

</script>

<template>

    <div v-if="response != null && response.length > 0">

        <div v-for="paragraph in response " :key="index">
            <textarea v-on:keyup.enter="updateParagraph(paragraph)"  ref="textareaRef" v-if="currentParagraphBeingEdited == paragraph.id" @click="setParagraphBeingEdited(paragraph.id)" v-model="paragraph.text" ></textarea>
            <h1 v-else @click="setParagraphBeingEdited(paragraph.id)">{{ paragraph.text }}</h1>

            <button @click="deleteParagraph(paragraph.id)">BORRAR:{{ paragraph.id }}</button>
            <h6>index_order: {{ paragraph.index_order }}</h6>
        </div>

    </div>
    <div v-else-if="response != null && response.length == 0">
        <h1>No hay parrafos todavia... Empezá a Escribir ! !  ! ! ! ! ! ! </h1>
    </div>
    <div v-else>
            Paragraphs are fetching
    </div>

    <textarea v-on:keyup.enter="postParagraph(getTextAreaContent($event.target.value))">
    </textarea>


</template>@/utils/deleteSingleParagraph