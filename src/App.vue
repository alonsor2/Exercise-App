<template>
  <div id="app" class="container">
    <div class = "display-3">
      <img alt="Vue logo" src="./assets/logo.png" id="logo">
        StayFit
    </div>
    <Nav />
    <router-view/>
    <footer class="footer">
      <div class="container">
        <span class="text-muted"></span>
         <div class="row">
           <div class = "col-md-6">
             <h6 class="text-uppercase text-center font-weight-bold">Social</h6>
             <ul class="list-unstyled text-center">
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
          </ul>
           </div>
           <div class = "col-md-6">
             <h6 class="text-uppercase text-center font-weight-bold">Useful Links</h6>
            <ul class="list-unstyled text-center">
            <li>
              <a href="https://www.self.com/fitness">Self.com</a>
            </li>
            <li>
              <a href="https://www.health.com/fitness">Health.com</a>
            </li>
          </ul>
           </div>
         </div>
      </div>
      <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="#"> StayFit</a>
    </div>
    </footer>
  </div>


  
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#logo { height: 50px}

.footer{
  background-color: #343a40;
}
</style>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import '@/services/facebook'
export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>