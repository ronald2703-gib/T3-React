import { useState } from 'react';
import {
  Box, Card, CardContent, CardMedia, Typography, Stack, LinearProgress, Chip, Button, List, ListItem,
  ListItemIcon, ListItemText, Checkbox, Avatar, Tabs, Tab, TextField, MenuItem, Accordion,
  AccordionSummary, AccordionDetails,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InsightsIcon from '@mui/icons-material/Insights';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import { PhotoCard, grid3, PageHead } from '../components/Shared';
import { img, recipes } from '../data';

export const clientMenu = [
  { label: 'Inicio', icon: <HomeIcon />, to: '/cliente', end: true },
  { label: 'Mis rutinas', icon: <FitnessCenterIcon />, to: '/cliente/rutinas' },
  { label: 'Mi alimentación', icon: <RestaurantIcon />, to: '/cliente/alimentacion' },
  { label: 'Mi progreso', icon: <InsightsIcon />, to: '/cliente/progreso' },
  { label: 'Perfil', icon: <PersonIcon />, to: '/cliente/perfil' },
];

const routineToday = ['Calentamiento · 5 min', 'Sentadillas · 3 x 12', 'Flexiones · 3 x 10', 'Plancha · 3 x 30 s', 'Estiramiento final · 5 min'];

export function ClientInicio() {
  const daily = [
    { label: 'Calorías quemadas', value: '420 kcal', progress: 70, icon: <LocalFireDepartmentIcon /> },
    { label: 'Agua', value: '1,5 / 2 L', progress: 75, icon: <WaterDropIcon /> },
    { label: 'Pasos', value: '6.200', progress: 62, icon: <DirectionsWalkIcon /> },
  ];
  return (
    <>
      <PageHead title="Buen día, Camila 🌿" subtitle="Vas muy bien: llevas 5 días seguidos activa." />
      <Box sx={{ display: 'grid', gap: 2.5, mb: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
        {daily.map((d) => (
          <Card key={d.label}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: 'secondary.main', color: '#111' }}>{d.icon}</Avatar>
                <Box><Typography variant="body2" color="text.secondary">{d.label}</Typography><Typography variant="h6">{d.value}</Typography></Box>
              </Stack>
              <LinearProgress variant="determinate" value={d.progress} color="secondary" sx={{ mt: 2, height: 8, borderRadius: 4 }} />
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' } }}>
        <Card>
          <CardMedia component="img" height="180" image={img.gym} alt="Rutina de hoy" />
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Rutina de hoy</Typography><Chip label="35 min" size="small" color="secondary" />
            </Stack>
            <List dense>
              {routineToday.map((r) => (
                <ListItem key={r} disableGutters>
                  <ListItemIcon sx={{ minWidth: 36 }}><Checkbox edge="start" size="small" color="secondary" /></ListItemIcon>
                  <ListItemText primary={r} />
                </ListItem>
              ))}
            </List>
            <Button variant="contained" color="secondary" fullWidth sx={{ mt: 1 }}>Empezar rutina</Button>
          </CardContent>
        </Card>
        <Card>
          <CardMedia component="img" height="180" image={img.bowl} alt="Menú de hoy" />
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1 }}>Menú de hoy</Typography>
            <List dense>
              {[['Desayuno', 'Avena con frutas y nueces'], ['Almuerzo', 'Bowl de quinoa, pollo y vegetales'], ['Cena', 'Ensalada completa con aguacate']].map(([m, d]) => (
                <ListItem key={m} disableGutters><ListItemText primary={m} secondary={d} primaryTypographyProps={{ fontWeight: 600 }} /></ListItem>
              ))}
            </List>
            <Button variant="outlined" color="primary" fullWidth sx={{ mt: 1 }}>Ver receta</Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export function ClientRutinas() {
  const week = [
    ['Lunes', 'Fuerza en casa', '45 min'], ['Martes', 'Cardio suave', '30 min'], ['Miércoles', 'Yoga y movilidad', '20 min'],
    ['Jueves', 'HIIT express', '20 min'], ['Viernes', 'Piernas y glúteos', '40 min'], ['Sábado', 'Caminata larga', '60 min'], ['Domingo', 'Descanso activo', '15 min'],
  ];
  return (
    <>
      <PageHead title="Mis rutinas" subtitle="Tu plan de la semana." />
      <Box sx={{ mb: 4 }}>
        {week.map(([d, r, t], i) => (
          <Accordion key={d} defaultExpanded={i === 0} disableGutters elevation={0} sx={{ border: '1px solid #ECECEC', mb: 1.5, '&:before': { display: 'none' }, borderRadius: '16px !important' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
                <Avatar sx={{ bgcolor: i === 0 ? 'secondary.main' : '#111', color: i === 0 ? '#111' : '#fff', width: 36, height: 36, fontSize: 13 }}>{d.slice(0, 2)}</Avatar>
                <Typography fontWeight={600} sx={{ flexGrow: 1 }}>{d} · {r}</Typography>
                <Chip size="small" label={t} />
              </Stack>
            </AccordionSummary>
            <AccordionDetails><Typography variant="body2" color="text.secondary">Calentamiento, bloque principal y estiramiento final. Descansa 45 segundos entre series.</Typography></AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Typography variant="h6" sx={{ mb: 2 }}>Más rutinas para ti</Typography>
      <Box sx={grid3}>
        {[
          { title: 'Fuerza en casa', text: 'Rutinas con tu propio peso.', image: img.gym, tag: '45 min' },
          { title: 'Yoga y movilidad', text: 'Estira y respira.', image: img.yoga, tag: '20 min' },
          { title: 'Cardio suave', text: 'Cuida tu corazón.', image: img.run, tag: '30 min' },
        ].map((r) => <PhotoCard key={r.title} item={r} action="Empezar" />)}
      </Box>
    </>
  );
}

export function ClientAlimentacion() {
  const tabs = ['Todas', 'Desayuno', 'Almuerzo', 'Cena', 'Snack'];
  const [t, setT] = useState(0);
  const list = t === 0 ? recipes : recipes.filter((r) => r.tag === tabs[t]);
  return (
    <>
      <PageHead title="Mi alimentación" subtitle="Ideas para cada momento del día." />
      <Tabs value={t} onChange={(_, v) => setT(v)} variant="scrollable" sx={{ mb: 3 }}>{tabs.map((x) => <Tab key={x} label={x} />)}</Tabs>
      <Box sx={grid3}>
        {list.map((r) => (
          <PhotoCard key={r.title} item={r} action="Ver receta"
            extra={<Typography variant="caption" fontWeight={700} sx={{ display: 'block', mt: 1 }}>{r.kcal} kcal</Typography>} />
        ))}
      </Box>
    </>
  );
}

export function ClientProgreso() {
  const days = [['Lun', 80], ['Mar', 60], ['Mié', 100], ['Jue', 40], ['Vie', 90], ['Sáb', 20], ['Dom', 0]];
  return (
    <>
      <PageHead title="Mi progreso" subtitle="Mira cómo avanzas semana a semana." />
      <Box sx={{ display: 'grid', gap: 2.5, mb: 3, gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' } }}>
        {[['Peso actual', '62,5 kg'], ['Rutinas completadas', '18'], ['Racha', '5 días']].map(([l, v], i) => (
          <Card key={l} sx={i === 2 ? { bgcolor: 'secondary.main' } : {}}>
            <CardContent><Typography variant="body2" sx={{ opacity: .7 }}>{l}</Typography><Typography variant="h4">{v}</Typography></CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' } }}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>Actividad de la semana</Typography>
            <Stack spacing={1.8}>
              {days.map(([d, v]) => (
                <Stack key={d} direction="row" spacing={2} alignItems="center">
                  <Typography variant="body2" sx={{ width: 32 }}>{d}</Typography>
                  <LinearProgress variant="determinate" value={v} color="secondary" sx={{ flexGrow: 1, height: 10, borderRadius: 5 }} />
                  <Typography variant="caption" sx={{ width: 36 }}>{v}%</Typography>
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>Mis metas</Typography>
            <Stack spacing={2.5}>
              {[['Bajar 3 kg', 60], ['Entrenar 4 veces por semana', 75], ['Tomar 2 L de agua al día', 85]].map(([n, v]) => (
                <Box key={n}>
                  <Stack direction="row" justifyContent="space-between"><Typography variant="body2">{n}</Typography><Typography variant="body2" color="text.secondary">{v}%</Typography></Stack>
                  <LinearProgress variant="determinate" value={v} sx={{ height: 8, borderRadius: 4, mt: 0.5, '& .MuiLinearProgress-bar': { bgcolor: '#111' } }} />
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export function ClientPerfil() {
  return (
    <>
      <PageHead title="Perfil" subtitle="Tus datos y tu objetivo." />
      <Card sx={{ maxWidth: 680 }}>
        <CardContent>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <Avatar sx={{ width: 72, height: 72, bgcolor: 'secondary.main', color: '#111', fontSize: 30, fontWeight: 700 }}>C</Avatar>
            <Box><Typography variant="h6">Camila Restrepo</Typography><Typography variant="body2" color="text.secondary">camila@correo.com</Typography></Box>
          </Stack>
          <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
            <TextField label="Nombre completo" defaultValue="Camila Restrepo" />
            <TextField label="Correo electrónico" defaultValue="camila@correo.com" />
            <TextField label="Peso (kg)" defaultValue="62.5" />
            <TextField label="Estatura (cm)" defaultValue="165" />
            <TextField select label="Objetivo" defaultValue="peso" sx={{ gridColumn: { sm: '1 / -1' } }}>
              <MenuItem value="peso">Bajar de peso</MenuItem>
              <MenuItem value="musculo">Ganar músculo</MenuItem>
              <MenuItem value="salud">Mejorar mi salud general</MenuItem>
            </TextField>
          </Box>
          <Button variant="contained" color="secondary" sx={{ mt: 3 }}>Guardar cambios</Button>
        </CardContent>
      </Card>
    </>
  );
}
