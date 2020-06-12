<template>
        <ul class="nav nav-pills nav-fill">
            <router-link to="/" class="nav-link" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/user" class="nav-link" tag="li" active-class="active"><a>User 1</a></router-link>
        </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    a:active {
        color: white;
    }
</style>