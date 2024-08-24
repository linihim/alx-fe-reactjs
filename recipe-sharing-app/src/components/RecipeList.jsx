import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  
    return (
      <div>
        <h2>Recipes</h2>
        {filteredRecipes.length === 0 ? (
            <p>No recipes found. Try a different search term.</p>
        ) : (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
            </div>
          ))
        )}
      </div>
    );
  };

export default RecipeList;