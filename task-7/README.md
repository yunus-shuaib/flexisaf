# React Global State Management: Context API vs Redux

A simple React project demonstrating two of the most common approaches to **global state management**:

- **React Context API**
- **Redux (Plain Redux)**

The application allows you to switch between both implementations at runtime to observe how each approach manages the same application state.

---
## [Live](https://flexisaftask7.vercel.app/)

# Project Objective

The purpose of this project is **not** to build a feature-rich application but to understand how global state is managed using two different techniques.

Both implementations provide the same functionality:

- Toggle between **Light** and **Dark** themes.
- Share theme state across multiple components.
- Update every subscribed component whenever the state changes.

This allows for a direct comparison between Context API and Redux while maintaining identical application behavior.

---

# State Management in React

State in React generally falls into two categories:

## Local State

Local state belongs to a single component and is typically managed with hooks such as:

```jsx
const [count, setCount] = useState(0);
```

Only the component that owns the state can directly update it.

Examples include:

- Form inputs
- Modal visibility
- Dropdown menus
- Toggle buttons
- Component-specific UI state

---

## Global State

Global state is shared across multiple components.

Examples include:

- Theme
- Authentication
- Shopping cart
- User profile
- Language preference
- Notifications

Instead of passing props through multiple levels of components (prop drilling), global state allows every interested component to access the same data.

This project demonstrates two common approaches for managing global state:

- React Context API
- Redux

---

# React Context API

The Context API is React's built-in solution for sharing data across the component tree.

Rather than manually passing props through every intermediate component, Context allows components to consume shared data directly.

## Context Architecture

```text
ThemeProvider
      │
      ▼
Shared Context Value
      │
      ▼
Any Descendant Component
      │
      ▼
useContext()
      │
      ▼
Updated UI
```

---

## Core Concepts

### createContext()

Creates the shared context.

```javascript
const ThemeContext = createContext();
```

---

### Provider

The Provider supplies the shared state to every descendant component.

```jsx
<ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
</ThemeContext.Provider>
```

---

### useContext()

Consumes the shared data.

```javascript
const { theme, toggleTheme } = useContext(ThemeContext);
```

---

## Advantages

- Built into React
- Very little setup
- Easy to understand
- Excellent for small applications
- No external dependencies

---

## Limitations

As applications grow:

- Multiple providers may become necessary.
- Business logic may become scattered.
- Frequent state updates may trigger unnecessary re-renders.
- State organization becomes more difficult.

---

# Redux

Redux is a predictable state container that centralizes application state inside a single store.

Components never modify state directly.

Instead they:

1. Dispatch an action.
2. The reducer receives the action.
3. A new state is calculated.
4. The store updates.
5. Subscribed components automatically re-render.

---

# Redux Data Flow

```text
User Interaction

      │

      ▼

dispatch(action)

      │

      ▼

Redux Store

      │

      ▼

Reducer

      │

      ▼

New State

      │

      ▼

Store Updated

      │

      ▼

useSelector()

      │

      ▼

React Re-renders
```

Redux follows a **unidirectional data flow**, making state changes predictable and easier to debug.

---

# Redux Core Concepts

## Store

The store is the single source of truth.

```javascript
const store = createStore(themeReducer);
```

Responsibilities:

- Holds application state
- Receives dispatched actions
- Notifies subscribed components

---

## Actions

Actions describe **what happened**.

They are plain JavaScript objects.

Example:

```javascript
{
    type: "THEME"
}
```

---

## Action Creators

Action creators are functions that return action objects.

```javascript
function themeAction() {

    return {

        type: "THEME"

    };

}
```

Using action creators prevents repeating action objects throughout the application.

---

## Dispatch

Dispatch sends actions to the Redux store.

```javascript
dispatch(themeAction());
```

The store forwards the action to the reducer.

---

## Reducers

Reducers determine how state changes.

Example:

```javascript
function themeReducer(state, action){

    switch(action.type){

        case THEME:

            return {

                ...state,

                theme:

                state.theme === "light"

                    ? "dark"

                    : "light"

            };

        default:

            return state;

    }

}
```

Reducers should:

- Be pure functions
- Never mutate state
- Always return a new state object

---

## Provider

The Provider makes the Redux store available throughout the component tree.

```jsx
<Provider store={store}>
    <App />
</Provider>
```

Without the Provider, hooks such as `useSelector()` and `useDispatch()` cannot access the Redux store.

---

## useSelector()

Reads state from the Redux store.

```javascript
const theme = useSelector(state => state.theme);
```

Whenever the selected value changes, React automatically re-renders the component.

---

## useDispatch()

Returns the Redux dispatch function.

```javascript
const dispatch = useDispatch();
```

Dispatching an action:

```javascript
dispatch(themeAction());
```

---

# Complete Redux Lifecycle

```text
Button Click

      │

      ▼

dispatch(themeAction())

      │

      ▼

Action Creator

      │

      ▼

Action Object

      │

      ▼

Redux Store

      │

      ▼

Reducer

      │

      ▼

New State

      │

      ▼

Store Updated

      │

      ▼

useSelector()

      │

      ▼

React Re-renders
```

---

# Project Structure

```text
src/

│
├── context/
│   ├── Context.jsx
│   ├── Header.jsx
│   ├── Main.jsx
│   ├── Footer.jsx
│ 
│
├── redux/
│   ├── components/
│   │   ├── Redux.jsx
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   └── Footer.jsx
│   │
│   ├── store.js
│   ├── themeReducer.js
│   ├── themeAction.js
│   └── themeActionTypes.js
│
└── App.jsx
```

---

# Context API vs Redux

| Context API | Redux |
|--------------|--------|
| Built into React | External library |
| Minimal setup | More boilerplate (Plain Redux) |
| Excellent for simple shared state | Excellent for medium and large applications |
| Uses `Provider` and `useContext()` | Uses Store, Reducers, Actions, Dispatch and Selectors |
| Good for themes, language and authentication | Good for complex application state |

---

# What This Project Demonstrates

By completing this project, you will understand:

- Local vs Global state
- React Context API
- Context Provider
- useContext()
- Redux Store
- Reducers
- Action Creators
- Action Types
- Dispatch
- useSelector()
- useDispatch()
- Predictable state updates
- Unidirectional data flow
- Sharing state across multiple components

---

# Technologies Used

- React
- JavaScript (ES6+)
- React Context API
- Redux
- React Redux

