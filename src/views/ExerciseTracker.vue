<template>
  <div class="Exercise Tracker">
  <h1>Track You Weekly Workouts</h1>
  <div class = "row">
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Exercises Completed Sunday</h5>
            <div class="card-body" id: cardBody>
                
            <h5 class="card-footer">
                <a href="#" role="text" id ="AddExercise" onclick ="AddExercise()">Add </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Exercises Completed Monday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddExercise" onclick ="AddExercise()">Add </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Exercises Completed Tuesday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddExercise" onclick ="AddExercise()">Add </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Exercises Completed Wednesday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddExercise" onclick ="AddExercise()">Add </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Exercises Completed Thursday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddExercise" onclick ="AddExercise()">Add </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Exercises Completed Friday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddExercise" onclick ="AddExercise()">Add </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    <div class= "col-md-12">
      <div class="card" >
          <h5 class="card-header">Exercises Completed Saturday</h5>
            <div class="card-body" id: cardBody>
                <h5 class="card-footer">
                <a href="#" role="text" id ="AddExercise" onclick ="AddExercise()">Add </a>
                <a href="#" role="text" id= "Clear"  > Clear</a>
              
            </h5>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
    div.card{
        margin-bottom: 20px;
    }

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
    userId: ()=> api.userId
  }
}
</script>