<template>
    <div class="w-25">
        <input type="email"  class="form-control" placeholder="email" v-model="email">
        <input type="password"  class="form-control" placeholder="password" v-model="password">
        <input @click.prevent="login" type="submit" value="Login" class="btn btn-primary">
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', {email: this.email, password: this.password})
                .then( res => {
                    console.log(res);
                })
                .catch( err => {
                    console.log(err.response);
                })
            });
        }
    }
}
</script>

<style scoped>

</style>
