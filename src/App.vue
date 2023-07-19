<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: "App",
  components: {
    AppHeader
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main class="h-[calc(100vh-80px)]">
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped></style>
