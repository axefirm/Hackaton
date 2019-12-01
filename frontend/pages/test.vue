<template>
    <div>
        {{counter}}
        {{msj}}
        <button @click="updateTime">Daraa</button>
    </div>
</template>
<script>

export default {
    data:()=>({
        counter: 5,
        msj: ''
    }),
    methods: {
        updateTime(){
            this.counter=30;
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
        }, 300)
    }
}
</script>
