import create from "zustand";

import apiCall from "../../api";

const usePokemonsStore = create((set, get) => ({
  getPokemons: async () => {
   try {
    set({ isLoading: false, errorMessage: "", hasError: false });
    console.log("Llamando pokemons desde zustand");
    const pokemonsResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=100" });
    set({ pokemons: pokemonsResult.results });
   } catch (error) {
    set({ pokemons: [], hasError: true, errorMessage: "Algo ha pasado, verifica tu conexion" });
   } finally {
    set({ isLoading: false });
   }
  },
  pokemons: [],
  getPokemonDetail: async (id) => {
   if (!id) return;

   try {
    set({ isLoading: false, errorMessage: "", hasError: false });
    console.log("Llamando pokemons desde zustand");

    const pokemonDetail = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` });
    set({ pokemonDetail });
   } catch (error) {
    set({ hasError: true, errorMessage: "Algo ha pasado, verifica tu conexion", pokemonDetail: {} });
   } finally {
    set({ isLoading: false });
   }
  },
  pokemonDetail: {},
  isLoading: false,
  errorMessage: "",
  hasError: false,
}));

export default usePokemonsStore;