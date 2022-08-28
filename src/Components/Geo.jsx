import React from "react";
import { Card, CardContent } from "@mui/material";
import { RectFence } from "./Geo/RectFence";
import { Student } from "./Geo/Student";
import { StudentOptm } from "./Geo/StudentOptm";

export const Geo = () => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2>Geomatry</h2>
          <StudentOptm/>
          <Student/>
          <RectFence />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
