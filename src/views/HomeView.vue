<template>
    <div>
        <Navbar />
        <HomePage />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HomePage from '../components/HomePage.vue'

export default {
    name: 'HomeView',
    components: {
        Navbar,
        HomePage
    }
}
</script>