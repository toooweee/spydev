import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SearchIcon from '@mui/icons-material/Search';

const categoryData = [
  { title: 'Ветераны', icon: <MilitaryTechIcon fontSize="large" />, color: '#FF7043' },
  { title: 'Семья', icon: <FamilyRestroomIcon fontSize="large" />, color: '#42A5F5' },
  { title: 'Исторические события', icon: <HistoryEduIcon fontSize="large" />, color: '#66BB6A' },
];

const memoryPages = [
  { title: 'Иван Иванов', img: 'https://via.placeholder.com/300', desc: 'Герой Великой Отечественной войны.' },
  { title: 'Анна Петрова', img: 'https://via.placeholder.com/300', desc: 'Заслуженный учитель СССР.' },
  { title: 'Битва за Берлин', img: 'https://via.placeholder.com/300', desc: 'Решающая операция в 1945 году.' },
  { title: 'Битва за Берлин', img: 'https://via.placeholder.com/300', desc: 'Решающая операция в 1945 году.' },
  { title: 'Битва за Берлин', img: 'https://via.placeholder.com/300', desc: 'Решающая операция в 1945 году.' },
  { title: 'Битва за Берлин', img: 'https://via.placeholder.com/300', desc: 'Решающая операция в 1945 году.' },
  { title: 'Битва за Берлин', img: 'https://via.placeholder.com/300', desc: 'Решающая операция в 1945 году.' },
  { title: 'Битва за Берлин', img: 'https://via.placeholder.com/300', desc: 'Решающая операция в 1945 году.' },
  { title: 'Битва за Берлин', img: 'https://via.placeholder.com/300', desc: 'Решающая операция в 1945 году.' },
  { title: 'Битва за Берлин', img: 'https://via.placeholder.com/300', desc: 'Решающая операция в 1945 году.' },
  { title: 'Битва за Берлин', img: 'https://via.placeholder.com/300', desc: 'Решающая операция в 1945 году.' },
];

const Layout = styled(Box)({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
});

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(6, 2),
  background: 'linear-gradient(135deg, #42a5f5 30%, #66bb6a 90%)',
  color: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  width: '100%',
  minHeight: '30vh',
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: 500,
  background: '#fff',
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
  },
}));

const CategoryCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  minHeight: '120px',
}));

const MainContent = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px 0',
});

const MainPage = () => {
  return (
    <Layout>
      <SearchContainer>
        <Typography variant="h4">Поиск по страницам памяти</Typography>
        <SearchBar
          placeholder="Введите имя или событие..."
          variant="outlined"
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: 'gray', mr: 1 }} />,
          }}
        />
      </SearchContainer>

      <MainContent>
        <Container>
          <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
            Недавно добавленные страницы
          </Typography>
          <Grid container spacing={3}>
            {memoryPages.map((page, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
        </Container>

        <Container sx={{ pb: 4 }}>
          <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
            Категории
          </Typography>
          <Grid container spacing={3}>
            {categoryData.map((category, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <CategoryCard sx={{ background: category.color, color: '#fff' }}>
                  {category.icon}
                  <Typography variant="h6" sx={{ mt: 1 }}>{category.title}</Typography>
                </CategoryCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MainContent>
    </Layout>
  );
};

export default MainPage;

