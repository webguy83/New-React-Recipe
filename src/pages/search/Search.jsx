import './Search.css';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Alert, CircularProgress } from '@mui/material';
import RecipeList from '../../components/recipeList/RecipeList';

export default function Search() {
  const [searchParams] = useSearchParams();
  const term = searchParams.get('q');
  const url = `http://localhost:3000/recipes?q=${term}`;
  const { data, isPending, error } = useFetch(url);

  return (
    <div className='search'>
      {error && <Alert severity='error'>{error}</Alert>} {isPending && <CircularProgress />}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
