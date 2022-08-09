<template>
    <div>
        <router-link :to="{name: 'main.get' }">Get</router-link>
        <router-link :to="{name: 'user.login' }">Login</router-link>
        <router-link :to="{name: 'user.signup' }">Signup</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
