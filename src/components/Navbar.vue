<template>
    <nav class="navbar">
        <ul class="navbar-menu">
            <li class="navbar-item"><router-link to="/" class="navbar-link">Home</router-link></li>
            <li class="navbar-item"><router-link to="/letters" class="navbar-link">Letters</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.navbar {
    background-color: #aa2222;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.navbar-item {
    margin-right: 20px;
}

.navbar-link {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 10px;
    transition: background-color 0.3s ease;
}

.navbar-link:hover {
    background-color: #461111;
    border-radius: 5px;
}
</style>
