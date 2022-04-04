const ControlPresupuesto = ({presupuesto}) => {
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString("en-US", {style: "currency", currency: "USD"});
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Grafica aqui</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>
        </div>
    </div>
  );
};

export default ControlPresupuesto;
