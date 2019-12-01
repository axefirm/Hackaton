<template>
  <div>
    <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://media.caak.mn/cache/0e/29/0e29820f070e69c8d7697562a2e3ac5c.jpg',
          },
          {
            src: 'https://cdn.motor1.com/images/mgl/3gO9K/s1/classic-american-cars-show-up-to-moscow-retro-rally.jpg',
          },
          {
            src: 'http://new-balancee.ru/public/tpostx1959b.jpg',
          },
          {
            src: 'https://shop.joieriarovira.com/6494-thickbox_default/festina-mademoiselle-watch-f203382-pink-steel-case-swarovski-crystals.jpg',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>