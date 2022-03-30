<template>
    <form 
        class="container"
        @submit.prevent="login"
    >
        <div class="header">
            Login
        </div>
        <div class="main"> 
            <label for="email">E-mail</label>
            <input 
                type="text" 
                class="email"
                v-model="email"
            />

            <label for="password">Senha</label>
            <input 
                type="password"
                class="password"
                v-model="password"
            />

            <default-button 
                :text="'Entrar'"
                :type="'submit'"
            />
        </div>
    </form>
</template>

<script>
import DefaultButton from '../DefaultButton.vue'
import AuthServices from '../../services/auth.services'

export default {
  components: { DefaultButton },

  data() {
      return {
            email: '',
            password: ''
      }
  },

  methods: {
      async login() {
          const response = await AuthServices.login({
              email: this.email,
              password: this.password
          }).catch(e => {
              this.$emit('unauthorized')
          })

          if(!response){
              return false;
          }
          
          this.$cookie.set('token', response.token, 2)
          this.$router.push('/home/method1')
      }
  }
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