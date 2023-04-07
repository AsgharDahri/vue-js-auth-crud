<template>
<div class="container my-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="row">
                <div class="col-lg-10" style="padding-right: 40px;">
                    <h2 class="mb-4">Sign Up</h2>
                </div>
                <div class="col-lg-2" style="padding-left: 30px;">
                  <router-link class="btn btn-primary" to="/login">Login</router-link>
                </div>
            </div>
            

            <form @submit.prevent="submitForm" class="border p-4 rounded">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="form.name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="form.email" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="form.password" class="form-control" required>
                </div>
                <br>
                <button v-on:click="submitForm()" class="btn btn-primary">Sign Up</button>
                       
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
                name: '',
                email: "",
                password: "",
            },
        };
    },
    methods: {
        async submitForm() {
            let result = await axios.post('http://localhost:3000/user', {
                name: this.form.name,
                email: this.form.email,
                password: this.form.password
            })
            console.log(result)
            if (result.status == 201) {
                alert('Signed Up');
                this.form.name = '';
                this.form.email = '';
                this.form.password = '';
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({
                    name: 'HomePage'
                });
            }

        },
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: 'HomePage'
            })
        }
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
