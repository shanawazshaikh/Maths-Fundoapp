import React from "react";
import { data } from "../../Services/data";
import { Grid } from "@mui/material";

export const StudentOptm = () => {
  console.log(data);
  return (
    <React.Fragment>
      <h1>Student List</h1>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <b>Sr.No.</b>
        </Grid>
        <Grid item xs={3}>
          <b> Full Name</b>
        </Grid>
        <Grid item xs={3}>
          <b> Age</b>
        </Grid>
        <Grid item xs={3}>
          <b> Gender </b>
        </Grid>
        {data.map((item,index) => (
          <React.Fragment>
            <Grid item xs={3}>
              {index+1}
            </Grid>
            <Grid item xs={3}>
              {item.fname} {item.lname}
            </Grid>
            <Grid item xs={3}>
              {item.age}
            </Grid>
            <Grid item xs={3}>
              {item.gender}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </React.Fragment>
  );
};
