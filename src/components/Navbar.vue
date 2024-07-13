<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/letters">Letters</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
nav {
    background-color: #f8f8f8;
    padding: 10px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: inline;
    margin-right: 10px;
}
</style>