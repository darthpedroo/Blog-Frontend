<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

const response = ref(null)

function FetchData(){
    axios.get('http://localhost:8000/articles/')
        .then(data => response.value = data.data)
        .catch(error => console.log(error))

}

onMounted(()=>FetchData()) //Registers a callback to be called after the component has been mounted.

</script>

<template setup>
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
</template>