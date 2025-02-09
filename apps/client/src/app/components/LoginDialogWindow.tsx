import React from 'react';
import { Dialog } from '@mui/material';

interface LoginDialogWindowProps {
  open: boolean;
}

const LoginDialogWindow: React.FC<LoginDialogWindowProps> = (props) => {
  return (
    <Dialog open={props.open}>

    </Dialog>
  );
};

export default LoginDialogWindow;
