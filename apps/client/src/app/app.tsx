import { ThemeProvider } from '@mui/material';
import AppTheme from '../theme';
import { Header } from './components/Header';
import LoginDialogWindow, { AuthMode } from './components/LoginDialogWindow';
import React, { useState } from 'react';
export function App() {

    const [openAuthDialog, setOpenAuthDialog] = useState(false);
    const [authMode, setAuthMode] = useState<string>(AuthMode.login);

    const handleOpenAuthDialog = () => setOpenAuthDialog(!openAuthDialog);

  return (
    <ThemeProvider theme={AppTheme}>
        <Header
            opened={openAuthDialog}
            setOpen={setOpenAuthDialog}
            setAuthMode={setAuthMode}
        />
        <LoginDialogWindow
            open={openAuthDialog}
            handleOpenAuthDialog={handleOpenAuthDialog}
            authModeH={authMode}
        />
    </ThemeProvider>
  );
}

export default App;
