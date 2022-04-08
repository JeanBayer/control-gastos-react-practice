import React from "react";

const FiltroMes = ({ filtroMes, setFiltroMes }) => {
  return (
    <div
      className="filtros sombra contenedor"
      style={{
        marginBottom: "2rem",
      }}
    >
      <form action="">
        <div className="campo">
          <label htmlFor="">Filtrar por Mes</label>
          <input
            type="month"
            name=""
            id=""
            value={filtroMes}
            onChange={(e) => {
              setFiltroMes(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default FiltroMes;
