<template>
    <section class="container">
        <div class="select-group count-group">
            <label for="count">
                Count
            </label>
            <select 
                class="count"
                v-model="count"
            >
                <option
                    v-for="(item, index) in 12"
                    :key="index"
                >
                    {{ index+1 }}
                </option>
            </select>
        </div>
        <div class="select-group length-group">
            <label for="word-minimun-length">
                Minimum Word Length
            </label>
            <select 
                class="word-minimun-length"
                v-model="length"
            >
                <option
                    v-for="(item, index) in 12"
                    :key="index"
                >
                    {{ index+1 }}
                </option>
            </select>
        </div>
        <div class="button-group">
            <default-button
                class="button"
                :text="'Verificar'"
                :type="'button'" 
                @click="getTopWords"
            />
        </div>
        <div 
            class="message"
            v-show="topWords.length"
        >
            <p
                v-for="(item, index) in topWords"
                :key="index"
            >
                {{ item[0] }} - <strong> {{ item[1] }} </strong> ocorrências no texto.
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
            count: 12,
            length: 12,
            topWords: []
        }
    },

    methods: {
        async getTopWords() {
            const response = await DocumentServices.getDocumentTopWords({
                count: this.count,
                minWordLength: this.length
            })

            this.topWords = response;
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        width: 70%;
        padding-left:1.5rem;
    }
    .container .button {
        display: flex;
        width: 13%;
        height:40px;
        align-items: center;
        justify-content: center;
    }
    .container > .message {
        margin-top: 1rem;
        font-size: 22px;
    }
    
    .container > .select-group > label {
        display: block;
        margin-top: 4rem;
        margin-bottom:1rem;
        font-weight: bold;
        font-size: 22px;
    }
    .container > .select-group > select {
        display: block;
        margin-bottom: 0.1rem;
        border-radius: 4px;
        border-width: 1.5px;
        background-color: white;
        padding: 15px 12px;
        padding-right: 1rem;
        width: 100%;
        font-size: 18px;
    }

    .container > .count-group {
        width: 40%;
    }

    .container > .length-group {
        width: 40%;
        margin-left:4rem;
    }

    .container > .button-group {
        width: 100%;
    }
</style>