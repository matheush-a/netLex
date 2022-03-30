<template>
    <section class="view">
        <Form
            @unauthorized="showToast = true"
        />
        <Toast 
            :errorText="'Login inválido'"
            :toShow="showToast"
            @closed="showToast = false"
        />
    </section>
</template>

<script>
import Form from '../components/login/Form.vue'
import Toast from '../components/Toast.vue'

export default {
    components: {
        Form,
        Toast
    },

    data() {
        return {
            showToast: false
        }
    }
}

</script>

<style scoped>
    .view {
        width: 100%;
        min-height: 100vh;
        background-image: url('/public/assets/images/unsplash_m_7p45JfXQo.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>