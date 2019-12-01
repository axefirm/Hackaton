<template lang="html">
  <div>
    <div class="main">
      <div class="container">

      <div class="top">
        <nuxt-link :to="/products/ + data._id" class="title">
          {{data.productname}}
        </nuxt-link>
        <div class="date">
          {{data.date}}
        </div>
    </div>
      <div class="description">
        {{data.define}}
      </div>
      <img :src="require('../assets/productphoto/'+ data.productImage)">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
}
</script>

<style lang="css" scoped>
.main{
  width: 100% !important;
  height: auto;
}
.container{
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.top{
  background-color: #E2E3D9;
  width: 100%;
  height: 30px;
  display: grid;
  grid-template-columns: auto auto;
}

.title{
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.date{
  margin-right:20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
.description{
  display: flex;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  flex-direction: column;
  justify-content: center ;
  align-items: center;
  background-color: #F3F4E5;
}

</style>
