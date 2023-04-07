<template>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <a class="navbar-brand" href="#">Hi, {{ loggedInUser }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add">Add Restro</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="logout()">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  </template>

<script>
export default{
    name:'NavHeader',
    data(){
     return {
      loggedInUser:''
     }
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
      }
      else
      this.loggedInUser = JSON.parse(user).name
    },
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
        }
    }
}
</script>