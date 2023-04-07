<template>
<NavHeader />
<div class="container my-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="mb-4">Add Restro</h2>
            <form class="border p-4 rounded">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="form.name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="address">Address:</label>
                    <input type="text" id="address" v-model="form.address" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="contact">Contact:</label>
                    <input type="text" id="contact" v-model="form.contact" class="form-control" required>
                </div>
                <br> <a type="submit" v-on:click="submitForm()" class="btn btn-success">Add Restro</a>

            </form>

        </div>
    </div>
</div>
</template>

<script>
import NavHeader from './NavHeader';
import axios from 'axios'
export default {

    name: "AddRestro",
    components: {
        NavHeader
    },
    data() {
        return {
            form: {
                name: '',
                address: "",
                contact: "",
            },
        }
    },
    methods: {
        async submitForm() {
            console.log(this.form)
            let result = await axios.post('http://localhost:3000/restros',{
                name:this.form.name,
                address:this.form.address,
                contact:this.form.contact
            })
            console.log(result)
            if(result.status==201){
                alert('Restro Added');
                this.form.name='';
                this.form.address='';
                this.form.contact='';
                this.$router.push({
                    name: 'HomePage'
                })
            }

        },
    },
    mounted() {
        console.log('asghar')
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
    }
}
</script>
