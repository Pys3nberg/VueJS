<template>
  <div id="app" class="container">
    <h1>Sign Up</h1>
    <!--form-->
    <form action="" v-show="!isSubmitted">
      <div class="row">
        <div class="col-sm-8">

          <hr>

<!--          <div class="form-group">-->
<!--            <label for="firstName">First Name</label>-->
<!--            <input-->
<!--                    id="firstName"-->
<!--                    type="text"-->
<!--                    class="form-control"-->
<!--                    v-model.trim.lazy="formData.firstName"-->
<!--            >-->
<!--          </div>-->

<!--          <div class="form-group">-->
<!--            <label for="lastName">Last Name</label>-->
<!--            <input-->
<!--                    id="lastName"-->
<!--                    type="text"-->
<!--                    class="form-control"-->
<!--                    v-model.trim.lazy="formData.lastName"-->
<!--            >-->
<!--          </div>-->
        <app-full-name v-model="formData.fullName"></app-full-name>
          <div class="form-group">
            <label for="email">E-Mail</label>
            <input
                    id="email"
                    type="text"
                    class="form-control"
                    v-model.trim.lazy="formData.email"
            >
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
                    id="password"
                    type="password"
                    class="form-control"
                    v-model.trim.lazy="formData.password"
            >
          </div>
          <div class="form-check">
            <input
                    id="storeData"
                    type="checkbox"
                    class="form-check-input"
                    v-model="formData.storeData"
            >
            <label for="storeData" class="form-check-label">
              Store Data?</label>
          </div>
          <hr>
          <button class="btn btn-primary" @click.prevent="isSubmitted=true">Submit</button>
        </div>

      </div>
    </form>
    <div class="row" v-show="isSubmitted">
      <div class="col-sm-8">
        <hr>
        <div class="card">
          <h5 class="card-header">Sign Up Summary</h5>
          <div class="card-body">
            <p>Full Name: {{formData.fullName}}</p>
            <p>Email: {{formData.email}}</p>
            <p>Password: {{formData.password}}</p>
            <p>Store Data?: {{formData.storeData}}</p>
          </div>
        </div>
      </div>
    </div>
    {{storeData}}
  </div>
</template>

<script>
import FullName from "./components/FullName";
export default {
  name: 'App',
  components: {
    appFullName: FullName
  },
  data(){
    return {
      formData: {
        // firstName : "",
        // lastName: "",
        fullName:"",
        email: "",
        password: "",
        storeData: false
      },
      isSubmitted: false

    }
  }
}
</script>

<style>
</style>
