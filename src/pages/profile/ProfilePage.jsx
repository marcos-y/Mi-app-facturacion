import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import Preferences from "./Preferences";
import ActivityLog from "./ActivityLog";

const ProfilePage = () => {

  const user = {
    name: "Juan",
    email: "juan@email.com",
    role: "Administrador"
  };

  return (
    <div style={{ marginLeft: '220px', borderRadius: '5px', border:'solid', maxWidth:'600px', padding: '30px' }}>
      
      <h1>Mi Perfil</h1>

      <ActivityLog />

      <ProfileInfo user={user} />

      <Preferences />

      <ChangePassword />

    </div>
  );
};

export default ProfilePage;