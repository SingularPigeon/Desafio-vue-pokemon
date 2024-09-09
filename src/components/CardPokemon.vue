<template>
  <div class="card text-center" style="width: 10rem">
    <img
      :src="imageUrl"
      class="card-img-top"
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
      <p v-else>{{ pokemonName }}</p>
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
  methods: {
    checkGuess() {
      if (this.guess.toLowerCase() === this.pokemonName.toLowerCase()) {
        this.discovered = true
        this.$emit('discovered-pokemon')
      } else {
        alert('Nombre incorrecto')
      }
    }
  }
}
</script>

<style scoped>
.blur-grayscale-filter {
  filter: blur(5px) grayscale(1);
}
</style>
