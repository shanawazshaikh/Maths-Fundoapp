import React from "react";
import { Card, CardContent } from "@mui/material";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
export const StudentItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          {item.gender === "male" ? (
            <ManIcon sx={{ fontSize: 70, color: "blue" }} />
          ) : (
            <WomanIcon sx={{ fontSize: 70, color: "deeppink" }} />
          )}

          <h1>{item.fname}</h1>
          <h5>{item.lname}</h5>
          <hr />
          <h3>{item.age} years</h3>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
