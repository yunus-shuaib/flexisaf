import { useState, useContext } from "react";
import { Context } from "../App.jsx";
import { Card, CardContent, CardActions, Typography, Button, TextField, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

function TaskCard({ taskHeadline, taskDetails, date, id, isEditing }) {
  const { tasks, setTasks } = useContext(Context);

  // Manage values inside local state for clean, reactive editing
  const [localTask, setLocalTask] = useState(taskHeadline);
  const [localDetail, setLocalDetail] = useState(taskDetails);
  const [localDate, setLocalDate] = useState(date);

  function handleEditBtn() {
    if (!isEditing) {
      setTasks(prev => prev.map(t => t.taskId === id ? { ...t, isEditing: true } : t));
    } else {
      const finalTask = localTask.trim() ? localTask.trim() : taskHeadline;
      const finalDetail = localDetail.trim() ? localDetail.trim() : "No details";

      setLocalTask(finalTask);
      setLocalDetail(finalDetail);

      setTasks(prev => prev.map(t => t.taskId === id ? { ...t, isEditing: false } : t));
    }
  }

  function handleDateChange(e) {
    setLocalDate(e.target.value || "No specified date");
  }

  const displayDate = localDate && localDate !== "No specified date" 
    ? new Date(localDate).toLocaleDateString() 
    : "No specified date";

  return (
    <Card variant="outlined" sx={{ borderColor: isEditing ? 'error.main' : 'grey.300' }}>
      <CardContent>
        {isEditing ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
              label="Edit Title" 
              size="small" 
              value={localTask} 
              onChange={(e) => setLocalTask(e.target.value)} 
            />
            <TextField 
              label="Edit Details" 
              size="small" 
              multiline 
              rows={2} 
              value={localDetail} 
              onChange={(e) => setLocalDetail(e.target.value)} 
            />
            <TextField 
              label="Edit Date" 
              type="date" 
              size="small" 
              slotProps={{ inputLabel: { shrink: true } }}
              value={localDate === "No specified date" ? "" : localDate} 
              onChange={handleDateChange} 
            />
          </Box>
        ) : (
          <>
            <Typography variant="h6" component="div" fontWeight="bold">
              {localTask}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
              {localDetail}
            </Typography>
            <Typography variant="caption" color="text.disabled" display="block">
              Due date: {displayDate}
            </Typography>
          </>
        )}
      </CardContent>
      
      <CardActions sx={{ justifyContent: 'flex-end', p: 2, pt: 0 }}>
        <button 
          onClick={handleEditBtn}
          disabled={!isEditing && tasks.some(t => t.isEditing)}
          style={{
            all: 'unset', /* Overriding plain HTML buttons with minor inline styling or using MUI <Button> */
          }}
        >
          <Button 
            size="small" 
            variant="outlined" 
            startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
            onClick={handleEditBtn}
            disabled={!isEditing && tasks.some(t => t.isEditing)}
          >
            {isEditing ? "Save" : "Edit"}
          </Button>
        </button>
        <Button 
          size="small" 
          variant="outlined" 
          color="error" 
          startIcon={<DeleteIcon />}
          onClick={() => setTasks(prev => prev.filter(t => t.taskId !== id))}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default TaskCard;
