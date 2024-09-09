<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-3" v-for="(pokemon, index) in pokemones" :key="index">
        <CardPokemon
          :pokemonName="pokemon.name"
          :imageUrl="getPokemonImage(pokemon.url)"
          @discovered-pokemon="incrementCounter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PokeService from '@/services/PokeService'
import CardPokemon from '@/components/CardPokemon.vue'

export default {
  components: { CardPokemon },
  data() {
    return {
      pokemones: [],
      discoveredCount: 0
    }
  },
  async created() {
    this.pokemones = await PokeService.fetchPokemones()
  },
  methods: {
    getPokemonImage(url) {
      const id = url.split('/').filter(Boolean).pop()
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    },
    incrementCounter() {
      this.discoveredCount++
    }
  }
}
</script>
