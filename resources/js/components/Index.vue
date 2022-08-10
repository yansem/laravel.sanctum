<template>
    <div>
        <router-link :to="{name: 'main.get' }">Get</router-link>
        <router-link v-if="!accessToken" :to="{name: 'user.login' }">Login</router-link>
        <router-link v-if="!accessToken" :to="{name: 'user.signup' }">Signup</router-link>
        <router-link v-if="accessToken" :to="{name: 'user.personal' }">Personal</router-link>
        <a href="#" v-if="accessToken" @click.prevent="logout">Logout</a>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            accessToken: '',
        }
    },
    updated() {
        this.getToken()
    },
    mounted() {
        this.getToken()
    },
    methods: {
        logout() {
            axios.post('/logout')
            .then( res => {
                let token = localStorage.getItem('access_token')
                if (token) localStorage.removeItem('access_token')
                this.$router.push({name: 'user.login'})
            })
        },
        getToken() {
            this.accessToken = localStorage.getItem('access_token')
        }
    }
}
</script>

<style scoped>

</style>
