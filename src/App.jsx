import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Recover from './pages/Recover';
import DashboardLayout from './components/DashboardLayout';
import {
  adminMenu, AdminResumen, AdminUsuarios, AdminRutinas, AdminRecetas, AdminConfig,
} from './pages/AdminSections';
import {
  clientMenu, ClientInicio, ClientRutinas, ClientAlimentacion, ClientProgreso, ClientPerfil,
} from './pages/ClientSections';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/acceso" element={<Auth />} />
      <Route path="/recuperar" element={<Recover />} />

      <Route path="/admin" element={<DashboardLayout role="admin" userName="Admin" menu={adminMenu} />}>
        <Route index element={<AdminResumen />} />
        <Route path="usuarios" element={<AdminUsuarios />} />
        <Route path="rutinas" element={<AdminRutinas />} />
        <Route path="recetas" element={<AdminRecetas />} />
        <Route path="configuracion" element={<AdminConfig />} />
      </Route>

      <Route path="/cliente" element={<DashboardLayout role="cliente" userName="Camila" menu={clientMenu} />}>
        <Route index element={<ClientInicio />} />
        <Route path="rutinas" element={<ClientRutinas />} />
        <Route path="alimentacion" element={<ClientAlimentacion />} />
        <Route path="progreso" element={<ClientProgreso />} />
        <Route path="perfil" element={<ClientPerfil />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
