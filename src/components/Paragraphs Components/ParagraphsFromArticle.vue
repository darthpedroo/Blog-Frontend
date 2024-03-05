<script setup>

import {getParagraphsFromArticle} from '@/utils/getParagraphsFromArticle'
import {ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'


const currentParagraphBeingEdited = ref(null)
const textareaRef = ref(null);

const route = useRoute()
const paragraphId = route.params.id
const response = ref(null)

onMounted(() =>{
    
    getParagraphsFromArticle(response, paragraphId);
    focusTextArea();
}
)

function test(paragraphId){
    currentParagraphBeingEdited.value = paragraphId
}

function focusTextArea(){
    if (textareaRef.value !== null) {
    textareaRef.value.focus();
    console.log("Stay hard")
  } else {
    console.error("Textarea reference is null");
  }
}

</script>

<template>
    <div v-if="response != null && response.length > 0">
        <div v-for="paragraph in response">

            <textarea ref="textareaRef" id="nigga" v-if="currentParagraphBeingEdited == paragraph.id" @click="test(paragraph.id)" :readonly="false"  v-model="paragraph.text" ></textarea>
            <h1 v-else @click="test(paragraph.id)"> {{ paragraph.text }}</h1>
        
        </div>

    </div>
    <div v-else-if="response != null && response.length == 0">
        <h1>No hay parrafos todavia...</h1>
    </div>

    <div v-else>
            Paragraphs are fetching
        </div>

</template>