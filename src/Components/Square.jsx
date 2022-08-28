import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SquareNum } from "./Numbers/SquareNum";
import { CubeNum } from "./Numbers/CubeNum";
import { PowNum } from "./Numbers/PowNum";

export const Square = () => {
  return (
    <Card sx={{ bgcolor: "navy" }}>
      <CardContent>
        <Typography className="numh4" variant="h4">Square Number</Typography>
        <SquareNum />
        <CubeNum />
        <PowNum />
      </CardContent>
    </Card>
  );
};
