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
            @click="getSentencesWordFrequency"
        />
        <div 
            class="message"
            v-show="word.length && count !== false"
        >
            A palavra <strong> {{ processedWord }} </strong> foi encontrada em {{ count }} frases no texto.
        </div>
        <div class="sentences">
            <p
                v-for="(item, index) in sentences"
                :key="index"
            >
                {{ index+1 }}.  <span v-html="item"></span>
            </p>
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
            processedWord: '',
            sentences: []
        }
    },

    methods: {
        async getSentencesWordFrequency() {
            this.processedWord = this.word

            const response = await DocumentServices.getSentencesWordFrequency({
                word: this.word
            })
            
            this.count = response.length
            this.sentences = response.map(item => {
                return item.replace(new RegExp(this.word, 'gi'), `<strong>${this.processedWord}</strong>`)
            })
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
    .container > .sentences {
        margin-top: 2rem;
        font-size: 22px;
        color: #405666;
    }
</style>