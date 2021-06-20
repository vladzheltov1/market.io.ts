import React, { useReducer } from "react";
import { HIDE_FILTERS, SHOW_FILTERS } from "../types";
import { FilterContext } from "./shopFilterContext";
import { shopFilterReducer } from "./shopFilterReducer";

export const ShopFilterState = ({ children }) => {

    const [state, dispatch] = useReducer(shopFilterReducer, { show: false });

    const show = () => {
        dispatch({
            type: SHOW_FILTERS
        })
    }

    const hide = () => {
        dispatch({
            type: HIDE_FILTERS
        })
    }

    return (
        <FilterContext.Provider value={{
            show, hide,
            visible: state
        }}>
            {children}
        </FilterContext.Provider>
    )
}