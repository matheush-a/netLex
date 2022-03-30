import axios from "./axios-services"
import VueCookie from "vue-cookie";

export default {
    async getDocumentTopWords(data) {
        const url = `${process.env.VUE_APP_API_URL}/documents/top-words`;

        const headers = {
            Authorization: `Bearer ${VueCookie.get('token')}`
        }

        return await axios.post(url, data, {
            headers
        }).then(response => response.data)
    },

    async getSentencesWordFrequency(data) {
        const url = `${process.env.VUE_APP_API_URL}/documents/word-sentences`;

        const headers = {
            Authorization: `Bearer ${VueCookie.get('token')}`
        }

        return await axios.post(url, data, {
            headers
        }).then(response => response.data)
    },

    async getWordFrequency(data) {
        const url = `${process.env.VUE_APP_API_URL}/documents/word-frequency`;

        const headers = {
            Authorization: `Bearer ${VueCookie.get('token')}`
        }

        return await axios.post(url, data, {
            headers
        }).then(response => response.data)
    }    
}