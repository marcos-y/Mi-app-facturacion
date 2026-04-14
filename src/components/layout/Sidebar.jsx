import '../../styles/global.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item"><a href="/home">Home</a></li>
        <li className="sidebar-item"><a href="/dashboard">Dashboard</a></li>
        <li className="sidebar-item"><a href="/clients">Clients</a></li>
        <li className="sidebar-item"><a href="/invoices">Invoices</a></li>
        <li className="sidebar-item"><a href="/new-sale">Nueva venta</a></li>
        <li className="sidebar-item"><a href="/inventory">Inventory</a></li>
        <li className="sidebar-item"><a href="/compras">Compras</a></li>
        <li className="sidebar-item"><a href="/reports">Reportes</a></li>
        <li className="sidebar-item"><a href="/profile">Profile</a></li>
        <li className="sidebar-item"><a href="/settings">Settings</a></li>
        <li className="sidebar-item"><a href="/login">Logout</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;


