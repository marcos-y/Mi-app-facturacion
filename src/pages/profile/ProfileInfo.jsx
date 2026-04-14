import Button from "../../components/ui/Button";

const ProfileInfo = ({ user }) => {
  return (
    <div>
      <h2>Información personal</h2>

      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Rol: {user.role}</p>

      <Button type="success" text='Editar Perfil'/>
    </div>
  );
};

export default ProfileInfo;