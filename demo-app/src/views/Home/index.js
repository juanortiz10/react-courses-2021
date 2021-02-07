import { useContext, useEffect } from "react";

import PokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

export default function Home() {
 const { getPokemons, pokemons, isLoading , hasError, errorMessage } = useContext(PokemonContext);
 
 useEffect(() => {
  getPokemons().catch(null);
 }, []);

 if (isLoading) return <Loading title="Cargando resultados..." />;

 return (
   <>
    {hasError ? <ErrorMessage message={errorMessage} /> : <PokemonList pokemons={pokemons} />}
   </>
 );
}