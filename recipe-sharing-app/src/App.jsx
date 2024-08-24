import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import searchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {
  return (
    <Router>
    <div className="App" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/add" style={{ marginRight: '10px' }}>Add New Recipe</Link>
        <Link to="/favorites" style={{ marginRight: '10px' }}>My Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <>
            <searchBar />
            <RecipeList />
            <RecommendationsList />
          </>
        } />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;