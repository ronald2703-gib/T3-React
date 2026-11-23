import {
  AppBar, Toolbar, Typography, Button, Container, Box, Stack, Card, Avatar, Divider,
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Link as RouterLink } from 'react-router-dom';
import Brand from '../components/Brand';
import { PhotoCard, grid3 } from '../components/Shared';
import { img, exercises, foods } from '../data';

const benefits = [
  { icon: <FitnessCenterIcon />, title: 'Muévete mejor', text: 'Rutinas guiadas según tu nivel y tu tiempo disponible.' },
  { icon: <RestaurantIcon />, title: 'Come con sentido', text: 'Planes de alimentación simples, ricos y fáciles de seguir.' },
  { icon: <BedtimeIcon />, title: 'Descansa y recupérate', text: 'Hábitos de sueño y pausas activas para sostener el cambio.' },
];

function SectionTitle({ title, subtitle, light }) {
  return (
    <Box sx={{ mb: 5, maxWidth: 560 }}>
      <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 40 }, color: light ? '#fff' : 'text.primary' }}>{title}</Typography>
      <Typography sx={{ mt: 1.5, color: light ? 'rgba(255,255,255,.7)' : 'text.secondary' }}>{subtitle}</Typography>
    </Box>
  );
}

export default function Landing() {
  return (
    <Box>
      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #ECECEC' }}>
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto' }}>
          <Box sx={{ flexGrow: 1 }}><Brand /></Box>
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <Button color="inherit" href="#ejercicios">Ejercicios</Button>
            <Button color="inherit" href="#alimentacion">Alimentación</Button>
            <Button color="inherit" href="#empezar">Empezar</Button>
          </Stack>
          <Button component={RouterLink} to="/acceso" variant="contained" color="primary">Entrar</Button>
        </Toolbar>
      </AppBar>

      {/* Hero */}
      <Box sx={{ overflow: 'hidden' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'grid', gap: 8, alignItems: 'center', gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' } }}>
            <Box>
              <Typography variant="h1" sx={{ fontSize: { xs: 44, md: 66 } }}>
                Mejora tu salud con ejercicio y buena comida
              </Typography>
              <Typography variant="h6" color="text.secondary" fontWeight={400} sx={{ mt: 3, maxWidth: 480 }}>
                Rutinas y menús pensados para tu día a día. Crea tu cuenta y recibe un plan a tu medida.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                <Button component={RouterLink} to="/acceso" size="large" variant="contained" color="secondary">Crear mi plan gratis</Button>
                <Button href="#ejercicios" size="large" variant="outlined" color="primary">Ver ejercicios</Button>
              </Stack>
              <Stack direction="row" spacing={5} sx={{ mt: 6 }}>
                {[['12 mil', 'personas activas'], ['80+', 'rutinas'], ['300+', 'recetas']].map(([n, l]) => (
                  <Box key={l}>
                    <Typography variant="h5" fontWeight={800}>{n}</Typography>
                    <Typography variant="body2" color="text.secondary">{l}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box sx={{ position: 'relative', mr: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
              <Box sx={{ position: 'absolute', inset: 0, transform: 'translate(24px, 24px)', bgcolor: 'secondary.main', borderRadius: 8 }} />
              <Box component="img" src={img.hero} alt="Persona corriendo al amanecer"
                sx={{ position: 'relative', display: 'block', width: '100%', height: { xs: 300, md: 480 }, objectFit: 'cover', borderRadius: 8 }} />
              <Card sx={{ position: 'absolute', left: { xs: 12, md: -32 }, bottom: 32, p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar sx={{ bgcolor: '#111', color: 'secondary.main' }}><LocalFireDepartmentIcon /></Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight={700} lineHeight={1.2}>420 kcal</Typography>
                  <Typography variant="caption" color="text.secondary">quemadas hoy</Typography>
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Pilares */}
      <Box sx={{ bgcolor: '#111' }}>
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <SectionTitle light title="Tres pilares para sentirte bien" subtitle="Movimiento, comida y descanso trabajando juntos." />
          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
            {benefits.map((b) => (
              <Card key={b.title} sx={{ p: 3.5 }}>
                <Avatar sx={{ bgcolor: 'secondary.main', color: '#111', mb: 2, width: 52, height: 52 }}>{b.icon}</Avatar>
                <Typography variant="h6">{b.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{b.text}</Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Ejercicios */}
      <Box id="ejercicios" sx={{ bgcolor: '#FFF1E6' }}>
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <SectionTitle title="Ejercicios para empezar hoy" subtitle="Sin gimnasio, sin excusas. Elige uno y muévete." />
          <Box sx={grid3}>{exercises.map((e) => <PhotoCard key={e.title} item={e} />)}</Box>
        </Container>
      </Box>

      {/* Alimentación */}
      <Container id="alimentacion" maxWidth="lg" sx={{ py: 10 }}>
        <SectionTitle title="Comida que te da energía" subtitle="Ideas fáciles para comer mejor sin complicarte." />
        <Box sx={grid3}>{foods.map((f) => <PhotoCard key={f.title} item={f} />)}</Box>
      </Container>

      {/* CTA */}
      <Box id="empezar" sx={{ bgcolor: 'secondary.main' }}>
        <Container maxWidth="md" sx={{ py: 9, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 42 } }}>Empieza tu primera semana hoy</Typography>
          <Typography sx={{ mt: 2 }}>Regístrate en un minuto y recibe tu rutina y tu menú de bienvenida.</Typography>
          <Button component={RouterLink} to="/acceso" size="large" variant="contained" color="primary" sx={{ mt: 4 }}>Crear cuenta</Button>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#111', color: '#fff' }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
            <Brand light />
            <Typography variant="body2" sx={{ opacity: .7 }}>© 2026 Vitalia. Todos los derechos reservados.</Typography>
            <Stack direction="row" spacing={1}>
              <Button size="small" color="secondary" component={RouterLink} to="/acceso">Iniciar sesión</Button>
              <Button size="small" color="secondary" component={RouterLink} to="/recuperar">Recuperar cuenta</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
