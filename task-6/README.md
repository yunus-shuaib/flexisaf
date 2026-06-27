# Recipe Hub
## [Live link](https://flexisaftask6.vercel.app/)
## Overview
Recipe Hub is a React application that fetches recipe data from the DummyJSON API and lets users search recipes with **debounced search**. Clicking a result displays its details.

## Concepts Covered

### JSON
The app requests JSON from:
`https://dummyjson.com/recipes`

Example:
```json
{
  "id": 1,
  "name": "Classic Margherita Pizza",
  "ingredients": ["Flour","Cheese"],
  "instructions": ["Prepare dough","Bake"]
}
```

`response.json()` converts the HTTP response into a JavaScript object.

### Async/Await
```js
const response = await fetch("https://dummyjson.com/recipes");
const data = await response.json();
```
`await` pauses until each Promise resolves, making asynchronous code easier to read.

### Promises
- `fetch()` returns a Promise.
- `response.json()` also returns a Promise.
- `await` waits for those Promises before continuing.

### Form Data
The search input is a **controlled component**.

```jsx
<input
  value={query}
  onChange={handleChange}
/>
```

```js
function handleChange(e){
  setQuery(e.target.value);
}
```

React stores the current input inside state instead of reading directly from the DOM.

### Debouncing
The app waits 1 second after typing before searching.

```js
useEffect(()=>{
  const timeoutId = setTimeout(()=>{
    setDebounceQuery(queryCleanUp(query));
  },1000);

  return ()=>clearTimeout(timeoutId);
},[query]);
```

Benefits:
- Reduces unnecessary filtering
- Improves performance
- Better user experience

### Filtering
```js
data.filter(recipe =>
  recipe.name.toLowerCase().includes(debounceQuery)
);
```

### Conditional Rendering
The recipe card only appears when a recipe is selected.

### React Hooks Used
- useState
- useEffect

## Learning Outcomes
- Fetch API data
- Work with JSON
- Understand Promises and async/await
- Manage controlled forms
- Debounce user input
- Filter arrays
- Render UI conditionally
