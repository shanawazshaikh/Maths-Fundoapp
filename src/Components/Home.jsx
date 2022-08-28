import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Numbercomp } from "./Numbercomp";
import { Tables } from "./Tables";
import { Square } from "./Square";
import { NumSquare } from "./NumSquare";
import { TopNav } from "./TopNav";
import { Geo } from "./Geo";
import { Todos } from "./Todos";
import { SmartyShop } from "./SmartyShop";
// import { SquareNum } from "./Numbers/SquareNum";
// import { CubeNum } from "./Numbers/CubeNum";

export const Home=()=>{
    return(
        <React.Fragment>
            <BrowserRouter>
            <TopNav/>
              <Routes>
                 <Route path="/number" element={<Numbercomp/>}/>
                 <Route path="/tables" element={<Tables/>}/>
                 <Route path="/square" element={<Square/>}/>
                 <Route path="/numsquare" element={<NumSquare/>}/>
                 <Route path="/geo" element={<Geo/>}/>
                 <Route path="/Todos" element={<Todos/>}/>
                 <Route path="/smartyshop" element={<SmartyShop/>}/>

              </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}