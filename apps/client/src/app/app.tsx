
import { ThemeProvider } from '@mui/material';
import AppTheme from '../theme';
import MemoryFormPage from '../pages/memoryFormPage/memoryFormPage';
export function App() {
  return (
    <ThemeProvider theme={AppTheme}>
        <MemoryFormPage></MemoryFormPage>
    </ThemeProvider>
  );
}

export default App;
