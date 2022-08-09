<template>
    <div class="w-25">
        <input type="text"  class="form-control" placeholder="name" v-model="name">
        <input type="email"  class="form-control" placeholder="email" v-model="email">
        <input type="password"  class="form-control" placeholder="password" v-model="password">
        <input type="password"  class="form-control" placeholder="password_confirmation"
               v-model="password_confirmation">
        <input @click.prevent="signup" type="submit" value="Signup" class="btn btn-primary">
    </div>
</template>

<script>
export default {
    name: "Signup",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {
        signup() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
                    })
                    .then( res => {
                        console.log(res);
                    })
            })
        }
    }
}
</script>

<style scoped>

</style>
