<template>
<div class="container">
    <div class="title">
        Хэтэвчээ цэнэглэх төрлөө сонгоно уу
    </div>
    <ul>
        <nuxt-link to="/khanbank"><li>Картаар төлбөр цэнэглэх</li></nuxt-link>
        <nuxt-link to="/khanbank"><li>MostMoney-оор цэнэглэх</li></nuxt-link>
        <nuxt-link to="/khanbank"><li>QPAY - ээр цэнэглэх</li></nuxt-link>
        <nuxt-link to="/khanbank"><li>Candy-ээр цэнэглэх</li></nuxt-link>
    </ul>
</div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" scoped>
.title{
    text-align: center;
}
.container{
    width: 50%;
    margin: auto;
}
li:hover{
    opacity: 0.7;
}
  ul, ol{
        /*margin: 0;padding: 0;*/
        list-style: none;
    }
    li {
        background: #37BC9B;
        color: #fff;
        counter-increment: myCounter;
        margin: 0 0 30px 0;
        padding: 13px;
        position: relative;
        top: 1em;
        border-radius:  0em 2px 1em 1em;
        padding-left: 2em;
        font-size: 1.2em;
        font-family: Constantia;
    }
    li:before{
        content: counter(myCounter, decimal-leading-zero);
        display: inline-block;
        text-align: center;
        font-size: 2em;
        line-height: 1.3em;
        background-color:  #48CFAD;
        padding: 10px;
        font-weight: bold;
        position: absolute; 
        top: 0;
        left: -40px;
        border-radius: 50%;
        font-family: exo;
    }


    li:nth-child(even){
        background-color: #434A54;
    }
</style>