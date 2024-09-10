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
      discoveredList: [] // Almacena los Pokémon descubiertos
    }
  },
  computed: {
    discoveredCount() {
      return this.discoveredList.length
    }
  },
  methods: {
    addDiscovered(pokemonName) {
      if (!this.discoveredList.includes(pokemonName)) {
        this.discoveredList.push(pokemonName) // Añade el Pokémon a la lista
      }
    }
  }
}
</script>
<template>
  <div class="container">
    <div class="row justify-content-center">
      <ContadorComponent :count="discoveredCount" />
    </div>
    <PokemonList @discovered="addDiscovered" />
  </div>
</template>
