const ProfileInfo = ({ user }) => {
  return (
    <div>
      <h2>Información personal</h2>

      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Rol: {user.role}</p>

      <button>Editar perfil</button>
    </div>
  );
};

export default ProfileInfo;