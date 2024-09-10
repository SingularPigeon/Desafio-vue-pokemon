import axios from 'axios'

class PokeService {
  constructor() {
    this.pokemones = []
  }

  async fetchPokemones() {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
      const { data } = await axios.get(url)

      // Mapeamos los resultados para obtener el nombre y la URL de la imagen de cada Pokémon
      this.pokemones = await Promise.all(
        data.results.map(async (pokemon) => {
          const { data: pokemonData } = await axios.get(pokemon.url)
          return {
            name: pokemonData.name,
            image:
              pokemonData.sprites.other.dream_world.front_default ||
              pokemonData.sprites.front_default // Fallback a front_default
          }
        })
      )

      return this.pokemones
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default new PokeService()
