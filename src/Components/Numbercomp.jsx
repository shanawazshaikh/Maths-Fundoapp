import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { NextNum } from "./Numbers/NextNum";
import { Previous } from "./Numbers/Previous";
import { Counter } from "./Numbers/Counter";


export const Numbercomp = () => {
  return (
    <Card sx={{ bgcolor: "navy" }}>
      <CardContent>
        <Typography className="numh4" variant="h4">
          Numbers
        </Typography>
        <Counter />
        <NextNum />
        <Previous />
      </CardContent>
    </Card>
  );
};
