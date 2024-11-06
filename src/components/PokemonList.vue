<script>
import PokeService from '@/services/PokeService'
import CardPokemon from '@/components/CardPokemon.vue'

export default {
  components: { CardPokemon },
  data() {
    return {
      pokemones: []
    }
  },
  async created() {
    this.pokemones = await PokeService.fetchPokemones()
  },
  methods: {
    onDiscovered(pokemonName) {
      this.$emit('discovered', pokemonName) // Reenvía el evento con el nombre del Pokémon
    }
  }
}
</script>
<template>
  <div class="row d-flex flex-row flex-wrap pt-5">
    <div
      v-for="pokemon in pokemones"
      :key="pokemon.name"
      class="col-sm-6 col-md-4 mb-5 d-flex flex-column justify-content-center align-items-center g-1"
    >
      <CardPokemon
        :pokemonName="pokemon.name"
        :imageUrl="pokemon.image"
        @discovered-pokemon="onDiscovered"
      />
    </div>
  </div>
</template>
