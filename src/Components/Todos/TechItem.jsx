import React from "react";
import { Card, CardContent } from "@mui/material";

export const TechItem = ({ item }) => {
  return (
    <Card sx={{bgcolor:"brown", color:"#ffffff"}}>
      <CardContent>{item}</CardContent>
    </Card>
  );
};
