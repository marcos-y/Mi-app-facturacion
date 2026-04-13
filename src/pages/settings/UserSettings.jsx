const UserSettings = () => {
  const users = [
    { id: 1, name: "Juan", role: "Administrador" },
    { id: 2, name: "Maria", role: "Vendedor" }
  ];

  return (
    <div>
      <h2>Usuarios</h2>

      <button>Crear usuario</button>

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