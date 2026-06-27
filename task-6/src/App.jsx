import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  
const [data, setData] = useState([]);
const [query, setQuery] = useState("");
const [debounceQuery, setDebounceQuery] = useState("");
  const [results, setResults] = useState([]);
  const [recipe, setRecipe] = useState(null);
 //const display = useRef(null);
  
useEffect(()=>{
  async function fetchData(){
    try{
     const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setData(data.recipes);

    }catch(error){
      console.error("Error fetching data");
    } 
      
    }
  fetchData();
}, []);
  
useEffect(()=>{
    const timeoutId = setTimeout(()=>{
  setDebounceQuery(queryCleanUp(query));
    }, 1000)
  return ()=>clearTimeout(timeoutId)
 }, [query]);
  
  useEffect(() => {
    if(debounceQuery.length >= 3){
    
  setResults(
    data.filter((recipe) =>recipe.name.toLowerCase().includes(debounceQuery)
    )
  );
      } else {
      setResults([])
      }
}, [debounceQuery, data]);

  function queryCleanUp(query) {
  return query
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
  }
  
function handleChange(e){
      setQuery(e.target.value);
    }
function handleRecipeClick(id) { setRecipe(results.filter(result=>result.id == id)[0]); 
//display.current.classList.add("recipe-card");
}

function handleCloseBtn(e) {
  e.preventDefault();
  setRecipe(null)
}
  return (
    <>
      <h1>Recipe Hub</h1>
    <div className="main">
    <h2>Search Recipe</h2>
      <form>
      <input type="text" placeholder="Search..." value={query} onChange={handleChange}/>
        </form>
      
    <div className="search-results">{results.length > 0 ? results.map(result => <div><p className="result" onClick={()=>handleRecipeClick(result.id)} key={result.id}>{result.name}</p></div>) : query ? <p className="info">Recipe not found</p> : <p className="info">Type to search recipe</p>}</div>
    </div>

      <div className={recipe ? "recipe-card" : "recipe-hide"}>
     <h3>{recipe && recipe.name}</h3>
        <div className="recipe-image-container">
    <img src={recipe && recipe.image} alt="Recipe image"/>       
        </div>

        <div className="details-container">
        <details>
          <summary>Ingredients:</summary>
          <div>{recipe && recipe.ingredients.join(", ")}</div></details>
        <details>
          <summary>Instructions:</summary>
          <div>{recipe && recipe.instructions.join(" ")}<hr/>Cook Time(min): {recipe && recipe.cookTimeMinutes}</div></details>
        </div>
    <button onClick={(e)=>handleCloseBtn(e)}>close</button>
      </div>
    </>
  )
}

export default App
