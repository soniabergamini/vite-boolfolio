<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main class="h-[calc(100vh-230px)] overflow-y-scroll">
    <router-view></router-view>
  </main>
  <footer class="h-[150px]">
    <AppFooter />
  </footer>
</template>

<style lang="scss">
  
</style>
