import React from "react";
import {Card, CardContent}  from "@mui/material"

export const TaskItem=({item})=>{
return(
    <React.Fragment>
        <Card sx={{bgcolor:"navy", color: "#ffffff"}}>
            <CardContent>{item}</CardContent>
        </Card>
    </React.Fragment>

)
}