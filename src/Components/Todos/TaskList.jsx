import React, { useState } from "react";
import { TaskItem } from "./TaskItem";
import { Grid } from "@mui/material";

export const TaskList = () => {
  const [newTask, setNewTask] = useState("");
  const [data, setData] = useState([
    "Breakfast",
    "Getting Ready",
    "Goto office",
    "Check Emails",
  ]);
  const handleAdd = () => {
    setData([...data, newTask]);
  };
  return (
    <React.Fragment>
      <h3>Task List</h3>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <input onChange={(e) => setNewTask(e.target.value)} />
          <button onClick={handleAdd}>Add</button>
        </Grid>
        {data.map((item) => (
          <Grid item xs={4}>
            <TaskItem item={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
