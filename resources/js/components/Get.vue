<template>
    <div>
        Get
    </div>
</template>

<script>
export default {
    name: "Get",
    mounted() {
        this.getSome()
    },
    methods: {
        getSome() {
            axios.get('/api/get')
            .then( res => {
                console.log(res);
            })
            .catch( err => {
                console.log(err.response);
            })
        }
    }
}
</script>

<style scoped>

</style>
