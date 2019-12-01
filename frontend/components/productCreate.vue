<template>
<v-card
    class="mx-auto cards1"
    max-width="400"
  >
  <v-form v-model="valid">
    <v-container>
      <div class="title"> Дуудлага худалдаа</div>
          <v-text-field
            v-model="productname"
            :rules="nameRules"
            :counter="30"
            label="Барааны нэр"
            required
          ></v-text-field>
          <v-text-field
            v-model="price"
            type="number"
            :rules="nameRules"
            :counter="10"
            label="Суурь үнэ"
            required
          ></v-text-field>
          <v-select
            :items="items"
            label="Төрөл"
            v-model="item"
          ></v-select>
          <v-text-field
            label="Эхлэх хугацаа"
            v-model="dateLast"
            type = "datetime-local"
            required
          ></v-text-field>
          <v-textarea
            :rules="defineRules"
            v-model="define"
            label="Дэлгэрэнгүй мэдээлэл"
            required
          ></v-textarea>
          <v-text-field
            :rules="defineRules"
            v-model="location"
            label="Барааны хаяг"
            required
          ></v-text-field>
          <input type="file"
            name="productImage"
            id="file"
            ref="productImage"
            @change="handleFilesUpload"
            multiple
            required
          />
          <v-alert
            type="info"
            v-model="msg"
            dense
          >
            {{msg}}
          </v-alert>
      <v-btn class="mr-4" color="primary" @click="addProduct"> Бүртгүүлэх</v-btn>
    <v-btn @click="clear" color="error">RESET</v-btn>
    {{zoruu}}
      </v-container>
  </v-form>
</v-card>
</template>
<script>
import axios from 'axios'
const myDate = new Date()
export default {
  data: () => ({
    items: ['Амьтан', 'Ургамал', 'Үнэт эдлэл', 'Эртний эдлэл'],
    location: '',
    valid: false,
    msg: '',
    dateLast: '1999-07-11T00:00',
    zoruu: 0,
    productname: '',
    price: 0,
    item: '',
    productImage: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 30 || 'Name must be less than 10 characters',
    ],
    define: '',
    defineRules: [
      v => !!v || 'хоосон байна.',
    ],
    }),
  methods: {
    clear () {
        this.zoruu =this.dateLast.getDate(),
        this.productname = '',
        this.define = '',
        this.price= '',
        this.valid = false,
        this.item = '',
        this.productImage = '',
        this.dateLast ='',
        this.location = ''
      },
    handleFilesUpload (event) {
      this.productImage = event.target.files[0]
      console.log("orloo");
    },
    addProduct(){
      let formData = new FormData()
      formData.append('productImage', this.productImage)
      axios
        .post('http://localhost:8080/photo', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
          console.log(res)
          let resp = this.$axios.$post("http://localhost:8080/product", {
            productImage: res.data,
            productname: this.productname,
            dateLast: this.dateLast,
            define: this.define,
            price: this.price,
            item: this.item,
            bilgedel: this.bilgedel,
            userid: this.userid,
            location: this.location
          })
             if(resp.success){

            } else {
              this.msg = res.data.message;
            }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

}
</script>
<style lang="stylus" scoped>
  .title{
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
  .cards1{
    margin-top: 30px;
  }
</style>
