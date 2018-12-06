<template>
  <div class="Nutrition Tracker">
  <h1>Track You Weekly Meals</h1>
  
  <div class = "row">
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Food Consumed Sunday</h5>
            <div class="card-body" id: cardBody>
              <h5 class="card-footer">
                <a href="#" role="button" id ="AddFood">Add  </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Food Consumed Monday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddFood">Add  </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Food Consumed Tuesday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddFood">Add  </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Food Consumed Wednesday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddFood">Add  </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Food Consumed Thursday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddFood">Add  </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Food Consumed Friday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddFood">Add  </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Food Consumed Saturday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddFood">Add  </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
 
</style>

<script>
import * as api from '@/services/api_access';
let loopTimer = null;
export default {
  data(){
      return {
             state: {
                 users: [],
                 exercises:[]
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
    login(){
      api.Login(prompt('What is your name?'))
      .then(()=> this.refresh())
    },
    AddExercise(){
        api.addExercise(prompt('Add Exercisee'))
        .then(()=> this.refresh())
    },
    AddFood(){
        api.addFood(prompt('Add Food'))
        .then(()=> this.refresh())
    },
    userId: ()=> api.userId
  }
}
</script>