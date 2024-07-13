<template>
    <div>
        <Navbar />
        <LettersOverview />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import LettersOverview from '../components/LettersOverview.vue'

export default {
    name: 'LettersView',
    components: {
        Navbar,
        LettersOverview
    }
}
</script>