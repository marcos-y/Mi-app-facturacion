import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import Preferences from "./Preferences";
import ActivityLog from "./ActivityLog";
import AvatarUpload from "./AvatarUpload";

const ProfilePage = () => {
  const user = {
    name: "Juan",
    email: "juan@email.com",
    role: "Administrador"
  };

  return (
    <div style={{ marginLeft: '220px' }}>
      <h1>Mi Perfil</h1>

      <AvatarUpload />

      <ProfileInfo user={user} />

      <Preferences />

      <ChangePassword />

      <ActivityLog />
    </div>
  );
};

export default ProfilePage;