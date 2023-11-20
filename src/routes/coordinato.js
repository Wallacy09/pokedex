export const goHomePage = (navigate) => {
  navigate("/");
};

export const goPokedex = (navigate) => {
  navigate("/pokedex");
};

export const goDetails = (navigate, pokemon) => {
  navigate(`/detalhes/${pokemon.name}`);
};
