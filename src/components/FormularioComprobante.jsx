import React, { useState } from "react";

const FormularioComprobante = ({ onSubmit }) => {

  const [numero, setNumero] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setNumero(value);
      setError("");
    }
  };

  /*
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!numero) {
      setError("El número de comprobante es obligatorio");
      return;
    }

    if (numero.length < 5) {
      setError("Debe tener al menos 5 dígitos");
      return;
    }

    setError("");

    if (onSubmit) {
      onSubmit(numero);
    } else {
      console.log("Número enviado:", numero);
    }

    setNumero("");
  };
  */

  return (
      <div style={{ marginTop:'20px' }} className="card shadow-sm">
        <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Número de comprobante</label>
              <input
                type="text"
                className={`form-control ${error ? "is-invalid" : ""}`}
                value={numero}
                onChange={handleChange}
                placeholder="Ej: 12345"
              />
              {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
      </div>
  );
};

export default FormularioComprobante;