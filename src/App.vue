<script>
import { RouterView } from 'vue-router'
import PokeNavBar from '@/components/PokeNavBar.vue'
import PokeFooter from '@/components/PokeFooter.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    PokeNavBar,
    HeaderComponent,
    PokeFooter,
    RouterView
  }
}
</script>

<template>
  <PokeNavBar />
  <HeaderComponent />
  <RouterView />
  <PokeFooter />
</template>

<style scoped></style>
