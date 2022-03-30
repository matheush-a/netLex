<template>
    <section class="toast" v-show="show">
        <div>
            {{errorText}}
        </div>
        <div>
            <img 
                src="/assets/icons/icon-x.svg" 
                alt="Fechar toast"
                @click="closeAndEmit"
            >
        </div>
    </section>
</template>

<script>
export default {
    props: [
        "errorText",
        "toShow"
    ],

    data() {
        return {
            show: false
        }
    },

    methods: {
        closeAndEmit() {
            this.show = false
            this.$emit("closed")
        }
    },

    watch: {
        toShow(newValue) {
            this.show = newValue
        }
    }

}
</script>

<style scoped>
    .toast {
        font-size: 18px;
        background-color: #011c28;
        color: #ffffff;
        font-weight: bold;
        display: flex;
        justify-content: space-evenly;
        padding: 0.7rem;
        border-radius: 4px;
        position: absolute;
        left: 30px;
        bottom: 22px;
        align-items: center;
        width:10%;
        height:32px;
    }
    .toast > div {
        height: 24px;
        align-items: center;
        display: flex;
    }
    .toast > div > img {
        cursor: pointer;
    }
</style>