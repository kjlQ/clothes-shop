import React from "react";
import Checkbox from "./Checkbox";
import {useSelector} from "react-redux";
import {IReducers} from "../types";

const Brands = () => {

    return(
        <div className="brands">
            <h2>
                Brands
            </h2>
            <Checkbox type="brand" title="American Eagle"/>
            <Checkbox type="brand" title="Hollister"/>
            <Checkbox type="brand" title="Pull & Bear"/>
            <Checkbox type="brand" title="Zara"/>
        </div>
    )
}
export default Brands