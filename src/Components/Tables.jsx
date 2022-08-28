import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Table } from "./Tables/Table2";
import { DynTable } from "./Numbers/DynTable";
import { StudentCards } from "./Geo/StudentCards";

export const Tables = () => {
  return (
    <Card sx={{ bgcolor: "aqua" }}>
      <CardContent>
        <Typography className="numh4" variant="h4">
          Tables
        </Typography>
        <StudentCards/>
        <DynTable />
        {/* <Table /> */}
      </CardContent>
    </Card>
  );
};
