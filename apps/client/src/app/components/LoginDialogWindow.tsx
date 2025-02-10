import React, { useCallback, useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
    Box
} from '@mui/material';

enum AuthMode {
    login = 'Login',
    register = 'Register',
}

interface User {
    email: string;
    password: string;
}

interface LoginDialogWindowProps {
    open: boolean;
    handleOpenAuthDialog: () => void;
}

const LoginDialogWindow: React.FC<LoginDialogWindowProps> = ({ open, handleOpenAuthDialog, }) => {
    const [user, setUser] = useState<User>({ email: "", password: "" });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [authMode, setAuthMode] = useState<string>(AuthMode.login)

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setUser((prev) => ({ ...prev, [name]: value }));
        },
        []
    );

    const validateUser = useCallback((user: User): boolean => {
        const newErrors: { email?: string; password?: string } = {};
        let isValid = true;

        if (!user.email) {
            newErrors.email = "Email обязателен";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
            newErrors.email = "Некорректный email";
            isValid = false;
        }

        if (!user.password) {
            newErrors.password = "Пароль обязателен";
            isValid = false;
        } else if (user.password.length < 6) {
            newErrors.password = "Пароль должен содержать не менее 6 символов";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }, []);

    const handleSubmit = useCallback(() => {
        if (validateUser(user)) {
            console.log(user);
            handleOpenAuthDialog();
        }
    }, [user, validateUser, handleOpenAuthDialog]);

    return (
        <Dialog open={open} onClose={handleOpenAuthDialog}>
            {authMode === AuthMode.login && (
                <>
                    <DialogTitle>Войти</DialogTitle>
                    <DialogContent>
                        <Box display="flex" flexDirection="column" gap={2} mt={1}>
                            <TextField
                                autoFocus
                                name="email"
                                placeholder="Email"
                                variant="outlined"
                                value={user.email}
                                onChange={handleInputChange}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                            <TextField
                                name="password"
                                type="password"
                                placeholder="Пароль"
                                variant="outlined"
                                value={user.password}
                                onChange={handleInputChange}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleOpenAuthDialog}
                            variant="contained"
                            color="error"
                        >
                            Закрыть
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Отправить
                        </Button>
                    </DialogActions>
                    <Button
                        variant="text"
                        onClick={() => setAuthMode(AuthMode.register)}
                    >Зарегистрироваться</Button>
                </>
            )}
            {authMode === AuthMode.register && (
                <>
                    <DialogTitle>Регистрация</DialogTitle>
                    <DialogContent>
                        <Box display="flex" flexDirection="column" gap={2} mt={1}>
                            <TextField
                                autoFocus
                                name="email"
                                placeholder="Email"
                                variant="outlined"
                                value={user.email}
                                onChange={handleInputChange}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                            <TextField
                                name="password"
                                type="password"
                                placeholder="Пароль"
                                variant="outlined"
                                value={user.password}
                                onChange={handleInputChange}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleOpenAuthDialog}
                            variant="contained"
                            color="error"
                        >
                            Закрыть
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Отправить
                        </Button>
                    </DialogActions>
                    <Button
                        variant="text"
                        onClick={() => setAuthMode(AuthMode.login)}
                    >Войти</Button>
                </>
            )}

        </Dialog>
    );
};

export default LoginDialogWindow;
