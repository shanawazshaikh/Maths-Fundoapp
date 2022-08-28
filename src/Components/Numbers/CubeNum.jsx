import React, { useState } from "react";
import {Card, CardContent, Grid, TextField } from "@mui/material";

export const CubeNum = () => {
  const [num, setNum] = useState(0);
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <TextField
                label="Enter Number"
                variant="outlined"
                onChange={(e) => setNum(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <h2>
                Cube of {num} is {num ** 3}
              </h2>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
