import { Outlet } from "react-router-dom";
import Sidebar from '../Sidebar';
import '../../styles/global.css';

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div>
        {/*<Navbar />*/}
        <Outlet />  {/* Aquí se renderizan las páginas hijas */}
      </div>
    </div>
  );
};

export default Layout;