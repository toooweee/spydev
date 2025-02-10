// Preview.tsx
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';

export interface PageInfo {
  description: string;
  id: number;
  lifeDate: Dayjs | null;
  name: string;
  photo?: Blob;
  theme: 'light' | 'dark' | 'blue' | 'green' | 'red';
}

interface PagePreviewProps {
  pageInfo: PageInfo;
  photoPreview: string | null;
}

// Стили для превью в зависимости от выбранной темы
const themeStyles: Record<PageInfo['theme'], { backgroundColor: string; color: string }> = {
  light: { backgroundColor: '#ffffff', color: '#000000' },
  dark: { backgroundColor: '#333333', color: '#ffffff' },
  blue: { backgroundColor: '#E3F2FD', color: '#0D47A1' },
  green: { backgroundColor: '#E8F5E9', color: '#1B5E20' },
  red: { backgroundColor: '#FFEBEE', color: '#B71C1C' },
};

export const PagePreview: React.FC<PagePreviewProps> = ({ pageInfo, photoPreview }) => {
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: 3,
        borderRadius: 2,
        ...themeStyles[pageInfo.theme],
      }}
    >
      <CardContent>
        <Typography variant="h4" align="center" gutterBottom>
          Превью страницы
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          {photoPreview && (
            <Box sx={{ flexShrink: 0 }}>
              <img
                src={photoPreview}
                alt="Предпросмотр"
                style={{ maxWidth: 150, maxHeight: 150, borderRadius: 8 }}
              />
            </Box>
          )}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5">
              {pageInfo.name || 'Название страницы'}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {pageInfo.description || 'Описание страницы будет отображаться здесь.'}
            </Typography>
            {pageInfo.lifeDate && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                {`Дата: ${pageInfo.lifeDate.format('DD MMMM YYYY')}`}
              </Typography>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
