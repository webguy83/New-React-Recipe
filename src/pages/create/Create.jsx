import './Create.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const { postData, data } = useFetch('http://localhost:3000/recipes', 'POST');
  const navigate = useNavigate();

  const defaultIngredients = ['sugar', 'salt', 'honey', 'butter', 'horse raddish'];

  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [data, navigate]);

  function submitForm(e) {
    e.preventDefault();
    postData({ title, method, ingredients, cookingTime: `${cookingTime} minutes` });
  }

  function addIngredients(_e, values) {
    setIngredients(values);
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
          minHeight: '550px',
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
        <Autocomplete
          multiple
          id='tags-filled'
          options={defaultIngredients}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip variant='outlined' label={option} {...getTagProps({ index })} />
            ))
          }
          onChange={(e, val) => addIngredients(e, val)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant='outlined'
              label='Add Ingredients'
              value={ingredients}
              placeholder='Add'
            />
          )}
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
        <Button
          disabled={!title || method.length < 100 || ingredients.length < 1 || !cookingTime}
          type='submit'
          variant='contained'
          sx={{ alignSelf: 'center' }}
        >
          Create Recipe
        </Button>
      </Container>
    </Box>
  );
}
