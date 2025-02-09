import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

interface PageInfo {
  description: string;
  id: number;
  lifeDate: Dayjs | null;
  name: string;
  photo?: Blob;
  theme: 'light' | 'dark' | 'blue' | 'green' | 'red';
}

const MemoryFormPage: React.FC = () => {
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    id: 0,
    name: '',
    lifeDate: dayjs(),
    description: '',
    theme: 'light',
  });

  // Для предпросмотра загруженной картинки
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setPageInfo(prev => ({ ...prev, photo: file }));
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4, backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Создание страницы
          </Typography>

          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Поле для ввода имени */}
            <FormControl fullWidth>
              <TextField
                label="Имя"
                variant="outlined"
                value={pageInfo.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPageInfo({ ...pageInfo, name: e.target.value })
                }
                fullWidth
              />
            </FormControl>

            {/* Поле для ввода описания */}
            <FormControl fullWidth>
              <TextField
                label="Описание"
                variant="outlined"
                multiline
                rows={4}
                value={pageInfo.description}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPageInfo({ ...pageInfo, description: e.target.value })
                }
                fullWidth
              />
            </FormControl>

            {/* Выбор темы страницы */}
            <FormControl fullWidth>
              <InputLabel id="theme-select-label">Тема</InputLabel>
              <Select
                labelId="theme-select-label"
                id="theme-select"
                value={pageInfo.theme}
                label="Тема"
                onChange={(e) =>
                  setPageInfo({ ...pageInfo, theme: e.target.value as 'light' | 'dark' | 'blue' | 'green' | 'red' })
                }
              >
                <MenuItem value="light">Светлая</MenuItem>
                <MenuItem value="dark">Тёмная</MenuItem>
                <MenuItem value="blue">Синяя</MenuItem>
                <MenuItem value="green">Зелёная</MenuItem>
                <MenuItem value="red">Красная</MenuItem>
              </Select>
            </FormControl>

            {/* Выбор даты */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Выберите дату"
                value={pageInfo.lifeDate}
                onChange={(newValue: Dayjs | null) =>
                  setPageInfo(prev => ({ ...prev, lifeDate: newValue }))
                }
                slotProps={{ textField: { fullWidth: true } }}
              />
            </LocalizationProvider>

            {/* Загрузка фото */}
            <FormControl fullWidth>
              <Button variant="contained" component="label">
                Загрузить фото
                <input
                  type="file"
                  accept="image/jpeg, image/jpg, image/png"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
              {photoPreview && (
                <Box mt={2} display="flex" justifyContent="center">
                  <img
                    src={photoPreview}
                    alt="Предпросмотр"
                    style={{ maxWidth: '100%', maxHeight: 300, borderRadius: 8 }}
                  />
                </Box>
              )}
            </FormControl>

            {/* Кнопка для сохранения */}
            <Button variant="contained" color="primary" type="submit">
              Сохранить
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MemoryFormPage;
