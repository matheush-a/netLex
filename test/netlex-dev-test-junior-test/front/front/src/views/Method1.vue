<template>
    <section class="container">
       <label for="word">
           Digite uma palavra
        </label>
        <input 
            type="text" 
            class="word"
            v-model="word"
        />
        <default-button
            class="button"
            :text="'Verificar'"
            :type="'button'"
            @click="getWordFrequency"
        />
        <div 
            class="message"
            v-show="word.length && count !== false"
        >
            A palavra <strong> {{ processedWord }} </strong> foi encontrada em {{ count }} frases no texto.
        </div>
    </section>
</template>

<script>
import DefaultButton from '../components/DefaultButton.vue'
import DocumentServices from '../services/document-services'

export default {
    components: {
        DefaultButton
    },

    data() {
        return {
            word: '',
            count: false,
            processedWord: ''
        }
    },

    methods: {
        async getWordFrequency() {
            this.processedWord = this.word

            const response = await DocumentServices.getWordFrequency({
                word: this.word
            })
            
            this.count = response
        }
    }
}
</script>

<style scoped>
    .container {
        width: 70%;
        padding-left:2rem;
    }
    .container > label {
        display: block;
        margin-top: 4rem;
        margin-bottom:1rem;
        font-weight: bold;
        font-size: 22px;
    }
    .container > input {
        display: block;
        margin-bottom: 0.1rem;
        border-radius: 4px;
        border-width: 1.5px;
        padding: 15px 12px;
        width: 100%;
        font-size: 18px;
    }
    .container > .button {
        width: 15%;
    }
    .container > .message {
        margin-top: 3rem;
        font-size: 22px;
    }
</style>