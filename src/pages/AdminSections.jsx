import { useState } from 'react';
import {
  Box, Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody, Chip, Avatar,
  Stack, Button, LinearProgress, TextField, InputAdornment, IconButton, Switch, FormControlLabel, Divider,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SettingsIcon from '@mui/icons-material/Settings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { PhotoCard, grid3, PageHead } from '../components/Shared';
import { routines, recipes } from '../data';

export const adminMenu = [
  { label: 'Resumen', icon: <DashboardIcon />, to: '/admin', end: true },
  { label: 'Usuarios', icon: <PeopleIcon />, to: '/admin/usuarios' },
  { label: 'Rutinas', icon: <FitnessCenterIcon />, to: '/admin/rutinas' },
  { label: 'Recetas', icon: <RestaurantIcon />, to: '/admin/recetas' },
  { label: 'Configuración', icon: <SettingsIcon />, to: '/admin/configuracion' },
];

const users = [
  { name: 'Camila Restrepo', email: 'camila@correo.com', plan: 'Fuerza', status: 'Activo' },
  { name: 'Andrés Gómez', email: 'andres@correo.com', plan: 'Cardio', status: 'Activo' },
  { name: 'Laura Mejía', email: 'laura@correo.com', plan: 'Yoga', status: 'Pendiente' },
  { name: 'Julián Ospina', email: 'julian@correo.com', plan: 'Nutrición', status: 'Activo' },
  { name: 'Valentina Ruiz', email: 'vale@correo.com', plan: 'HIIT', status: 'Inactivo' },
];

const statusColor = { Activo: 'success', Pendiente: 'warning', Inactivo: 'default' };

function UsersTable({ rows, actions }) {
  return (
    <Box sx={{ overflowX: 'auto' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Usuario</TableCell><TableCell>Plan</TableCell><TableCell>Estado</TableCell>
            {actions && <TableCell align="right">Acciones</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((u) => (
            <TableRow key={u.email} hover>
              <TableCell>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar sx={{ bgcolor: 'secondary.main', color: '#111', width: 34, height: 34, fontSize: 14 }}>{u.name[0]}</Avatar>
                  <Box><Typography variant="body2" fontWeight={600}>{u.name}</Typography><Typography variant="caption" color="text.secondary">{u.email}</Typography></Box>
                </Stack>
              </TableCell>
              <TableCell>{u.plan}</TableCell>
              <TableCell><Chip size="small" label={u.status} color={statusColor[u.status]} /></TableCell>
              {actions && (
                <TableCell align="right">
                  <IconButton size="small"><EditIcon fontSize="small" /></IconButton>
                  <IconButton size="small"><DeleteIcon fontSize="small" /></IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export function AdminResumen() {
  const stats = [
    { label: 'Usuarios activos', value: '1.248', icon: <PeopleIcon /> },
    { label: 'Rutinas publicadas', value: '86', icon: <FitnessCenterIcon /> },
    { label: 'Recetas publicadas', value: '312', icon: <RestaurantIcon /> },
    { label: 'Crecimiento mensual', value: '+12%', icon: <TrendingUpIcon /> },
  ];
  return (
    <>
      <PageHead title="Hola, Admin 👋" subtitle="Así va la plataforma hoy." />
      <Box sx={{ display: 'grid', gap: 2.5, mb: 3, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' } }}>
        {stats.map((s, i) => (
          <Card key={s.label} sx={i === 0 ? { bgcolor: '#111', color: '#fff' } : {}}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="body2" sx={{ opacity: .7 }}>{s.label}</Typography>
                  <Typography variant="h4">{s.value}</Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'secondary.main', color: '#111' }}>{s.icon}</Avatar>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' } }}>
        <Card><CardContent><Typography variant="h6" sx={{ mb: 2 }}>Usuarios recientes</Typography><UsersTable rows={users.slice(0, 4)} /></CardContent></Card>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>Planes más usados</Typography>
            <Stack spacing={2.5}>
              {[['Fuerza en casa', 72], ['Cardio suave', 58], ['Nutrición básica', 45], ['Yoga', 31]].map(([n, v]) => (
                <Box key={n}>
                  <Stack direction="row" justifyContent="space-between"><Typography variant="body2">{n}</Typography><Typography variant="body2" color="text.secondary">{v}%</Typography></Stack>
                  <LinearProgress variant="determinate" value={v} color="secondary" sx={{ height: 8, borderRadius: 4, mt: 0.5 }} />
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export function AdminUsuarios() {
  return (
    <>
      <PageHead title="Usuarios" subtitle="Administra las cuentas de la plataforma." action={<Button variant="contained" color="secondary" startIcon={<AddIcon />}>Nuevo usuario</Button>} />
      <Card>
        <CardContent>
          <TextField size="small" placeholder="Buscar por nombre o correo" fullWidth sx={{ mb: 2, maxWidth: 360 }}
            InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }} />
          <UsersTable rows={users} actions />
        </CardContent>
      </Card>
    </>
  );
}

export function AdminRutinas() {
  return (
    <>
      <PageHead title="Rutinas" subtitle="Crea y edita los ejercicios que ven tus clientes." action={<Button variant="contained" color="secondary" startIcon={<AddIcon />}>Nueva rutina</Button>} />
      <Box sx={grid3}>{routines.map((r) => <PhotoCard key={r.title} item={r} action="Editar rutina" />)}</Box>
    </>
  );
}

export function AdminRecetas() {
  return (
    <>
      <PageHead title="Recetas" subtitle="Administra el recetario saludable." action={<Button variant="contained" color="secondary" startIcon={<AddIcon />}>Nueva receta</Button>} />
      <Box sx={grid3}>
        {recipes.map((r) => (
          <PhotoCard key={r.title} item={r} action="Editar receta"
            extra={<Typography variant="caption" fontWeight={700} sx={{ display: 'block', mt: 1 }}>{r.kcal} kcal</Typography>} />
        ))}
      </Box>
    </>
  );
}

export function AdminConfig() {
  const [s, setS] = useState({ news: true, open: true, maint: false });
  const toggle = (k) => (e) => setS({ ...s, [k]: e.target.checked });
  return (
    <>
      <PageHead title="Configuración" subtitle="Ajustes generales de la plataforma." />
      <Card sx={{ maxWidth: 640 }}>
        <CardContent>
          <Stack spacing={2.5}>
            <TextField label="Nombre de la plataforma" defaultValue="Vitalia" fullWidth />
            <TextField label="Correo de contacto" defaultValue="hola@vitalia.com" fullWidth />
            <Divider />
            <FormControlLabel control={<Switch checked={s.news} onChange={toggle('news')} color="secondary" />} label="Enviar boletín semanal a los clientes" />
            <FormControlLabel control={<Switch checked={s.open} onChange={toggle('open')} color="secondary" />} label="Permitir nuevos registros" />
            <FormControlLabel control={<Switch checked={s.maint} onChange={toggle('maint')} color="secondary" />} label="Modo mantenimiento" />
            <Button variant="contained" color="secondary" sx={{ alignSelf: 'flex-start' }}>Guardar cambios</Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
