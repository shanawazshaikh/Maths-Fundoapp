import React from "react";
import { Card, CardContent, Grid, Badge, Rating, Button } from "@mui/material";


export const ProductItem = ({ item }) => {
  return (
    <Badge badgeContent={item.price} color="primary">
      <Card sx={{ border:2}}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} sx={{color:"white"}}>
                <Rating value={item.rating.rate} />  ({item.rating.count})
            </Grid>
            <Grid item xs={12}>
              <img src={item.image} width="100%" height="300" />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{color:"navy"}}>
            <b>{item.title}</b>
          </Grid>
          <Grid item xs={12} >
            <Button variant="contained" color="warning">Add to Cart</Button>
            <span> </span>
            <Button variant="contained" color="warning">Buy Now</Button>
          </Grid>
        </CardContent>
      </Card>
    </Badge>
  );
};
