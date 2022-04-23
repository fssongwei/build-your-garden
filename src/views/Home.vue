<template>
  <div class="home">
    <!-- TODO: Implement the home page -->
    <h1>Home</h1>


  <b-container class="bv-grid-row">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 col-md-offset-3">
          <button type="button" class="btn btn-info btn-circle btn-lg"
          @click="quest()">Step 1</button>
          </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-md-offset-6"><button type="button" class="btn btn-info btn-circle btn-lg"
        @click="quest()">Step 2</button></div>
      </div>

      <div class="row">
        <div class="col-md-4 col-md-offset-3"><button type="button" class="btn btn-info btn-circle btn-lg"
        @click="recom()">Step 3</button></div>
      </div>

      <div class="row">
        <div class="col-md-4 col-md-offset-6"><button type="button" class="btn btn-info btn-circle btn-lg"
        @click="garden()">Step 4</button></div>
      </div>


    </div>
</b-container>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods:{
    quest(){
      this.$router.push({
        path:"/Questionnaire",
      })
    },
    recom(){
      this.$router.push({
        path:"/Recommendation",
      })
    },
    garden(){
      this.$router.push({
        path:"/Garden",
      })
    },
  }
};
</script>

<style>
.col-md-4{
  float: right;
}
.left{
  display: inline;
  float:left;
}
.col-md-offset-6 {
    margin-left: 50%;
  }

 .col-md-offset-3 {
    margin-left: 25%;
  }
.right{
  float:right;
}
.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 20px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
.btn-circle.btn-lg {
  width: 80px;
  height: 80px;
  padding: 20px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 50px;
}
</style>
