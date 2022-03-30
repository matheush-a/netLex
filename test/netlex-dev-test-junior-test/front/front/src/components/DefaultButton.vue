<template>
    <button 
        class="button"
        @click="emitClick"
        :type="type"
    >
        {{text}}
    </button>
</template>

<script>
export default {
    props: [
        "text",
        "type"
    ],

    methods: {
        emitClick() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>
    .button {
        margin-top: 2rem;
        width: 100%;
        padding: 15px 12px;
        background-color: #003dd9;
        color: #ffffff;
        border-radius: 4px;
        border: none;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
    }
</style>