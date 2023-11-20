import { useLocation, useNavigate } from "react-router-dom";
import { goHomePage, goPokedex } from "../../routes/coordinato";
import { Container, CapturarOverlay } from "./Header.style";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import imgPrincipal from "../../services/assets/principal.png";
import Capturar from "../../services/assets/Capturar.svg"
import Excluir from "../../services/assets/Excluir.svg"

function Header() {

  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { pokedetails, addToPokedex, removeFromPokedex, capturar, setCapturar, excluir, setExcluir, pokedex } = context

  const handleAddToPokedexClick = () => {
    addToPokedex(pokedetails[0]); 
    setCapturar(true);
    setTimeout(() => {
      setCapturar(false);
    }, 1000); 
  };

  const handleRemoveFromPokedexClick = () => {
    removeFromPokedex(pokedetails[0]);

    setExcluir(true);
    setTimeout(() => {
      setExcluir(false);
    }, 1000) 
  };

  const estaNaPokedex = () => {
    return pokedetails.length > 0 && pokedex.some((pokemon) => pokemon.name === pokedetails[0].name);
  };


  let headerContent;

  if (location.pathname === "/") {
    headerContent = (
      <>
        <button onClick={() => goPokedex(navigate)} className="buttonDireita">
          <p>Pokédex</p>
        </button>
        <img className="logo" src={imgPrincipal} alt="" />
      </>
    );
  } else if (location.pathname === "/pokedex") {
    headerContent = (
      <>
        <button onClick={() => goHomePage(navigate)} className="buttonEsquerda">
          <p>Todos Pokémons</p>
        </button>
        <img className="logo" src={imgPrincipal} alt="" />
      </>
    );
  }

  else if (location.pathname.startsWith("/detalhes/")) {
    const pokemonEstaNaPokedex = estaNaPokedex();

    headerContent = (
      <>
        <button onClick={() => goHomePage(navigate)} className="buttonEsquerda">
          <p>Todos Pokémons</p>
        </button>

        {pokemonEstaNaPokedex ? (
          <button onClick={handleRemoveFromPokedexClick} className="excluir">
            <p>Excluir</p>
          </button>
        ) : (
          <button onClick={handleAddToPokedexClick} className="adicionar">
            <p>Adicionar</p>
          </button>
        )}

        <img className="logo" src={imgPrincipal} alt="" />
      </>
    );
  }

  else {
    headerContent = (
      <>
        <button onClick={() => goHomePage(navigate)} className="inexistente">
          <p>Voltar para a página inicial</p>
        </button>
        <p>Página inexistente</p>
      </>
    );

  }

  return (
    <Container>
      {headerContent}
      {capturar && (
        <CapturarOverlay className="CapturarOverlay">
          <img src={Capturar} alt="Capturando" />
        </CapturarOverlay>
      )}
      {excluir && (
        <CapturarOverlay className="RemoverOverlay">
          <img src={Excluir} alt="Excluir" />
        </CapturarOverlay>
      )}
    </Container>
  );
}

export default Header;
