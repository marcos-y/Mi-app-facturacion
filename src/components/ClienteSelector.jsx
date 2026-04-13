import React, { useState } from "react";

const ClienteSelector = ({ clientes = [], onSelect }) => {

  const [query, setQuery] = useState("");
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const resultados = clientes.filter((c) =>
    `${c.nombre} ${c.documento}`.toLowerCase().includes(query.toLowerCase())
  );

  const seleccionarCliente = (cliente) => {
    setClienteSeleccionado(cliente);
    setQuery("");
    onSelect(cliente);
  };

  const consumidorFinal = () => {
    const cf = { nombre: "Consumidor Final", documento: "" };
    setClienteSeleccionado(cf);
    onSelect(cf);
  };

  return (
    <div style={{ width: "350px" }}>

      {!clienteSeleccionado && (
        <>
          <input
            type="text"
            placeholder="Buscar nombre, DNI o CUIT..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
          />

          {query && (
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "6px",
                marginTop: "4px"
              }}
            >
              {resultados.map((cliente) => (
                <div
                  key={cliente.id}
                  onClick={() => seleccionarCliente(cliente)}
                  style={{
                    padding: "8px",
                    cursor: "pointer"
                  }}
                >
                  {cliente.nombre} - {cliente.documento} - {cliente.iva}
                </div>
              ))}

              {resultados.length === 0 && (
                <div style={{ padding: "8px" }}>
                  No se encontraron clientes
                </div>
              )}
            </div>
          )}

          <button
            onClick={consumidorFinal}
            style={{ marginTop: "8px" }}
          >
            Consumidor Final
          </button>
        </>
      )}

      {clienteSeleccionado && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "6px",
            marginTop: "6px"
          }}
        >
          <strong>{clienteSeleccionado.nombre}</strong>
          <div>{clienteSeleccionado.documento}</div>

          <button
            onClick={() => setClienteSeleccionado(null)}
            style={{ marginTop: "6px" }}
          >
            Cambiar cliente
          </button>
        </div>
      )}
    </div>
  );
};

export default ClienteSelector;