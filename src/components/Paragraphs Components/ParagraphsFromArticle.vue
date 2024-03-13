<script setup>

import {getParagraphsFromArticle} from '@/utils/getParagraphsFromArticle'
import { putSingleParagraph } from '@/utils/putSingleParagraph';
import { postSingleParagraph } from '@/utils/postSingleParagraph';
import { deleteSingleParagraph } from '@/utils/deleteSingleParagraph';
import {ref, watch , onMounted} from 'vue'
import { useRoute } from 'vue-router'

import './ParagraphsFromArticle.css'

const currentParagraphBeingEdited = ref(null)
const route = useRoute()
const articleId = route.params.id
const response = ref(null)
const amountOfParagraphs = ref(null)


onMounted(() => {
  getParagraphsFromArticle(response, articleId)
   
});

function incrementAmountOfParagraphs(){
    amountOfParagraphs.value += 1;
}

function decreaseAmountOfParagraphs(){
    amountOfParagraphs.value -= 1;
}

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
    const body = {
        'text': text,
        'articleId': articleId,
        'index_order': index_order
    }
    postSingleParagraph(body, incrementAmountOfParagraphs);
    
}

function deleteParagraph(paragraphId){ //Sometimes the console.log don't work and therefore it doesn' trigger the watcher and the amount of Paragrpahs doesn't updates and everythin breaks
    
    deleteSingleParagraph(paragraphId, decreaseAmountOfParagraphs)
    
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
    getParagraphsFromArticle(response, articleId)
    const textarea = document.querySelector('textarea');
    if (textarea) {
        textarea.value = '';
    }
})

</script>

<template>

    <div v-if="response != null && response.length > 0" class="container-fluid">
        <div v-for="paragraph in response " :key="index">
            <div class="row justify-text">
                <textarea class="form-control textarea col-12 mx-auto" v-on:keyup.enter="updateParagraph(paragraph)" ref="textareaRef" v-if="currentParagraphBeingEdited == paragraph.id" @click="setParagraphBeingEdited(paragraph.id)" v-model="paragraph.text"></textarea>
                <p class="custom-font col-5 mx-auto text-justify" v-else @click="setParagraphBeingEdited(paragraph.id)">{{ paragraph.text }}</p>
                
                <div class="row">
                    <button class="btn btn-danger custom-font col-2 mx-auto px-0" @click="deleteParagraph(paragraph.id)">BORRAR:{{ paragraph.id }}</button>
                </div>
               
               
            </div>
            
        </div>
    </div>
    <div v-else-if="response != null && response.length == 0">
        <h1>No hay parrafos todavia... Empezá a Escribir ! !  ! ! ! ! ! ! </h1>
    </div>
    <div v-else>
            Paragraphs are fetching
    </div>

    <div class="row">
        <textarea class="control textarea col-12 mx-auto" placeholder="Type here..." @click="setParagraphBeingEdited(null)" v-on:keyup.enter="postParagraph(getTextAreaContent($event.target.value))"></textarea>
    </div>

    <img src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg" alt="perro puto" width="200" height="300">
    

</template>

<style>

</style>