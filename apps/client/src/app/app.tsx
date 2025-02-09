import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import AppTheme from '../theme';
import MemoryFormPage from '../pages/memoryFormPage/memoryFormPage';
import Header from '../components/Header';
import React from 'react';

export function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline/>
        <Header mode="light" onToggleTheme={() => console.log('sad')}/>
        <MemoryFormPage/>
    </ThemeProvider>
  );
}

export default App;
