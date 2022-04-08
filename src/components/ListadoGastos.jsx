import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
  filtroMes,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro || filtroMes ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? "Gastos Filtrados"
              : "No hay gastos en esta categoría"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            ></Gasto>
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay gastos aún"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            ></Gasto>
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
