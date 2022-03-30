import axios from "axios"
import VueCookie from "vue-cookie";

export default {
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