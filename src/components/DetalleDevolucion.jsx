const DetalleDevolucion = ({ data }) => {

  return (
    <div style={styles.container}>
      <h2>📄 Devolución #{data.id}</h2>

      {/* Datos principales */}
      <section style={styles.section}>
        <p><strong>Cliente:</strong> {data.nombre} ({data.documento})</p>
        <p><strong>Factura:</strong> {data.numero}</p>
        <p><strong>Fecha compra:</strong> {data.fecha}</p>
        <p><strong>Usuario:</strong> {data.usuario}</p>
        <p><strong>Estado:</strong> {data.estado}</p>
      </section>

      {/* Productos */}
      <section style={styles.section}>
        <h3>📦 Productos devueltos</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Producto</th>
              <th>Cant</th>
              <th>Precio</th>
              <th>Subtotal</th>
              <th>Motivo</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.producto}</td>
                <td>{item.cantidad}</td>
                <td>${item.precio_unitario}</td>
                <td>${item.subtotal}</td>
                <td>{item.motivo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Resumen */}
      <section style={styles.section}>
        <h3>💰 Resumen</h3>
        <p>Subtotal: ${data.resumenSub}</p>
        <p>Impuestos: ${data.resumenImp}</p>
        <p><strong>Total: ${data.resumenTot}</strong></p>
      </section>

      {/* Reintegro */}
      <section style={styles.section}>
        <h3>💳 Reintegro</h3>
        <p>Método: {data.reintegroMetodo}</p>
        <p>Estado: {data.reintegroEstado}</p>
        <p>Referencia: {data.reintegroRef}</p>
        <p>Fecha: {data.reintegroFec}</p>
      </section>

      {/* Observaciones */}
      <section style={styles.section}>
        <h3>📝 Observaciones</h3>
        <p>{data.observaciones}</p>
      </section>

      {/* Auditoría */}
      <section style={styles.section}>
        <h3>📊 Auditoría</h3>
        <p>Creado: {data.auditoriaCreado.creado_en}</p>
        <p>Actualizado: {data.auditoriaActual}</p>

        <ul>
          {data.auditoriaHisto.map((h, i) => (
            <li key={i}>
              {h.fecha} - {h.accion} ({h.usuario})
            </li>
          ))}
        </ul>
      </section>

      {/* Acciones */}
      <div style={styles.actions}>
        <button>Editar</button>
        <button>Anular</button>
        <button>Imprimir</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fff",
  },
  section: {
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  actions: {
    display: "flex",
    gap: "10px",
  },
};

export default DetalleDevolucion;