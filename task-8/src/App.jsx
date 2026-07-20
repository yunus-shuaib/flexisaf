import { useState, createContext } from 'react';
import { Container, Typography, Button, TextField, Box, Collapse } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import TaskCard from "./components/TaskCard.jsx";

export const Context = createContext();

function App() {
  const [addingTask, setAddingTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  
  // State for the main form inputs
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]);

  function handleAddTask() {
    if (!addingTask) {
      setAddingTask(true);
    } else {
      if (taskTitle.trim()) {
        const newTask = {
          task: taskTitle.trim(),
          details: taskDetails.trim() || "No details",
          dueDate: dueDate || "No specified date",
          isEditing: false,
          taskId: `task-${Date.now()}`
        };
        setTasks(prev => [...prev, newTask]);    
      }
      // Reset inputs & close
      setTaskTitle("");
      setTaskDetails("");
      setAddingTask(false);
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        My Task Manager
      </Typography>

      {/* Smoothly collapses/expands the form container */}
      <Collapse in={addingTask}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2, p: 2, border: '1px dashed grey', borderRadius: 2 }}>
          <TextField 
            label="Task Title" 
            variant="outlined" 
            fullWidth 
            value={taskTitle} 
            onChange={(e) => setTaskTitle(e.target.value)} 
          />
          <TextField 
            label="Task Details" 
            variant="outlined" 
            multiline 
            rows={3} 
            fullWidth 
            value={taskDetails} 
            onChange={(e) => setTaskDetails(e.target.value)} 
          />
          <TextField 
            label="Set Due Date" 
            type="date" 
            fullWidth 
            slotProps={{ inputLabel: { shrink: true } }}
            value={dueDate} 
            onChange={(e) => setDueDate(e.target.value)} 
          />
        </Box>
      </Collapse>

      <Button 
        variant="contained" 
        fullWidth 
        startIcon={addingTask ? <SaveIcon /> : <AddIcon />} 
        onClick={handleAddTask}
        sx={{ mb: 4 }}
      >
        {addingTask ? "Save Task" : "Add New Task"}
      </Button>

      <Context.Provider value={{ tasks, setTasks }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {tasks.length >= 1 ? (
            tasks.map(t => (
              <TaskCard 
                taskHeadline={t.task} 
                taskDetails={t.details} 
                date={t.dueDate} 
                id={t.taskId} 
                isEditing={t.isEditing} 
                key={t.taskId}
              />
            ))
          ) : (
            <Typography align="center" color="textSecondary">No Tasks!</Typography>
          )}
        </Box>
      </Context.Provider>
    </Container>
  );
}

export default App;
