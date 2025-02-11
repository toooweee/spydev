import React, { useCallback, useEffect, useState } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
    Box,
    styled,
} from "@mui/material";

export enum AuthMode {
    login = "Login",
    register = "Register",
}

interface FormData {
    email: string;
    password: string;
    repeatPassword?: string;
}

const AuthDialog = styled(Dialog)`
  .MuiDialog-paper {
    width: 450px;
    max-width: 450px;
    overflow: auto;
  }
`;

interface LoginDialogWindowProps {
    open: boolean;
    handleOpenAuthDialog: () => void;
    authModeH?: AuthMode | string;
}

const LoginDialogWindow: React.FC<LoginDialogWindowProps> = ({
                                                                 open,
                                                                 handleOpenAuthDialog,
                                                                 authModeH
                                                             }) => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        repeatPassword: "",
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [authMode, setAuthMode] = useState<string>(AuthMode.login);

    useEffect(() => {
        if (authModeH !== undefined) {
            setAuthMode(authModeH);
        }
    }, [authModeH]);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
        },
        []
    );

    const validateFormData = useCallback((): boolean => {
        const newErrors: Partial<FormData> = {};
        let isValid = true;

        if (!formData.email) {
            newErrors.email = "Email обязателен";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Некорректный email";
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = "Пароль обязателен";
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Пароль должен содержать не менее 6 символов";
            isValid = false;
        }

        if (authMode === AuthMode.register) {
            if (!formData.repeatPassword) {
                newErrors.repeatPassword = "Подтверждение пароля обязательно";
                isValid = false;
            } else if (formData.repeatPassword !== formData.password) {
                newErrors.repeatPassword = "Пароли не совпадают";
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    }, [formData, authMode]);

    const handleSubmit = useCallback(() => {
        if (validateFormData()) {
            console.log("Отправляем данные:", formData);
            handleOpenAuthDialog();
        }
    }, [validateFormData, formData, handleOpenAuthDialog]);

    return (
        <AuthDialog open={open} onClose={handleOpenAuthDialog}>
            <DialogTitle>
                {authMode === AuthMode.login ? "Войти" : "Регистрация"}
            </DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2} mt={1}>
                    <TextField
                        autoFocus
                        name="email"
                        placeholder="Email"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        variant="outlined"
                        value={formData.password}
                        onChange={handleInputChange}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    {authMode === AuthMode.register && (
                        <TextField
                            name="repeatPassword"
                            type="password"
                            placeholder="Подтверждение пароля"
                            variant="outlined"
                            value={formData.repeatPassword}
                            onChange={handleInputChange}
                            error={!!errors.repeatPassword}
                            helperText={errors.repeatPassword}
                        />
                    )}
                </Box>
            </DialogContent>
            <DialogActions
                sx={{
                    justifyContent: "space-between",
                    margin: "0 auto",
                    width: "70%",
                }}
            >
                <Button onClick={handleOpenAuthDialog} variant="contained" color="error">
                    Закрыть
                </Button>
                <Button variant="contained" color="primary" onClick={handleSubmit} size='large'>
                    Отправить
                </Button>
            </DialogActions>
            <Box textAlign="center" mb={2}>
                {authMode === AuthMode.login ? (
                    <Button variant="text" onClick={() => setAuthMode(AuthMode.register)}>
                        Зарегистрироваться
                    </Button>
                ) : (
                    <Button variant="text" onClick={() => setAuthMode(AuthMode.login)}>
                        Войти
                    </Button>
                )}
            </Box>
        </AuthDialog>
    );
};

export default LoginDialogWindow;
