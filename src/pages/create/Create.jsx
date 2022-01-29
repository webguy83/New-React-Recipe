import './Create.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useState } from 'react';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  function submitForm(e) {
    e.preventDefault();
    console.log(title, method, cookingTime);
  }

  return (
    <Box
      onSubmit={submitForm}
      component='form'
      autoComplete='off'
      sx={{ backgroundColor: 'white', padding: '15px' }}
    >
      <Typography variant='h4' gutterBottom sx={{ textAlign: 'center' }}>
        Create a new Recipe
      </Typography>
      <Container
        maxWidth='sm'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '470px',
          justifyContent: 'space-between',
        }}
      >
        <TextField
          required
          id='outlined-required'
          label='Recipe title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize
          minRows={8}
          aria-label='recipe method'
          placeholder='Recipe method'
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />
        <TextField
          required
          label='Cooking time (min)'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setCookingTime(e.target.value)}
          value={cookingTime}
        />
        <Button type='submit' variant='contained' sx={{ alignSelf: 'center' }}>
          Create Recipe
        </Button>
      </Container>
    </Box>
  );
}
