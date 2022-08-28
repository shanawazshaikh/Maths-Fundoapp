import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

export const TopNav = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={2} className="img">
          <img src="./Pickupbiz.jpg " alt="PickupBiz" width={100} />
        </Grid>
        <Grid item xs={1}>
          <Link to="/number" className="tabnav">
            <Button variant="contained" color="secondary">Number</Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
            <Link to="/tables" className="tabnav">
             <Button variant="contained" color="secondary">Tables</Button>
            </Link>
        </Grid>
        <Grid item xs={1}>
            <Link to="/square" className="tabnav">
             <Button variant="contained" color="secondary">Square</Button>
            </Link>
        </Grid>
        <Grid item xs={1}>
            <Link to="/geo" className="tabnav">
             <Button variant="contained" color="secondary">Geometry</Button>
            </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/todos" className="tabnav1">
            <Button variant="contained" color="secondary">Todos</Button>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/smartyshop" className="tabnav2">
            <Button variant="contained" color="secondary">Smarty Shop</Button>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
