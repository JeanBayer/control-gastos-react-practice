import { useState, useEffect } from "react";
import FiltroCategorias from "./FiltroCategorias";
import FiltroMes from "./FiltroMes";

const Filtros = ({ filtro, setFiltro, filtroMes, setFiltroMes }) => {
  return (
    <>
      <FiltroMes setFiltroMes={setFiltroMes} filtroMes={filtroMes}></FiltroMes>
      <FiltroCategorias
        filtro={filtro}
        setFiltro={setFiltro}
      ></FiltroCategorias>
    </>
  );
};

export default Filtros;
