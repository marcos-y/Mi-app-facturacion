import Button from "../../components/ui/Button";

const UserSettings = () => {

  const users = [
    { id: 1, name: "Juan", role: "Administrador" },
    { id: 2, name: "Maria", role: "Vendedor" }
  ];

  return (
    <div style={{ maxWidth: '500px', marginTop: '20px' }}>
      <h2>Usuarios</h2>

      <Button type='primary' text="Crear usuario"/>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rol</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserSettings;