import { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Stack, Alert, ToggleButton, ToggleButtonGroup, Link } from '@mui/material';
import LockResetIcon from '@mui/icons-material/LockReset';
import { Link as RouterLink } from 'react-router-dom';

export default function Recover() {
  const [mode, setMode] = useState('password'); // 'password' o 'user'
  const [sent, setSent] = useState(false);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3, bgcolor: '#FFF1E6' }}>
      <Paper elevation={0} sx={{ p: { xs: 3, sm: 5 }, width: '100%', maxWidth: 440, textAlign: 'center', border: '1px solid #ECECEC' }}>
        <LockResetIcon sx={{ fontSize: 52, color: 'secondary.main' }} />
        <Typography variant="h5" fontWeight={700} sx={{ mt: 1 }}>Recupera tu acceso</Typography>
        <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>
          Te enviaremos un correo con las instrucciones.
        </Typography>

        <ToggleButtonGroup value={mode} exclusive fullWidth color="primary" size="small" sx={{ mb: 3 }}
          onChange={(_, v) => { if (v) { setMode(v); setSent(false); } }}>
          <ToggleButton value="password">Olvidé mi contraseña</ToggleButton>
          <ToggleButton value="user">Olvidé mi usuario</ToggleButton>
        </ToggleButtonGroup>

        {sent && (
          <Alert severity="success" sx={{ mb: 2, textAlign: 'left' }}>
            Si el correo existe, recibirás un mensaje en unos minutos.
          </Alert>
        )}

        <Stack spacing={2.5} component="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <TextField label="Correo electrónico" type="email" fullWidth required />
          <Button type="submit" variant="contained" color="secondary" size="large">
            {mode === 'password' ? 'Enviar enlace' : 'Recordarme mi usuario'}
          </Button>
          <Link component={RouterLink} to="/acceso" variant="body2">Volver a iniciar sesión</Link>
        </Stack>
      </Paper>
    </Box>
  );
}
