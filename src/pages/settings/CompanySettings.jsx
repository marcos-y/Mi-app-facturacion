import { useState } from "react";
import Button from "../../components/ui/Button";
import { Form } from "react-bootstrap";

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
    <div style={{ maxWidth: '500px', marginTop:'20px', border:'solid', borderRadius:'10px', borderColor:'black', padding:'10px' }}>
      <h2>Datos de Empresa</h2>

      <Form.Group>
        <Form.Label>Nombre empresa</Form.Label>
        <Form.Control
          name="nombre"
          value={company.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>CUIT</Form.Label>
        <Form.Control
          name="taxI"
          value={company.taxId}
          onChange={handleChange}
          required
        />
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          name="address"
          value={company.address}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group style={{ marginBottom: '5px'}}>
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          name="phone"
          value={company.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button type='primary' text="Guardar" />
    </div>
  );
};

export default CompanySettings;