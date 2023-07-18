<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

// import { store } from './data/store';
// import axios from 'axios';

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      // store,
    }
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <router-view></router-view>
    <!-- <AppMain /> -->
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss" scoped></style>
