import { useState } from "react";
import Button from "../../components/ui/Button";
import { Form } from "react-bootstrap";

const BillingSettings = () => {

  const [prefix, setPrefix] = useState("0001");
  const [autoNumber, setAutoNumber] = useState(true);

  return (
    <div style={{  maxWidth: '500px', marginTop: '20px' }}>
      <h2>Configuración de Facturación</h2>

      <Form.Group>
        <Form.Label>Prefijo de factura</Form.Label>
        <Form.Control
          name="nombre"
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
          required
        />
      </Form.Group>

      <label>
        <input
          type="checkbox"
          checked={autoNumber}
          onChange={() => setAutoNumber(!autoNumber)}
        />
        Numeración automática
      </label>

      <Button type='primary' text="Guardar" />
    </div>
  );
};

export default BillingSettings;