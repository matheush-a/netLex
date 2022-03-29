<template>
    <section class="container">
        <div class="header">
            Login
        </div>
        <div class="main"> 
            <label for="email">E-mail</label>
            <input type="text" class="email"/>

            <label for="password">Senha</label>
            <input type="password" class="password"/>

            <default-button :text="'Entrar'"/>
        </div>
    </section>
</template>

<script>
import DefaultButton from '../DefaultButton.vue'

export default {
  components: { DefaultButton },
}
</script>

<style scoped>
    .container {
        background-color: white;
        width: 35%;
        border-radius: 8px;
        font-weight: bold;
        font-size: 24px;
    }

    .header {
        border-bottom: 1.2px solid lightgrey;
        padding: 2rem;
    }

    .main {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin: auto;
        font-size: 20px;
        padding: 2rem 0;
    }
    .main > label {
        display: block;
        float: left;
        margin-top: 1rem;
        padding-left: 2%;
    }
    .main > input {
        display: block;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-radius: 4px;
        border-width: 1.5px;
        padding: 15px 12px;
        width: 100%;
        font-size: 18px;
    }
</style>