import React from "react";
import { TaskList } from "./Todos/TaskList";
import {TechList} from "./Todos/TechList";
import { DishList } from "./Todos/DishList";
import { WishList } from "./Todos/WishList";

export const Todos=()=>{
    return(
        <React.Fragment>
            <h2>Todos List</h2>
            <WishList/>
            <DishList/>
            <TechList/>
            <TaskList/>
        </React.Fragment>
    )
}