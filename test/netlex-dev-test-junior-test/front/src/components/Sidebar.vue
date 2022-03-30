<template>
    <ul class="menu-list"> 
        <router-link 
            class="menu-item"
            :class="{active: $route.name === item.name}" 
            v-for="(item, index) in menu"
            :key="index"
            tag="li"
            :to="`/home/${item.path}`"
        >
            {{item.name}}
        </router-link>
    </ul>
</template>

<script>
import Menu from '../constants/menu'

export default {
    data() {
        return {
            menu: [...Menu]
        }
    },
}
</script>

<style scoped>
    .menu-list {
        list-style-type: none;
        width: 15%;
        padding: 0 1%;
    }
    
    .menu-list > .menu-item {
        color: white;
        font-size: 24px;
        margin: 1%;
        padding: 0.5rem;
        cursor: pointer;
        text-align: center;
        border-radius: 5px;
        margin-bottom: 0.7rem;
    }

    .menu-list > .menu-item.active {
        color:black;
        background-color: white;
    }
</style>