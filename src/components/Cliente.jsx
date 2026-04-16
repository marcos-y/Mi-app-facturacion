import React from "react";

const Cliente = ({ cliente }) => {
    
  if (!cliente) {
    return <p>No hay datos del cliente</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Información del Cliente</h2>

      {/* Datos básicos */}
      <section style={styles.section}>
        <h3>🧾 Datos Básicos</h3>
        <p><strong>Nombre / Razón Social:</strong> {cliente.nombre}</p>
        <p><strong>Documento:</strong> {cliente.documento}</p>
        <p><strong>Fecha de Alta:</strong> {cliente.fechaAlta}</p>
      </section>

      {/* Contacto */}
      <section style={styles.section}>
        <h3>📍 Contacto</h3>
        <p><strong>Dirección:</strong> {cliente.direccion}</p>
        <p><strong>Teléfono:</strong> {cliente.telefono}</p>
        <p><strong>Email:</strong> {cliente.email}</p>
      </section>

      {/* Información fiscal */}
      <section style={styles.section}>
        <h3>💳 Información Fiscal</h3>
        <p><strong>Condición IVA:</strong> {cliente.condicionIVA}</p>
        <p><strong>Tipo de Comprobante:</strong> {cliente.tipoComprobante}</p>
        <p><strong>N° Impositivo:</strong> {cliente.numeroImpositivo}</p>
      </section>

      {/* Condiciones comerciales */}
      <section style={styles.section}>
        <h3>💰 Condiciones Comerciales</h3>
        <p><strong>Forma de Pago:</strong> {cliente.formaPago}</p>
        <p><strong>Plazo:</strong> {cliente.plazoPago}</p>
        <p><strong>Límite de Crédito:</strong> ${cliente.limiteCredito}</p>
        <p><strong>Lista de Precios:</strong> {cliente.listaPrecios}</p>
      </section>

      {/* Historial */}
      <section style={styles.section}>
        <h3>📊 Historial</h3>
        <p><strong>Facturas:</strong> {cliente.facturas?.length || 0}</p>
        <p><strong>Pagos:</strong> {cliente.pagos?.length || 0}</p>
        <p><strong>Deuda:</strong> ${cliente.deuda}</p>
      </section>

      {/* Extras */}
      <section style={styles.section}>
        <h3>🧠 Extras</h3>
        <p><strong>Clasificación:</strong> {cliente.clasificacion}</p>
        <p><strong>Vendedor:</strong> {cliente.vendedor}</p>
        <p><strong>Observaciones:</strong> {cliente.observaciones}</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "20px auto",
    fontFamily: "Arial",
  },
  section: {
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "1px solid #eee",
  },
};

export default Cliente;