import Card from "../../components/card/Card";
import { PokemonsContainer, Title, Cards } from "./HomeStyle";
import Header from "../../components/header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


function HomePage() {
  const context = useContext(GlobalContext)
  const { pokelist, pokedex } = context;

  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );


  return (
    <>
      <Header />
      <PokemonsContainer>
        <Title>Todos Pokémons</Title>
        <Cards>
          {filteredPokelist().map((pokemon) => (
            <Card
              key={pokemon.url}
              pokemonUrl={pokemon.url}
            />
          ))}
        </Cards>
      </PokemonsContainer>
    </>
  );
}

export default HomePage;
