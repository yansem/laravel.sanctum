<template>
    <div>
        <router-link :to="{name: 'main.get' }">Get</router-link>
        <router-link :to="{name: 'user.login' }">Login</router-link>
        <router-link :to="{name: 'user.signup' }">Signup</router-link>
        <a href="#" @click.prevent="logout">Logout</a>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",
    methods: {
        logout() {
            axios.post('/logout')
            .then( res => {
                this.$router.push({name: 'user.login'})
            })
        }
    }
}
</script>

<style scoped>

</style>
