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
  <div class="row pt-5">
    <div class="col-md-3 mb-5" v-for="pokemon in pokemones" :key="pokemon.name">
      <CardPokemon
        :pokemonName="pokemon.name"
        :imageUrl="pokemon.image"
        @discovered-pokemon="onDiscovered"
      />
    </div>
  </div>
</template>
