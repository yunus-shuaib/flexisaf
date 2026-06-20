# React Hooks 

[live link]()
## Introduction

React Hooks allow functional components to use state, lifecycle
features, and references.

# 1. useRef

## What is useRef?

`useRef` creates a mutable object whose value persists across renders.
Updating it does **not** trigger a re-render.

``` javascript
const refName = useRef(initialValue);
```

### Common Uses

-   Access DOM elements
-   Store timer IDs
-   Keep previous values
-   Hold external library instances

### Example

``` javascript
const inputRef = useRef(null);

function focusInput() {
  inputRef.current.focus();
}
```

# 2. useEffect

## What is useEffect?

`useEffect` performs side effects such as: - Fetching data - Setting
timers - Adding event listeners - Updating the document title

``` javascript
useEffect(() => {
  // side effect

  return () => {
    // cleanup
  };
}, [dependencies]);
```

## Dependency Array

-   No array: runs after every render
-   `[]`: runs once after initial render
-   `[value]`: runs whenever `value` changes
-   `[a, b]`: runs whenever `a` or `b` changes

## Cleanup

``` javascript
useEffect(() => {
  const id = setInterval(() => {}, 1000);

  return () => clearInterval(id);
}, []);
```

# 3. Custom Hooks

## What is a Custom Hook?

A custom hook is a reusable function that uses one or more React hooks.
Its name must start with `use`.

## Example

``` javascript
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}
```

# Summary

-   **useRef** stores mutable values and DOM references.
-   **useEffect** manages side effects and cleanup.
-   **Custom hooks** encapsulate reusable React logic.
