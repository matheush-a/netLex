<template>
    <section class="view"> 
        <sidebar/>
        <section class="main">
            <div class="title">
                {{$route.name}}
            </div>
            <router-view/>
        </section>
    </section>
    
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
    components: {
        Sidebar
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
    }

    .view > .main{
        background-color: white;
        width: 100%;
        padding-left: 3rem;
        padding-top: 2rem;
    }

    .view > .main > .title{
        font-size: 32px;
        font-weight: bold;
    }
</style>