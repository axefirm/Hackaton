<template>
  <div>
    <div class="left"></div>
    <Signup/>
  </div>
</template>

<script>
import Signup from '~/components/signup.vue'
  export default {
    components:{
      Signup
    }
  }
</script>

<style scoped>
.left{
  width: 50%;
  float:right;
  background-color: #5D6363;
}
</style>