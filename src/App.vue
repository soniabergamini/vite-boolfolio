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
  <header>
    <AppHeader />
  </header>
  <main class="h-[calc(100vh-230px)] overflow-y-scroll">
    <router-view></router-view>
  </main>
  <footer class="h-[150px]">
    <section class="bg-[#1a2233] h-full py-2 flex justify-center">
        <FooterContactForm />
    </section>
  </footer>
</template>

<style lang="scss">
  
</style>
