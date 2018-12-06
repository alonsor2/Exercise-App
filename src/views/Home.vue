<template>
  <div class="home">
    <div class="row">
       <div class = "col-md-4">
          <div class="card" style="width: 18rem;">
            <div class="card-body" id: cardBody>
              <h5 class="card-title">My Profile </h5>
              <a href="/MyProfile" role="button" class="btn btn-primary"><i class="icon-user"></i></a>
            </div>
          </div>
       </div>

       <div class = "col-md-4">
         <div class="card" style="width: 18rem;">
            <div class="card-body" id: cardBody>
              <h5 class="card-title">Exercise Tracker</h5>
              <a href="/ExerciseTracker" role="button" class="btn btn-success"><i class="icon-exercise"></i></a>
            </div>
          </div>
       </div>

       <div class = "col-md-4">
         <div class="card" style="width: 18rem;">
            <div class="card-body" id: cardBody>
              <h5 class="card-title">Nutrition Tracker</h5>
              <a href="/NutritionTracker" role="button" class="btn btn-danger"><i class="icon-food"></i></a>
            </div>
          </div>
       </div>

       <div class = "col-md-6 text-center" >
         <div class="card" >
            <div class="card-body" id: cardBody>
              <h5 class="card-title">Workouts</h5>
              <a href="Workouts" role="button" class="btn btn-warning"><i class="icon-workout"></i></a>
            </div>
          </div>
       </div>

       
      <div class = "col-md-6 text-center">
         <div class="card" >
            <div class="card-body" id: cardBody>
              <h5 class="card-title">Login</h5>
              <a @click.prevent="login" class="btn btn-dark" :class="{disabled: userId() !==null}" ><i class="icon-login"></i></a>
              <i v-if="userId() !== null">(Welcome {{state.users[userId()].name}})</i>
            </div>
          </div>
       </div>
     </div>
  </div>
</template>

<style lang="scss">
  button{
    margin-top: 30px;
    height: 100px;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
  }
  h5{
    padding-left: 60px;
   
  }
  .btn{
    height: 100px;
    width: 250px;
  }
  .icon-user{
    background-image : url(https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-shadow-circle-512.png);
   background-size: cover;
   display: inline-block;
   height: 80px;
   width: 80px;
  }
  .icon-exercise{
    background-image : url(https://cdn.iconscout.com/icon/premium/png-256-thumb/kids-exercise-1-1060612.png);
   background-size: cover;
   display: inline-block;
   height: 80px;
   width: 80px;
  }
  .icon-food{
    background-image : url(https://cdn3.iconfinder.com/data/icons/food-155/100/Healthy_food_2-512.png);
   background-size: cover;
   display: inline-block;
   height: 80px;
   width: 80px;
  }
  .icon-workout{
    background-image : url(https://cdn0.iconfinder.com/data/icons/gym-workout/308/workout008-512.png);
   background-size: cover;
   display: inline-block;
   height: 80px;
   width: 80px;
  }
  .icon-friends{
    background-image : url(https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-01-512.png);
   background-size: cover;
   display: inline-block;
   height: 100px;
   width: 100px;
  }
  .icon-login{
     background-image : url(https://cdn3.iconfinder.com/data/icons/security-3-1/512/access-512.png);
   background-size: cover;
   display: inline-block;
   height: 80px;
   width: 80px;
  }
  div.card{
    margin-bottom: 10px;
  }

  .card{
    background-color: lightgray;
  }
  .home{
    background-color: azure
  }

</style>

<script>
import * as api from '@/services/api_access';
import * as fb from '@/services/facebook';

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
    login(){
      fb.FBLogin();
    },
    userId: ()=> api.userId
  }
}
</script>
