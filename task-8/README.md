# React Task Manager (Material UI Edition)

## [Live](https://flexisaftask8.vercel.app/)
A modern, responsive, and intuitive **Task Management Application** built using **React** and styled exclusively with **Material UI (MUI)**. This application provides a seamless task creation, inline editing, and deletion workflow backed by a clean component architecture.

---

## Material UI (MUI) Concepts Used

Material UI is a comprehensive component library that implements Google's **Material Design** system. This project leverages several key MUI architectural concepts:

### 1. The Layout System (`Container`, `Box`)
* **`Container`**: Centers your content horizontally and constrains its maximum width based on viewport breakpoints (`maxWidth="sm"`).
* **`Box`**: Serves as a wrapper component for layout building. It grants direct access to the `sx` styling prop without creating extra custom CSS files.

### 2. Form & Control Components (`TextField`, `Button`)
* **`TextField`**: Handles standard input, textareas (`multiline`), and date selection inputs out of the box with floating label animations and validation states.
* **`Button`**: Provides styled interactable elements supporting visual hierarchy through variants (`contained`, `outlined`) and iconography (`startIcon`).

### 3. Surface & Data Display (`Card`, `CardContent`, `CardActions`, `Typography`)
* **`Card`**: Wraps individual tasks in styled elevation surfaces with implicit borders and rounded radii.
* **`Typography`**: Enforces a strict typographic hierarchy (e.g., `variant="h4"`, `variant="h6"`, `body2`, `caption`) while maintaining accessibility.

### 4. Animation & Transitions (`Collapse`)
* **`Collapse`**: Automatically animates vertical height adjustments, smoothly revealing or hiding the "Add Task" creation form without manual keyframes or JavaScript DOM manipulation.

### 5. Icons (`@mui/icons-material`)
* Provides accessible SVG icons (like `AddIcon`, `SaveIcon`, `EditIcon`, and `DeleteIcon`) that dynamically resize and align with parent button text.

---

## 🚀 How MUI is Utilized in the Project Architecture

### 1. Controlled State Over Manual DOM Access
Rather than using `contentEditable` or manual `useRef` queries on HTML elements, MUI components operate strictly as **Controlled Components**. State variables manage input values directly (`value` and `onChange`), allowing React and MUI to instantly sync field labels, focus states, and input borders.

### 2. The `sx` Styling Engine
In place of inline styles or raw CSS files, styling is handled via MUI's `sx` prop:
```jsx
// Dynamic border styling based on task edit state
<Card 'error.main' 'grey.300' : ? borderColor: isEditing sx="{{" variant="outlined" }}>
