import { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Box, IconButton, Avatar, Stack, Button, Chip, Divider, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink, Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import Brand from './Brand';

const W = 260;

export default function DashboardLayout({ role, userName, menu }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const current = menu.find((m) => (m.end ? pathname === m.to : pathname.startsWith(m.to)));

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#111', color: '#fff' }}>
      <Box sx={{ p: 2.5 }}><Brand light /></Box>
      <List sx={{ px: 1.5, flexGrow: 1 }}>
        {menu.map((m) => {
          const selected = m === current;
          return (
            <ListItemButton key={m.to} component={NavLink} to={m.to} end={m.end} selected={selected}
              onClick={() => setOpen(false)}
              sx={{
                borderRadius: 3, mb: 0.5, color: 'rgba(255,255,255,.75)',
                '&:hover': { bgcolor: 'rgba(255,255,255,.08)' },
                '&.Mui-selected, &.Mui-selected:hover': { bgcolor: 'secondary.main', color: '#111' },
              }}>
              <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>{m.icon}</ListItemIcon>
              <ListItemText primary={m.label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          );
        })}
      </List>
      <Divider sx={{ borderColor: 'rgba(255,255,255,.12)' }} />
      <Stack spacing={1} sx={{ p: 2 }}>
        <Button fullWidth component={RouterLink} to="/" startIcon={<HomeIcon />} variant="contained" color="secondary">Página principal</Button>
        <Button fullWidth component={RouterLink} to="/acceso" startIcon={<LogoutIcon />} sx={{ color: '#fff' }}>Cerrar sesión</Button>
      </Stack>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#FFF8F2' }}>
      <AppBar position="fixed" color="inherit" elevation={0}
        sx={{ borderBottom: '1px solid #ECECEC', ml: { md: `${W}px` }, width: { md: `calc(100% - ${W}px)` } }}>
        <Toolbar>
          {!isDesktop && <IconButton edge="start" onClick={() => setOpen(true)} sx={{ mr: 1 }}><MenuIcon /></IconButton>}
          <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1 }}>{current?.label}</Typography>
          <Button component={RouterLink} to="/" startIcon={<HomeIcon />} color="inherit" sx={{ mr: 1, display: { xs: 'none', sm: 'inline-flex' } }}>
            Ver página principal
          </Button>
          <Chip label={role === 'admin' ? 'Administrador' : 'Cliente'} color={role === 'admin' ? 'primary' : 'secondary'} size="small" sx={{ mr: 2 }} />
          <Avatar sx={{ bgcolor: 'secondary.main', color: '#111', fontWeight: 700 }}>{userName[0]}</Avatar>
        </Toolbar>
      </AppBar>

      <Drawer variant={isDesktop ? 'permanent' : 'temporary'} open={isDesktop || open} onClose={() => setOpen(false)}
        sx={{ width: W, '& .MuiDrawer-paper': { width: W, boxSizing: 'border-box', border: 'none' } }}>
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 4 }, mt: 8, minWidth: 0 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
