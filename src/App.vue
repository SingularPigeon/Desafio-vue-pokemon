<script>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    RouterView
  }
}
</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style scoped></style>
