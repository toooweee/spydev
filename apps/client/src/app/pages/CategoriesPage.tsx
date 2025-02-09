import React from 'react';
import { Grid, Typography, Paper, Box, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const categoryData = [
  { title: 'Ветераны', icon: <MilitaryTechIcon fontSize="large" />, color: '#FF7043' },
  { title: 'Семья', icon: <FamilyRestroomIcon fontSize="large" />, color: '#42A5F5' },
  { title: 'Исторические события', icon: <HistoryEduIcon fontSize="large" />, color: '#66BB6A' },
];

const memoryPages = [
  { title: 'Иван Иванов', img: 'https://via.placeholder.com/300', desc: 'Герой Великой Отечественной войны.' },
  { title: 'Анна Петрова', img: 'https://via.placeholder.com/300', desc: 'Заслуженный учитель СССР.' },
  { title: 'Петр Сидоров', img: 'https://via.placeholder.com/300', desc: 'Выдающийся хирург и профессор.' },
];

const CategoryCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '12px',
  transition: 'all 0.3s ease-in-out',
  boxShadow: theme.shadows[3],
  width: '100%',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
}));

const Categories = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Категории
      </Typography>
      <Grid container spacing={4}>
        {categoryData.map((category, index) => (
          <Grid item xs={12} key={index}>
            <CategoryCard sx={{ background: category.color, color: '#fff', py: 6 }}>
              {category.icon}
              <Typography variant="h4" sx={{ mt: 2 }}>
                {category.title}
              </Typography>
            </CategoryCard>

            {/* Галерея последних добавленных страниц */}
            <Box sx={{ mt: 3, px: 2 }}>
              <Typography variant="h5" align="left" sx={{ mb: 2 }}>
                Недавно добавленные
              </Typography>
              <Grid container spacing={3}>
                {memoryPages.map((page, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card sx={{ height: '100%' }}>
                      <CardMedia component="img" height="140" image={page.img} alt={page.title} />
                      <CardContent>
                        <Typography variant="h6">{page.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {page.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
