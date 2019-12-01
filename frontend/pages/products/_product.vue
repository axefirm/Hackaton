<template>
    <div>
        {{slug}}
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
            <h1>
                Бүтээгдэхүүний нэр:   {{productName}}
            </h1>
            <h3>
                Барааны байрлал: {{location}}
            </h3>
            <h3>
                Дуудлага худалдаа эхлэхэд {{price}} хоног үлдлээ.
            </h3>
            <h4>
                Ehleh une: {{price}}
            </h4>
        </div>
        <div id="desc">
            <h1>
                {{describution}}
                 jlsdfjsa;ldjf l;sj ljfssl; jl;asj fl;
                 safk;jsal jf;lasjf ;ljaslf ;jasl;dj f
            </h1>
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
            price: 0,
            describution: ''
        }
    }
}

</script>
<style lang="stylus" scoped>
.main{
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
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
#desc{
  flex-grow: 2;
  float: left;
  padding-left: 300px;
}
</style>