import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Invoices from "./pages/Invoices";
import NewSale from "./pages/NewSale";
import Clients from "./pages/Clients";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import ProfilePage from "./pages/profile/ProfilePage";
import SettingsPage from "./pages/settings/SettingsPage";
import Compras from "./pages/Compras.";
import TodaySale from "./pages/TodaySale";
import MonthSale from "./pages/MonthSale";
import Devolutions from "./pages/Devolutions";
import TicketProm from "./pages/TicketProm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/new-sale" element={<NewSale />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/today-sale" element={<TodaySale />} />
          <Route path="/month-sale" element={<MonthSale />} />
          <Route path="/devolutions" element={<Devolutions />} />
          <Route path="/ticket" element={<TicketProm />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;