import { Alert, CircularProgress } from '@mui/material';
import './Home.css';
import RecipeList from '../../components/recipeList/RecipeList';
import { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../../firebase/config';

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const recipesCol = collection(db, 'recipes');
    getDocs(recipesCol)
      .then((recipeSnapshot) => {
        setIsPending(false);
        if (!recipeSnapshot.empty) {
          const recipeList = recipeSnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setData(recipeList);
        } else {
          setError('No recipes to load.');
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className='home'>
      {error && <Alert severity='error'>{error}</Alert>} {isPending && <CircularProgress />}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
