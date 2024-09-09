import axios from 'axios'

class PokeService {
  constructor() {
    this.pokemones = []
  }

  async fetchPokemones() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    this.pokemones = response.data.results
    return this.pokemones
  }
}

export default new PokeService()
