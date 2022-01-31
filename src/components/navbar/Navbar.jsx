import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../search/SearchBar';
import { useToggleColorMode } from '../../hooks/useToggleColorMode';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@mui/material/styles';

const pages = ['Home', 'Create'];

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const colourMode = useToggleColorMode();

  const onClickLink = (page) => {
    navigate(`/${page.toLowerCase()}`);
  };

  function renderDarkModeToggleSwitch() {
    const checked = theme.palette.mode === 'dark' ? true : false;
    return <Switch checked={checked} onChange={colourMode.toggleColorMode} />;
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            bgcolor: 'Background.default',
            color: 'text.primary',
          }}
        >
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
          <SearchBar />
          <FormGroup>
            <FormControlLabel control={renderDarkModeToggleSwitch()} label='Dark' />
          </FormGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
