<template>
    <div class="container">
        <div class="done">
            {{msj}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msj: 'Таны данс амжилттай цэнэглэгдлээ',
            counter: 2
        }
    },
    // methods: {
    //     shiljih(){
    //         this.$router.push("/admin");
    //     }
    // },
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
            this.$router.push("/index");
            clearInterval(intval)
        }
        }, 1000)
    }

}
</script>
<style lang="stylus" scoped>
.container{
    width: 50%;
    margin: auto;
    text-align: center;
}
.done{
    height: 300px;
    background: #71FF33;
    padding-top: 100px;
    font-size: 24px;
    border-radius: 30px;
    transform: scale(1.5, 1);
}
</style>