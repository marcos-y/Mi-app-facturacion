import { useState } from "react";
import Selector from "../../components/ui/Select";

const Preferences = () => {

  const [theme, setTheme] = useState("light");

  const themes = [
    {id : 1, nombre: 'claro'},
    {id : 2, nombre: 'oscuro'},
  ]

  return (
    <div>
      <h2>Preferencias</h2>

      <label>Tema</label>

       <Selector
          options={themes}
          value={theme}
          onChange={setTheme}
          title="Tema"
          label="Seleccione un tema"
        />

    </div>
  );
};

export default Preferences;