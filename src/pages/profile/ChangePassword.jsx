import { useState } from "react";
import Button from "../../components/ui/Button";
import { Form } from "react-bootstrap";

const ChangePassword = () => {

  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Cambiar contraseña</h2>

      <Form.Group style={{ marginBottom:'20px' }}>
            <Form.Label>Cambiar contraseñal</Form.Label>
            <Form.Control
              name="Nueva contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
      </Form.Group>

      <Button type="primary" text='Actualizar contraseña' />
    </div>
  );
};

export default ChangePassword;