import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext, UrlProvider} from "./UrlContext";
import axios from "../utils/axios";

export const QueryContext = React.createContext()

export const QueryProvider = (props) => {

    const [query,setQuery] = useState('')




    return(
        <QueryContext.Provider value={[query,setQuery]}>
            {props.children}
        </QueryContext.Provider>
    )
}