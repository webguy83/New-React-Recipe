import { useFetch } from '../../hooks/useFetch';
import { Alert, CircularProgress } from '@mui/material';
import './Home.css';
import RecipeList from '../../components/recipeList/RecipeList';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes');

  return (
    <div className='home'>
      {error && <Alert severity='error'>{error}</Alert>} {isPending && <CircularProgress />}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
