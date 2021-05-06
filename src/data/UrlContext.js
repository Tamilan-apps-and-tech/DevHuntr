import React, {createContext, useState, useContext, useEffect} from "react";
import {QueryContext} from "./QueryContext";
import {PageContext} from "./PageContext";
import {changeEndpoint} from "../utils/EnpointChanger";

export const UrlContext = React.createContext()

export const UrlProvider = (props) => {

    const [url,setUrl] = useState("")

    const [query,setQuery] = useContext(QueryContext)
    const [page,setPage] = useContext(PageContext)

    useEffect(() => {
            changeEndpoint(query, page)
    },[page,query])

    useEffect(() => {
    if (query.length != 0) {
        setUrl(`search/advanced?page=${page}&order=desc&sort=activity&q=${query}&site=stackoverflow`)
        }
    },[query,page])



    return(
        <UrlContext.Provider value={[url,setUrl]}>
            {props.children}
        </UrlContext.Provider>
    )
}