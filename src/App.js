import { useState } from "react";
import SearchBar from "./components/search";
import FavouriteRecipes from "./components/fav";
import helloKittyImg from './hk.jpeg';
import './App.css';

function App() {
  const [dish, setDish] = useState('');
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const getRecipe = async () => {
    try {
      const res = await fetch(`https://recipe-backend-90a5.onrender.com/recipes?dish=${dish}`);
      const result = await res.json();

      console.log('raw data ->', result);

      if (Array.isArray(result) && result.length > 0) {
        setRecipes(result);
        setError(null);
      } else {
        setError("No recipes found");
        setRecipes([]);
      }

    } catch (e) {
      console.log("Error fetching:", e);
      setError("Server Error");
      setRecipes([]);
    }
  };

  return (
    <div className="app">
      <h1>Sweet Corner ᯓ★ˎˊ˗</h1>

      <SearchBar
        dish={dish}
        setDish={setDish}
        getRecipe={getRecipe}
        error={error}
      />
      <div className="header-image">
       <img src={helloKittyImg} alt="Hello Kitty Banner" className="header-image" />
      </div>


      {error && <p style={{ color: 'red', marginTop: 20 }}>{error}</p>}

      <div className="recipes-container">
        {recipes.map((item, i) => (
          <div key={item.id || i} className="recipe-card">
            <h3>{item.title}</h3>
            <a
              href={`https://spoonacular.com/recipes/${item.title.replace(/ /g, "-")}-${item.id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.image} alt={item.title} width="200px" />
            </a>
          </div>
        ))}
      </div>

      <FavouriteRecipes />
    </div>
  );
}

export default App;
