

<template>
  <div class="MyProfile">
    <h1>Profile Page</h1>
    <form>
  <div class="form-row">
    <div class="form-group col-md-6" id="FirstName">
      <label for="inputFirstName">First Name</label>
        <v-select   
          ref="select"
          label="first_name"
          :options="options"
          @search:focus="maybeLoad"       
        ></v-select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputLastName">Last Name</label>
      <input type="text" class="form-control" id="inputLastName" placeholder="Last">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="DOB">DOB</label>
      <input type="date" class="form-control" id="DOB" placeholder="">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Favorites</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell us your hobbies"></textarea>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">Height</label>
      <input type="text" class="form-control" id="inputCity" placeholder="Inches">
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">Weight</label>
      <input type="text" class="form-control" id="inputZip" placeholder="lbs">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Sex</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
  </div>
  <button @click.prevent="saveProfile" type="save" class="btn btn-primary">Save</button>
</form>
  </div>
</template>

<style lang="scss">
  body {
  font-family: 'Open Sans', sans-serif;
}

#name {
  max-width: 35em;
  
}

small {
  color: #b5b5b5;
}


</style>

<script>
import * as api from '@/services/api_access';
import Vue from 'vue';
import vSelect from 'vue-select';

Vue.component('v-select', vSelect)

let loopTimer = null;
export default {
  data(){
      return {
             state: {
                 users: [],
             }
      }
             
    },
  created(){
    loopTimer = setInterval(this.refresh, 1000);

  },
  methods: {
    refresh(){
      api.GetState()
      .then(x => this.state = x)
    },
    saveProfile(){
      api.updateUserInfo()

    },
    login(){
      fb.FBLogin();
    },
    userId: ()=> api.userId
  }
}

Vue.component('v-select', vSelect.VueSelect)

new Vue({
  el: '#FirstName',
  data: {
    options: [
      {first_name: "Robert"},
      {first_name: "David"}
    ]
  },
  methods: {
    maybeLoad() {
      return this.options.length <= 0 ? this.load() : null
    },
    load() {
      this.$refs.select.toggleLoading(true)
      fetch(this.users)
        .then(res => res.json())
        .then(json => {
          this.options = json.data
          this.$refs.select.toggleLoading(false)
        })
        // eslint-disable-next-line no-console
        .catch(err => console.warn(err))
    }
  }
})


</script>