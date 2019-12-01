<template>
    <div class="container">

        <div class="main">
        <div id="gallery">
            <img class="image1" src="http://www.touristinfocenter.mn/Images/Cate/1/%D0%AF%D0%B7%D0%B3%D1%83%D1%83%D1%80%20%D0%9C%D0%B0%D1%88%D0%B8%D0%B4%20%D0%B3%D0%B8%D0%B9%D0%B3%D2%AF%D2%AF%D0%BB%D1%8D%D0%BD%20%D0%B7%D0%BE%D1%85%D0%B8%D0%BE%D0%B3%D1%87.jpg">
            <img
                class="image2"
                src="http://www.touristinfocenter.mn/Images/Cate/1/%D0%AF%D0%B7%D0%B3%D1%83%D1%83%D1%80%20%D0%9C%D0%B0%D1%88%D0%B8%D0%B4%20%D0%B3%D0%B8%D0%B9%D0%B3%D2%AF%D2%AF%D0%BB%D1%8D%D0%BD%20%D0%B7%D0%BE%D1%85%D0%B8%D0%BE%D0%B3%D1%87.jpg"
            >
            <img class="image3" src="http://www.touristinfocenter.mn/Images/Cate/1/%D0%AF%D0%B7%D0%B3%D1%83%D1%83%D1%80%20%D0%9C%D0%B0%D1%88%D0%B8%D0%B4%20%D0%B3%D0%B8%D0%B9%D0%B3%D2%AF%D2%AF%D0%BB%D1%8D%D0%BD%20%D0%B7%D0%BE%D1%85%D0%B8%D0%BE%D0%B3%D1%87.jpg">
            <img class="image4" src="http://www.touristinfocenter.mn/Images/Cate/1/%D0%AF%D0%B7%D0%B3%D1%83%D1%83%D1%80%20%D0%9C%D0%B0%D1%88%D0%B8%D0%B4%20%D0%B3%D0%B8%D0%B9%D0%B3%D2%AF%D2%AF%D0%BB%D1%8D%D0%BD%20%D0%B7%D0%BE%D1%85%D0%B8%D0%BE%D0%B3%D1%87.jpg">

        </div>
        <div id="bigImg"> <img class="image1" src="http://www.touristinfocenter.mn/Images/Cate/1/%D0%AF%D0%B7%D0%B3%D1%83%D1%83%D1%80%20%D0%9C%D0%B0%D1%88%D0%B8%D0%B4%20%D0%B3%D0%B8%D0%B9%D0%B3%D2%AF%D2%AF%D0%BB%D1%8D%D0%BD%20%D0%B7%D0%BE%D1%85%D0%B8%D0%BE%D0%B3%D1%87.jpg"> </div>
        <div id="info">
          <div class="clock">
            Дуусах хуагацаа:
                {{counter}}
          </div>
            <h1>
                Бүтээгдэхүүний нэр:   {{productName}}
            </h1>
            <h3>
                Барааны байрлал: {{location}}
            </h3>
            <h4 class="price2">Таний дансны үлдэгдэл: {{price2}}</h4>
            <h4 >
                Одоогийн үнэ: {{price}}
            </h4>

            <div id="input">
              <input class="input" type="number" v-model="tam"/>
              <button @click="updatePrice">Илгээх</button>
            </div>
            <div class="errorMSG">
              {{msj}}
            </div>
        </div>
        <div id="desc">
            <h2><b>Тайлбар:</b></h2>
            <h4>
                {{describution}}

            </h4>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            slug: this.$route.params,
            productName: '',
            location: '',
            uldlee: 0,
            counter: 30,
            msj: '',
            price: 0,
            price2: 3000,
            tam: 0,
            describution: 'Өндөр гэгээн Ихбаярын 70 жил алтаар бүрхэн урласан энэхүү бурхан багшийн барималыг "ПИЗДА" компаны захирал Сүхбат дуудлага худалдаанд тавиж байна. '
        }
    },
    methods: {
        updatePrice(){
          if(this.price2<this.tam) this.msj='Амжилтгүй. Таний дансны үлдэгдэл хүрэлцэхгүй байна.';
          else{
            if(this.price<this.tam) {this.price=this.tam;
              this.counter=30;
              this.msj='Амжилттай';
          }
              else {
                this.msj="Одоогийн мөнгөн дүнгээс бага байна.";
              }
          }

        }
    },
    computed: {
        percent () {
        return this.counter.toFixed()
        }
    },
    created () {
        var intval = setInterval(() => {
        if (this.counter != 0) {
            this.counter -= 1
        } else {
            this.msj = 'bayar hurgii';
            clearInterval(intval)
        }
      }, 1000)
    }
}

</script>
<style lang="stylus" scoped>
.main{
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
}
.container{
  max-width:80%;
  margin: auto;
}
#gallery{
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  flex-grow: 6;
}
#gallery img{
  width: 70px;
  height: auto;
}
#bigImg{
  padding-left: 30px;
  flex-grow: 7;
}
#bigImg img{

  width: 400px;
  height: 100%;

}
#info{
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  text-align: left;
  flex-grow: 7;
}
.clock{
  height: 200px;
  font-size: 30px;

}
.input{
  background: #dbd8d5;
  text-align: center;
}
#input button{
  background:#18a5c4;
  color: white;
  /* padding-left: 10px; */
  width: 60px;
  text-alignt: center;
}
.price2{
  color:#81b2e3;
}
#desc{
  /* flex-grow: 1; */
  display: block;
  float: left;
  /* padding-left: 300px; */
  width: 300px;
}
</style>
