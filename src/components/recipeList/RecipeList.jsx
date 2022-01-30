import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function RecipeList({ recipes }) {
  const navigate = useNavigate();
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
          <CardActions>
            <Button onClick={() => navigate(`/recipe/${recipe.id}`)} size='small'>
              Cook More
            </Button>
          </CardActions>
        </Card>
      );
    });
  } else {
    return <Typography variant='h4'>Nothing to see here.</Typography>;
  }
}
