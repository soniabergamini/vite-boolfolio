<script>
import AppHeader from './components/AppHeader.vue';
import FooterContactForm from './components/FooterContactForm.vue';


export default {
  name: "App",
  components: {
    AppHeader,
    FooterContactForm
  }
}
</script>

<template>
  <header class="shadow-md">
    <AppHeader />
  </header>
  <main class="h-[calc(100vh-230px)] overflow-y-scroll">
    <router-view></router-view>
  </main>
  <footer class="h-[150px] bg-[#1a2233]" >
    <section class="h-full py-2 flex justify-center" 
    :class="{ 'bg-[url(./assets/goldpoints.png)]' : this.$route.name === 'error' }">
        <FooterContactForm />
    </section>
  </footer>
</template>

<style lang="scss">

</style>
