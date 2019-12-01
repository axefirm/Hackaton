<template lang="html">
  <div class="">
    <Slider/>
    <List :data="res"/>
  </div>
</template>

<script>
import Slider from '~/components/slider.vue'
import List from '~/components/adminpanel0.vue'
export default {
  components:{
    Slider,
    List
  },
  async asyncData({$axios}){
      let response = await $axios.$get("http://localhost:8080/product");
      if(response.success == true){
        console.log(response.data.products)
        return{
          res: response.data.products,
        }
      }
    }
}
</script>

<style lang="css" scoped>
</style>
