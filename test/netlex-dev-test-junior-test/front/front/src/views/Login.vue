<template>
    <section class="view">
        <Form/>
        <Toast :errorText="'Toast falha'"/>
    </section>
</template>

<script>
import Form from '../components/login/Form.vue'
import Toast from '../components/Toast.vue'

export default {
    components: {
        Form,
        Toast
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