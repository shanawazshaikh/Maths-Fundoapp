import React from "react";
import { Numbercomp } from "./Numbercomp";
import { Square } from "./Square";
import { Tables } from "./Tables";

export const NumSquare=()=>{
    return(
        <React.Fragment>
            <Numbercomp/>
            <Square/>
            <Tables/>
        </React.Fragment>
    )
}