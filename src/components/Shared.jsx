import { Card, CardMedia, CardContent, Typography, Stack, Chip, Box, Button } from '@mui/material';

export function PhotoCard({ item, extra, action }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', '&:hover': { transform: 'translateY(-4px)' } }}>
      <CardMedia component="img" height="200" image={item.image} alt={item.title} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
          <Typography variant="h6">{item.title}</Typography>
          {item.tag && <Chip size="small" label={item.tag} color="secondary" />}
        </Stack>
        <Typography variant="body2" color="text.secondary">{item.text}</Typography>
        {extra}
        {action && <Button size="small" variant="outlined" color="primary" sx={{ mt: 2 }}>{action}</Button>}
      </CardContent>
    </Card>
  );
}

export const grid3 = { display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' } };

export function PageHead({ title, subtitle, action }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }} spacing={2}>
      <Box>
        <Typography variant="h5">{title}</Typography>
        {subtitle && <Typography color="text.secondary">{subtitle}</Typography>}
      </Box>
      {action}
    </Stack>
  );
}
