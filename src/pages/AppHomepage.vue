<script>
// import axios from 'axios'
// import MainProjectCard from './MainProjectCard.vue';

  export default {
    name: "AppHomepage",
    data () {
      return {
        items: [
          { src: 'https://picsum.photos/id/923/900/600', },
          { src: 'https://picsum.photos/id/433/900/600',},
          { src: 'https://picsum.photos/id/659/900/600',},
          { src: 'https://picsum.photos/id/407/900/600',},
        ],
      }
    },
  }
</script>

<template>
    <v-carousel cycle show-arrows="hover" height="700" hide-delimiters>
        <template v-slot:prev="{ props }">
          <v-btn variant="tonal" color="light" @click="props.onClick"><i class="fa-solid fa-chevron-left text-white fa-xl"></i></v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn variant="tonal" color="light" @click="props.onClick"><i class="fa-solid fa-chevron-right text-white fa-xl"></i></v-btn>
        </template>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" cover></v-carousel-item>
    </v-carousel>

</template>
    

<style lang="scss" scoped>
@use '../variables.scss' as *;

</style>