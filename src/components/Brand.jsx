import { Stack, Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Brand({ light = false }) {
  return (
    <Stack direction="row" spacing={1.2} alignItems="center" component={RouterLink} to="/" sx={{ textDecoration: 'none' }}>
      <Box component="img" src="/logo.svg" alt="Logo Vitalia" sx={{ width: 36, height: 36, borderRadius: 2 }} />
      <Typography variant="h6" fontWeight={800} sx={{ color: light ? '#fff' : 'text.primary' }}>Vitalia</Typography>
    </Stack>
  );
}
