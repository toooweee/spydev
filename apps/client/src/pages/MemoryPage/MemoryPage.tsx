import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { PageInfo } from '../PagePreview/PagePreview';

interface PageProps {
  pageInfo: PageInfo;
  photoPreview: string | null;
}

const MemoryPage: FC<PageProps> = ({pageInfo, photoPreview}) => {
  return (
    <Container>
      <Typography variant="h1">
        {pageInfo.name}
      </Typography>
      <Box>
        <Box sx={{ flexShrink: 0 }}>
          <img
            src={photoPreview}
            alt="Предпросмотр"
            style={{ maxWidth: 150, maxHeight: 150, borderRadius: 8 }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default MemoryPage;
