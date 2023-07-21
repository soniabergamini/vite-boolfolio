<script>

  export default {
    name: "AppError",
    data () {
      return {
        errorText: 'Something went wrong while loading projects. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!',
        errorMessage: {
            401: 'Unauthorized',
            404: 'Page Not Found',
            500: 'Internal Server Error',
            504: 'Gateway Timeout' 
        }
      }
    },
  }
</script>

<template>
    <!-- Error Message with Custom Background -->
    <section class="bg-gray-900 h-full">
        <div class="h-full bg-[url('../assets/goldpoints.png')] bg-cover">
            <div class="h-full bg-[url('../assets/errorwallpaper.png')] bg-cover bg-bottom flex items-center justify-evenly text-center">
                <div>
                    <h3 class="font-bold text-[#FBAB1B] text-3xl">Houston, </h3>
                    <h3 class="font-bold text-[#FBAB1B] text-3xl mb-[-40px] bg-gray-900">we have a problem. </h3>
                    <h1 class="font-bold text-white text-[180px] tracking-widest">{{ $route.params.code }}</h1>
                    <h2 class="font-bold text-[#FBAB1B] text-5xl mt-[-40px] bg-gray-900">{{errorMessage[$route.params.code]}}</h2>
                </div>
            </div>
        </div>
        <!-- <v-alert :title="`Error ${$route.params.code}: ${$route.params.message}`" :text="errorText" type="error"></v-alert> -->
    </section>
    
</template>
    

<style lang="scss" scoped>
@use '../style.scss' as *;
h1 {
  -webkit-text-stroke: 3px #FBAB1B;
}
</style> 

<!-- bg-black/[.1] -->