<template lang="html">
  <div class="">
    <h1>ene bol login</h1>
    <v-textarea v-model="label" label="textarea">
    </v-textarea>
        {{label}}
        <v-btn color="primary" @click="sda()">bttn</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{
      label:""
    }
  },
  methods:{
    sda(){
      alert(this.label);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
