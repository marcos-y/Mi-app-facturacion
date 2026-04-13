import { useState } from "react";


const CompanySettings = () => {

  const [company, setCompany] = useState({
    name: "",
    taxId: "",
    address: "",
    phone: ""
  });

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Datos de Empresa</h2>

      <input
        name="name"
        placeholder="Nombre empresa"
        value={company.name}
        onChange={handleChange}
      />

      <input
        name="taxId"
        placeholder="CUIT"
        value={company.taxId}
        onChange={handleChange}
      />

      <input
        name="address"
        placeholder="Dirección"
        value={company.address}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Teléfono"
        value={company.phone}
        onChange={handleChange}
      />

      <button>Guardar</button>
    </div>
  );
};

export default CompanySettings;