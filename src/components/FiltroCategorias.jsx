import React from "react";

const FiltroCategorias = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form action="">
        <div className="campo">
          <label htmlFor="">Filtrar por Categoría</label>
          <select
            name=""
            id=""
            onChange={(e) => setFiltro(e.target.value)}
            value={filtro}
          >
            <option value="">-- Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FiltroCategorias;
