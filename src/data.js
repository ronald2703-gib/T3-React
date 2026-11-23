export const img = {
  hero: '/images/hero.svg',
  gym: '/images/gym.svg',
  yoga: '/images/yoga.svg',
  run: '/images/run.svg',
  bowl: '/images/bowl.svg',
  veggies: '/images/veggies.svg',
  salad: '/images/salad.svg',
  auth: '/images/hero.svg',
};

export const exercises = [
  { title: 'Cardio suave', text: 'Caminatas y trote ligero para cuidar tu corazón.', image: img.run, tag: '30 min' },
  { title: 'Fuerza en casa', text: 'Rutinas con tu propio peso para ganar tono muscular.', image: img.gym, tag: '45 min' },
  { title: 'Yoga y movilidad', text: 'Estira, respira y libera tensión después del día.', image: img.yoga, tag: '20 min' },
];

export const foods = [
  { title: 'Bowls de energía', text: 'Granos integrales, proteína y vegetales de colores.', image: img.bowl },
  { title: 'Verduras de temporada', text: 'Más fibra, vitaminas y sabor en cada plato.', image: img.veggies },
  { title: 'Ensaladas completas', text: 'Ligeras, saciantes y listas en 10 minutos.', image: img.salad },
];

export const routines = [
  ...exercises.map((e) => ({ ...e, level: 'Principiante' })),
  { title: 'HIIT express', text: 'Intervalos intensos para quemar más en menos tiempo.', image: img.gym, tag: '20 min', level: 'Intermedio' },
  { title: 'Piernas y glúteos', text: 'Sentadillas, zancadas y puentes para tren inferior.', image: img.run, tag: '40 min', level: 'Intermedio' },
  { title: 'Estiramiento profundo', text: 'Recupera tu cuerpo y mejora tu flexibilidad.', image: img.yoga, tag: '15 min', level: 'Principiante' },
];

export const recipes = [
  ...foods.map((f, i) => ({ ...f, kcal: [520, 180, 340][i], tag: ['Almuerzo', 'Snack', 'Cena'][i] })),
  { title: 'Avena con frutas', text: 'Avena cocida con banano, fresas y nueces.', image: img.bowl, kcal: 380, tag: 'Desayuno' },
  { title: 'Ensalada de aguacate', text: 'Hojas verdes, aguacate, tomate y semillas.', image: img.salad, kcal: 310, tag: 'Cena' },
  { title: 'Bowl de vegetales', text: 'Zanahoria, brócoli y garbanzos al horno.', image: img.veggies, kcal: 420, tag: 'Almuerzo' },
];
