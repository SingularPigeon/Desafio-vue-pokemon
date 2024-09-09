<template>
  <div>
    <ContadorComponent :count="discoveredCount" />
    <PokemonList @update-count="updateCount" />
  </div>
</template>

<script>
import ContadorComponent from '@/components/ContadorComponent.vue'
import PokemonList from '@/components/PokemonList.vue'

export default {
  components: {
    ContadorComponent,
    PokemonList
  },
  data() {
    return {
      discoveredCount: 0
    }
  },
  methods: {
    updateCount(newCount) {
      this.discoveredCount = newCount
    }
  }
}
</script>
