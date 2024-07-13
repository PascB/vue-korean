<template>
    <div>
        <Navbar />
        <div v-if="letterData">
            <h1>{{ letterData.name }} ({{ letterData.letter }})</h1>
            <img :src="letterData.image" :alt="letterData.name">
            <p>{{ letterData.description }}</p>
            <img :src="letterData.drawingImage" :alt="'Drawing of ' + letterData.name">
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import lettersData from '../letters.json'

export default {
    name: 'LetterPage',
    props: ['letter'],
    components: {
        Navbar
    },
    data() {
        return {
            letterData: null
        }
    },
    created() {
        this.letterData = lettersData.find(l => l.letter === this.letter);
    }
}
</script>

<style scoped>
/* Add styles as needed */
</style>