import React, {useState} from "react";
import { data } from "../../Services/data";
import { StudentItem } from "./StudentItem";
import {Grid} from "@mui/material"


export const StudentCards=()=>{
    const [filt, setFilt]=useState(data)

    return(
        <React.Fragment>
            <Grid container spacing={1}>
                {
                    filt.map(item=>
                        <Grid item xs={3} className="img">
                            <StudentItem item={item}/>
                        </Grid>
                        )
                }
            </Grid>
        </React.Fragment>
    )
}