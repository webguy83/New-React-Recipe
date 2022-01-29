import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/navbar/Navbar';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Container sx={{ marginTop: '20px' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/recipe/:id' element={<Recipe />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
