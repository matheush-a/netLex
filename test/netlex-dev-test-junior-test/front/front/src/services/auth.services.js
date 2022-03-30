import axios from "axios"

export default {
    async login(data) {
        const url = `${process.env.VUE_APP_API_URL}/users/login`;

        return await axios.post(url, data)
            .then(response => response.data)
    }
}