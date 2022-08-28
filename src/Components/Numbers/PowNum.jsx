import React, { useState } from "react";
import {Card, CardContent, Grid, TextField } from "@mui/material";

export const PowNum = () => {
  const [num, setNum] = useState(0);
  const [pow, setPow] = useState(0);
  return (
    <React.Fragment>
        <Card >
            <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Enter Number"
            variant="outlined"
            onChange={(e) => setNum(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Enter Power"
            variant="outlined"
            onChange={(e) => setPow(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <h1>
            {num} to the power {pow} is {num ** pow}
          </h1>
        </Grid>
      </Grid>
      </CardContent>
      </Card>
    </React.Fragment>
  );
};
