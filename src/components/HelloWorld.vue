<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="mb-4">Sign Up</h2>
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
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log(this.form);
    },
  },
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