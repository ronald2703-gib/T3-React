import { useState } from 'react';
import {
  Box, Paper, Tabs, Tab, TextField, Button, Typography, Stack, Link, InputAdornment,
  IconButton, ToggleButton, ToggleButtonGroup, Checkbox, FormControlLabel,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { img } from '../data';
import Brand from '../components/Brand';

export default function Auth() {
  const [tab, setTab] = useState(0); // 0 = iniciar sesión, 1 = registro
  const [show, setShow] = useState(false);
  const [role, setRole] = useState('cliente'); // solo para simular la navegación
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate(role === 'admin' ? '/admin' : '/cliente'); // sin funcionalidad real
  };

  const passwordField = (label) => (
    <TextField
      label={label} type={show ? 'text' : 'password'} fullWidth required
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShow(!show)} edge="end" aria-label="mostrar contraseña">
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
      <Box sx={{
        display: { xs: 'none', md: 'flex' }, alignItems: 'flex-end', p: 6, color: '#fff',
        backgroundImage: `linear-gradient(to top, rgba(17,17,17,.92), rgba(255,164,99,.25)), url(${img.auth})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <Box>
          <Typography variant="h3" fontWeight={700}>Cuidarte empieza con una decisión</Typography>
          <Typography sx={{ mt: 2, opacity: 0.9, maxWidth: 420 }}>
            Entra a tu espacio para ver tus rutinas, tus comidas y tu progreso.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3, bgcolor: '#FFF8F2' }}>
        <Paper elevation={0} sx={{ p: { xs: 3, sm: 5 }, width: '100%', maxWidth: 460, border: '1px solid #ECECEC' }}>
          <Box sx={{ mb: 3 }}><Brand /></Box>

          <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="fullWidth" sx={{ mb: 3 }}>
            <Tab label="Iniciar sesión" />
            <Tab label="Registrarme" />
          </Tabs>

          <Box component="form" onSubmit={submit}>
            <Stack spacing={2.5}>
              {tab === 1 && <TextField label="Nombre completo" fullWidth required />}
              <TextField label="Correo electrónico" type="email" fullWidth required />
              {passwordField('Contraseña')}
              {tab === 1 && passwordField('Confirmar contraseña')}

              <Box>
                <Typography variant="caption" color="text.secondary">Entrar como (demo de navegación)</Typography>
                <ToggleButtonGroup value={role} exclusive fullWidth size="small" color="primary" sx={{ mt: 0.5 }}
                  onChange={(_, v) => v && setRole(v)}>
                  <ToggleButton value="cliente">Cliente</ToggleButton>
                  <ToggleButton value="admin">Administrador</ToggleButton>
                </ToggleButtonGroup>
              </Box>

              {tab === 0 ? (
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <FormControlLabel control={<Checkbox size="small" />} label={<Typography variant="body2">Recordarme</Typography>} />
                  <Link component={RouterLink} to="/recuperar" variant="body2">¿Olvidaste tu acceso?</Link>
                </Stack>
              ) : (
                <FormControlLabel control={<Checkbox size="small" required />} label={<Typography variant="body2">Acepto los términos y la política de privacidad</Typography>} />
              )}

              <Button type="submit" variant="contained" color="secondary" size="large" fullWidth>
                {tab === 0 ? 'Entrar' : 'Crear mi cuenta'}
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
