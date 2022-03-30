import router from "@/routes/router";
import Axios from "axios";

const baseUrl = process.env.VUE_APP_API_URL;

const instance = Axios.create({
    baseUrl,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
})

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        error.response.status === 401
            ? router.push('/')
            : console.log(error);

        return Promise.reject(error);
    }
)

export default instance