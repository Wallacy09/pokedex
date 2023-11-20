import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/Home";
import Details from "../pages/Details/Details";
import Pokedex from "../pages/Pokedex/Pokedex";
import Error from "../pages/Erro/Error";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/detalhes/:name" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
