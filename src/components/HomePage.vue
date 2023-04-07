<template>
<NavHeader />
    <div class="container-fluid">
        <div class="container d-flex align-items-center" style="height: 90vh;">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th></th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="restro in restros" :key="restro.id">
                        <td>{{ restro.id }}</td>
                        <td>{{ restro.name }}</td>
                        <td>{{ restro.address }}</td>
                        <td>{{ restro.contact }}</td>
                        <td><button v-on:click="deleteRestro(restro.id)" class="btn btn-danger">X</button></td>
                        <td><router-link :to="'/update/'+restro.id+'/'+ restro.name +'/'+restro.address+'/'+restro.contact" class="btn btn-danger">Update</router-link></td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import NavHeader from './NavHeader';
export default {

    name: "HomePage",
    components: {
        NavHeader
    },
    data() {
        return {
            restros:[]
        }
    },
    methods:{
        
        async loadData(){
            let result = await axios.get('http://localhost:3000/restros')
            this.restros = result.data
        },
        async deleteRestro(id){
            console.log('http://localhost:3000/restros'+id)

            let result = await axios.delete('http://localhost:3000/restros/'+id)
            if(result.status == 200){
                alert('Record Deleted')
                this.loadData();
            }
        },
    }
    ,
    async mounted() {
        let user = localStorage.getItem('user-info');
        console.log(user)
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }else{
            this.loadData();
        }
    }
}
</script>
