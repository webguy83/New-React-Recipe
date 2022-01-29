import { useParams } from 'react-router-dom';
import { Alert, CircularProgress } from '@mui/material';
import { useFetch } from '../../hooks/useFetch';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ListItemIcon from '@mui/material/ListItemIcon';

import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const { data: recipe, isPending, error } = useFetch(`http://localhost:3000/recipes/${id}`);

  function generateIngredients(ingredients) {
    return ingredients.map((ingredient) => {
      return (
        <ListItem key={ingredient}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText>{ingredient}</ListItemText>
        </ListItem>
      );
    });
  }

  function generateRecipe(recipe) {
    return (
      <Container maxWidth='sm' sx={{ backgroundColor: 'white' }}>
        <Typography variant='h4'>{recipe.title}</Typography>
        <List
          component='ul'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader
              component='div'
              id='nested-list-subheader'
              sx={{ lineHeight: 'inherit', fontSize: 19, marginTop: '10px' }}
            >
              Ingredients
            </ListSubheader>
          }
        >
          {generateIngredients(recipe.ingredients)}
        </List>
        <Typography variant='body2' gutterBottom>
          {recipe.method}
        </Typography>
        <Typography variant='overline' display='block' gutterBottom>
          {recipe.cookingTime}
        </Typography>
      </Container>
    );
  }
  return (
    <div className='recipe'>
      {error && <Alert severity='error'>{error}</Alert>} {isPending && <CircularProgress />}
      {recipe && generateRecipe(recipe)}
    </div>
  );
}
