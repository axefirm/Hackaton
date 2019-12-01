<template lang="html">
  <div class="">
    <div class="container">
      <v-card class="main-title">
        Сүүлийн нэмэгдсэн худалдаанууд
    <div v-for="item in data" class="">
        <Card :data="item"/>
    </div>
  </v-card>
  </div>
  </div>
</template>

<script>
import Card from '~/components/product-card0.vue'
export default {
  props:['data'],
  components:{
    Card
  },
}
</script>

<style lang="css" scoped>
.main-title{
  font-family: 'Montserrat', sans-serif;
  font-size:20px;
  color: black;
  padding: 20px;
}
.container{
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>
