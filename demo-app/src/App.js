import './App.css';

import Routes from "./routes";
import PokemonsProvider from "./context/pokemons/Provider";

function App() {
  return (
    <PokemonsProvider>
      <Routes />
    </PokemonsProvider>
  );
}

export default App;
