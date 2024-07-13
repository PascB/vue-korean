<template>
    <div>
        <Navbar />
        <h1>Welcome to the Korean Alphabet Learning Site</h1>
        <h2>Hangul development history</h2>
        <p class="fact"><b>Fact:</b> Hangul is actually one of the youngest alphabets in the world.</p>
        <p>The origin of the Korian script Hangul, begins in the 15th century. Its history is closely linked to
            King Sejong (1418-1450) the Great of the Joseon Dynasty. Before the introduction of Hangul,
            Koreans used the Chinese writing system called 'Hanja'. The Koreans did not yet have their own
            script at this time.
            Not everyone could afford to learn Hanja. As it was generally difficult to learn, only the upper
            classes could learn this script. Above all, however, it was a script that was not designed for the
            Korean language.
            King Sejong wanted Korea to have its own script that was also related to the spoken language.
            Above all, everyone from all different classes should be able to read and write this new script. The
            script should therefore be fairly simple.
            He initiated the realization of his plan in 1443. He created Hangul. At that time, the alphabet was
            known as 'Eonmun'. In October 9, 1446, a document called ''Hunminjeong'eum'' (translated: The
            Right Tones for the Education of the People) was published, in which his plan to publish the new
            Korean script was made public. The new Korean alphabet was published and used directly.
            On October 9th it is Hangul Day and it is nowdays a public holiday in South Korea. (North Korea
            also uses Hangul, but they call it ''Chosŏn'gŭl'').
            The history of Hangul has had a lot of back and forth. This was partly due to status differences
            (poor vs. rich people), powers (King Yeonsangun) and general history (occupation by Japan).
            In 1946, after Korea regained its independence, the spelling of Hangul was officially established.
            This was decided by King Gojong.
            Hangul was not used in official documents until many years later, in 1994.
            Hangul consists of 14 consonants and 10 vowels, which are combined into syllable blocks to form
            words.</p>
        <p>
        <ul>
            <li>Each letter is arranged in a square block, which represents a syllable. A block can consist of a
                consonant, a vowel and an optional final consonant.</li>
        </ul>
        <h3>Advantages of the Korean alphabet Hangul:</h3>
        <ul>
            <li>Simple and efficient (especially compared to the Chinese script that was used before by
                Koreans)</li>
            <li>There is a cultural reference to the language</li>
            <li>International acceptance and recognition of Hangul - also North Korea uses this font</li>
        </ul>
        </p>
        <video controls>
            <source src="/public/video/Hangul_Video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
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
    name: 'HomePage',
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
    width: 50px;
    height: 50px;
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