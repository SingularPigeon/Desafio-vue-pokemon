<template>
  <div class="card text-center h-100 bg-transparent border-0">
    <img
      :src="imageUrl"
      class="card-img-top h-100"
      :class="{ 'blur-grayscale-filter': !discovered }"
      alt="pokemon"
    />
    <div class="card-body">
      <input
        v-if="!discovered"
        v-model="guess"
        @keyup.enter="checkGuess"
        type="text"
        class="form-control mb-2"
        placeholder="Adivina el nombre"
      />
      <button v-if="!discovered" @click="checkGuess" class="btn btn-primary">Descubrir</button>
      <p :style="nameTextColor" v-else>{{ pokemonName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemonName: String,
    imageUrl: String
  },
  data() {
    return {
      guess: '',
      discovered: false
    }
  },
  computed: {
    nameTextColor() {
      return {
        color: '#385CA9',
        fontFamily: 'Bangers',
        fontSize: '24px'
      }
    }
  },
  methods: {
    checkGuess() {
      if (this.guess.toLowerCase().trim() === this.pokemonName.toLowerCase()) {
        this.discovered = true
        this.$emit('discovered-pokemon', this.pokemonName) // Emite el nombre del Pokémon descubierto
      } else {
        alert('Nombre incorrecto')
      }
    }
  }
}
</script>
<style scoped>
.blur-grayscale-filter {
  filter: blur(8px) grayscale(100%);
}
.card {
  width: 12rem;
}
.poke-name {
  font-family: 'Bangers';
}
</style>
