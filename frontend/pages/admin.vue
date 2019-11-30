<template lang="html">
  <v-layout>
    aaaaaaaaaaa
    <ul>
      <li v-for="item in res">
        {{item.name}}
        {{item.price}}
        {{item.date}}
        
      </li>
    </ul>
    <!-- <div class="">
      {{res[1].date}}
    </div> -->
  </v-layout>
</template>

<script>
export default {
  async asyncData({$axios, redirect}){
    let response = await $axios.$get("http://localhost:8080/admin");
    console.log(response);
    if(response.success=true){
      return{
        res: response.data.products
      }
    }
  },

}
</script>

<style lang="css" scoped>
</style>
