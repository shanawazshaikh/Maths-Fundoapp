import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { DishItem } from "./DishItem";

export const DishList = () => {
  const [data, setData] = useState([]);
  const [filt, setFilt] = useState([]);
  const [txt, setTxt] = useState("");
  const handleAdd = () => {
    setFilt([txt, ...data]);
    setData([txt, ...data]);
    setTxt("");
  };
  const handleSearch = (e) => {
    const filtered = data.filter((item) =>
      item.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setFilt(filtered);
    console.log(filtered);
  };
  const handleDelete = (dish) => {
    const filtered = data.filter((item) => item !== dish);
    setFilt(filtered);
    setData(filtered);
  };
  return (
    <React.Fragment>
      <h3>My Dishes Lists</h3>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            onChange={(e) => setTxt(e.target.value)}
            value={txt}
            label="Dish Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={handleAdd}
            disabled={txt.length < 3}
            variant="contained"
            color="error"
            fullWidth
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={handleSearch}
            label="Search..."
            variant="outlined"
            fullWidth
          ></TextField>
        </Grid>

        {filt.map((item) => (
          <Grid item xs={2}>
            <DishItem item={item} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
