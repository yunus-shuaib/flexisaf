# React Concepts Explained
## [Live link](https://flexisaftaskthree.vercel.app/)

## 1. JSX
JSX (JavaScript XML) is a syntax extension for JavaScript used in React.
It allows you to write HTML-like code inside JavaScript.
---

## 2. Components

React apps are built using components.

### Functional Components
These are simple JavaScript functions that return JSX.

Example:
```jsx
function Profile(props) {
  return <h1>{props.name}</h1>;
}
```

### Class Components
These are ES6 classes that extend `React.Component`.

Example:
```jsx
class Profile extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

---

## 3. Props
Props (properties) are used to pass data from parent to child components.

Example:
```jsx
<Profile name="Doux" />
```

Inside child:
```jsx
props.name
```

Props are immutable.

---

## 4. State
State is internal data managed within a component. It represents the dynamic data in the component.

Example using hooks:
```jsx
const [count, setCount] = useState(0);
```

State changes trigger re-rendering.

---

## 5. Events
Events in React are handled using camelCase syntax.

Example:
```jsx
<button onClick={handleClick}>Click me</button>
```

Event handlers receive an event object just like that of the real DOM.

---

## 6. Virtual DOM
The Virtual DOM is a lightweight copy of the real DOM.
React updates the Virtual DOM first, compares it with the previous version (diffing),
then updates only the changed parts of the real DOM.

This improves performance.

---

## 7. Fragment
A Fragment allows the grouping of multiple elements without adding extra nodes to the DOM.

Example:
```jsx
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <p>World</p>
    </Fragment>
  );
}
```

Or shorthand:
```jsx
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

## 8. Example App Structure
Your example demonstrates:

- State: storing users list
- Events: form submission and button clicks
- Props: passing data to Profile component
- Components: Profile (class) and App (functional)

---

## Summary
React is a component-based library that uses:
- JSX for UI structure
- Props for data flow
- State for dynamic data
- Events for interaction
- Virtual DOM for performance
- Components (functional & class) for structure
- Fragments for clean DOM output
