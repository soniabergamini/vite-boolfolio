<script>
import AppHeader from './components/AppHeader.vue'

// import { store } from './data/store';
// import axios from 'axios';

export default {
  name: "App",
  components: {
    AppHeader
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
  <main class="h-[calc(100vh-80px)]">
    <router-view class="h-full"></router-view>
    <!-- <AppMain /> -->
  </main>
</template>

<style lang="scss" scoped></style>
