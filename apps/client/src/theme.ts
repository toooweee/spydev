import {createTheme, ThemeOptions} from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    900?: string; // Добавляем поддержку кастомных оттенков
    800?: string; // Добавляем поддержку кастомных оттенков
    700?: string; // Добавляем поддержку кастомных оттенков
    600?: string; // Добавляем поддержку кастомных оттенков
    500?: string; // Добавляем поддержку кастомных оттенков
    400?: string; // Добавляем поддержку кастомных оттенков
    300?: string; // Добавляем поддержку кастомных оттенков
    200?: string; // Добавляем поддержку кастомных оттенков
    100?: string; // Добавляем поддержку кастомных оттенков
  }
}

const AppTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#2C3E50",
      100: "#34495E",
    },
    secondary: {
      main: "#FFFFFF",
      100: "#ECF0F1",
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {

        }
      }
    }
  }
})

export default AppTheme;
