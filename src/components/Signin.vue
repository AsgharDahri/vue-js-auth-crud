<template>
<div class="container my-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="mb-4">Login</h2>
            <form @submit.prevent="login" class="border p-4 rounded">
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="form.email" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="form.password" class="form-control" required>
                </div>
                <br>
                <button v-on:click="login()" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.form.email}&password=${this.form.password}`)
            console.log(result)
            if (result.status == 200 && result.data.length > 0) {
                alert('LogedIn');
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({
                    name: 'HomePage'
                });
            }

        },
    }
}
</script>

<style scoped>
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"] {
    border-radius: 0;
}

button[type="submit"] {
    border-radius: 0;
}
</style>
