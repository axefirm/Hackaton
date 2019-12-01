<template lang="html">
  <div class="container">
    <div class="main-title">
      Дуудлага худалдааны эрх авах хүсэлтүүд
    </div>
    <div v-for="item in data" class="">
        <Card :data="item"/>
    </div>
  </div>
</template>

<script>
import Card from '~/components/product-card.vue'
export default {
  props:['data'],
  components:{
    Card
  },
}
</script>

<style lang="css" scoped>
.main-title{
  padding-left: 100px;
  font-size: 20px;
}
.container{
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>
