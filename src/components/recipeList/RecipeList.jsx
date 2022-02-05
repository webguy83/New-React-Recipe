import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { db, deleteDoc, doc } from '../../firebase/config';

export default function RecipeList({ recipes }) {
  const navigate = useNavigate();

  function deleteCard(id) {
    deleteDoc(doc(db, 'recipes', id));
  }
  if (recipes.length > 0) {
    return recipes.map((recipe) => {
      return (
        <Card
          key={recipe.id}
          sx={{
            maxWidth: 330,
            margin: '0 10px',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardContent>
            <Typography variant='h4' key={recipe.id}>
              {recipe.title}
            </Typography>
            <Typography variant='body2' sx={{ marginTop: '15px' }}>
              {recipe.method.substring(0, 100)}...
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => navigate(`/recipe/${recipe.id}`)}
              size='small'
            >
              Cook More
            </Button>
            <IconButton aria-label='delete' onClick={() => deleteCard(recipe.id)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      );
    });
  } else {
    return <Typography variant='h4'>Nothing to see here.</Typography>;
  }
}
