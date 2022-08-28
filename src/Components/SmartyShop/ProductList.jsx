import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField} from "@mui/material";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [filt, setFilt] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setFilt(result.data)
  };

  useEffect(() => {
    getData();
  });
  return (
    <React.Fragment>
      <h4>Product List</h4>
      <Grid container spacing={3}>
        <Grid item xs={4}>
        <TextField
            label="Search..."
            variant="outlined"
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={6}></Grid>
        {
            filt.map(item=>
                <Grid item xs={3}>
                    <ProductItem item={item}/>
                </Grid>
                )
        }
      </Grid>
    </React.Fragment>
  );
};
