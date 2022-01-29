import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'Create', 'Search'];

export default function Navbar() {
  const navigate = useNavigate();
  const onClickLink = (page) => {
    navigate(`/${page.toLowerCase()}`);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => onClickLink(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
