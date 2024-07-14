<template>
    <div>
        <Navbar />
        <div class="alphabet">
            <div v-for="letter in letters" :key="letter.letter" @click="goToLetter(letter)">
                <img :src="letter.image" :alt="letter.name">
                <p>{{ letter.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import lettersData from '../letters.json'

export default {
    name: 'LettersOverview',
    data() {
        return {
            letters: lettersData
        }
    },
    methods: {
        goToLetter(letter) {
            this.$router.push({ name: 'letter', params: { letter: letter.letter } });
        }
    }
}
</script>

<style scoped>
.alphabet {
    display: flex;
    flex-wrap: wrap;
}

.alphabet div {
    margin: 10px;
    cursor: pointer;
}

.alphabet img {
    width: 100px;
    height: 100px;
}

/* Add styles as needed */
.letters-container {
    display: flex;
    flex-wrap: wrap;
}

.letter-item {
    margin: 10px;
    text-align: center;
    /* Center align text */
}

.letter-item img {
    width: 150px;
    /* Adjust size as needed */
    height: auto;
}
</style>