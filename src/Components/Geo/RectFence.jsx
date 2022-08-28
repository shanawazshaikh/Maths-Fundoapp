import React, { useState } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export const RectFence = () => {
  const [len, setLen] = useState(0);
  const [bre, setBre] = useState(0);
  const [layer, setLayer] = useState(1);
  const [pfc, setPfc] = useState(1);
  const [cal, setCal] = useState(0);
  const handleclear = () => {
    setLen(0);
    setBre(0);
    setLayer(1);
    setPfc(1);
    setCal(0);
  };
  const handleCalculate = () => {
    const par = Number(len) + Number(bre) + Number(len) + Number(bre);
    const totalWire = par * layer;
    const totalCost = totalWire * pfc;
    setCal(totalCost);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h1>Length</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>Bredth</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>Layers</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>Per Foot Cost</h1>
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={len}
            onFocus={() => setLen("")}
            onChange={(e) => setLen(e.target.value)}
            label="Enter Length"
            variant="outlined"
            type="number"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={bre}
            onFocus={() => setBre("")}
            onChange={(e) => setBre(e.target.value)}
            label="Enter Width"
            variant="outlined"
            type="number"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={layer}
            onFocus={() => setLayer("")}
            onChange={(e) => setLayer(e.target.value)}
            label="Number of Layer"
            variant="outlined"
            type="number"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={pfc}
            onFocus={() => setPfc("")}
            onChange={(e) => setPfc(e.target.value)}
            label="Per Foot Cost"
            variant="outlined"
            type="number"
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            disabled={len < 5 || bre < 5 || layer < 1 || layer > 12 || pfc < 1}
            variant="contained"
            onClick={handleCalculate}
          >
            Calculate;
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="error" onClick={handleclear}>
            Clear
          </Button>
        </Grid>
        <Grid item xs={3}>
          <h1>Rs. {cal}/-</h1>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
