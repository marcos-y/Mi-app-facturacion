import { useState } from "react";

const Preferences = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <h2>Preferencias</h2>

      <label>Tema</label>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Claro</option>
        <option value="dark">Oscuro</option>
      </select>
    </div>
  );
};

export default Preferences;