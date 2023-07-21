<script>

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
  <section class="pt-3 h-full">
    
    <!-- Carousel -->
    <v-carousel cycle show-arrows="hover" hide-delimiters class="h-full carousel">
        <template v-slot:prev="{ props }">
          <v-btn variant="tonal" color="light" @click="props.onClick"><i class="fa-solid fa-chevron-left text-white fa-xl"></i></v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn variant="tonal" color="light" @click="props.onClick"><i class="fa-solid fa-chevron-right text-white fa-xl"></i></v-btn>
        </template>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" cover></v-carousel-item>
    </v-carousel>

    <!-- Button Redirect On Cick to Route 'projects' -->
    <router-link :to="{name: 'projects'}" class="absolute z-10 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
      <v-btn variant="flat" density="default" size="x-large" rounded="xs" class="hover:text-primary-blu font-bold px-3 py-1 bg-primary-blu hover:bg-white text-slate-50	">ALL PROJECTS</v-btn>
    </router-link>

  </section>  
</template>
    

<style lang="scss" scoped>
@use '../style.scss' as *;

.carousel, .carousel div{
  height: 100% !important;
}
</style>