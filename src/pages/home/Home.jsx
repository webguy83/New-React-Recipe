import { Alert, CircularProgress } from '@mui/material';
import './Home.css';
import RecipeList from '../../components/recipeList/RecipeList';
import { useEffect, useState } from 'react';
import { db, onSnapshot, collection } from '../../firebase/config';

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unSub = onSnapshot(
      collection(db, 'recipes'),
      (snapShot) => {
        setIsPending(false);
        if (!snapShot.empty) {
          const recipeList = snapShot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setData(recipeList);
        } else {
          setError('No recipes to load.');
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );
    return () => unSub();
  }, []);

  return (
    <div className='home'>
      {error && <Alert severity='error'>{error}</Alert>} {isPending && <CircularProgress />}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
