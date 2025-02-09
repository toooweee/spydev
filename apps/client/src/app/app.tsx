import { Container, ThemeProvider } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Header } from './components/Header';
import MainPage from './pages/MainPage';
import AppTheme from '../theme';

const Layout = styled('div')({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '1fr',
  gridTemplateAreas: `"header"
                      "main"`,
  height: '100vh',
});

const Main = styled('main')({
  gridArea: 'main',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f4f4f4',
});

const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
    <Layout>
      <Header />
      <Main>
          <MainPage />
      </Main>
    </Layout>
    </ThemeProvider>
  );
};

export default App;
