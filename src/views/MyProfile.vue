<template>
  <div class="MyProfile">
    <h1>Profile Page</h1>
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="name" class="form-control" id="inputEmail4" placeholder="First">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Last">
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
  <button type="save" class="btn btn-primary">Save</button>
</form>
  </div>
</template>