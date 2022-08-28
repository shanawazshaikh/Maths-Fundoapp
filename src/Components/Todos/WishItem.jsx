import React from "react";
import { Card, CardContent, Button } from "@mui/material";

export const WishItem = ({ item, handleDelete }) => {
  return (
    <Card sx={{ bgcolor: "navy", color: "white" }} className="img">
      <CardContent>
        <p>{item}</p>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDelete(item)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
