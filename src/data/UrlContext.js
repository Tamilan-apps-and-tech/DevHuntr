import React, {createContext, useState, useContext, useEffect} from "react";
import {QueryContext} from "./QueryContext";
import {PageContext} from "./PageContext";
import {changeEndpoint} from "../utils/EnpointChanger";
import {SiteContext} from "./SiteContext";
import data from "./Sites.json";

export const UrlContext = React.createContext()

export const UrlProvider = (props) => {

    const [url,setUrl] = useState()

    const [query,setQuery] = useContext(QueryContext)
    const [page,setPage] = useContext(PageContext)
    const [site,setSite] = useContext(SiteContext)



    useEffect(() => {
        if (data.sites[site].name === "StackOverflow") {
            setUrl(`search/advanced?page=${page}&order=desc&sort=votes&q=${query}&site=stackoverflow`
        )
        }

        if (data.sites[site].name === "Github Issues"){
            setUrl(`/issues?q=${query}+is:issue&per_page=25&page=${page}`)

        }

        if (data.sites[site].name === "Github Prs"){
            setUrl(`/issues?q=${query}+is:pr&per_page=25&page=${page}`)

        }

        if (data.sites[site].name === "Github Repo"){
            setUrl(`/repositories?q=${query}+in:readme&per_page=25&page=${page}`)

        }

        if (data.sites[site].name === "Github Repo"){
            setUrl(`/repositories?q=${query}+in:readme&per_page=25&page=${page}`)

        }

        if (data.sites[site].name === "Jetpack Android"){
            setUrl(`/repositories?q=${query}+in:readme&per_page=25&page=${page}`)

        }

        if (data.sites[site].name === "Android Docs"){
            setUrl(`/android?q=${query}`)

        }

        if (data.sites[site].name === "Npm Package"){
            setUrl(`/repositories?q=${query}+in:readme&per_page=25&page=${page}`)

        }

    },[query,page,site])





    return(
        <UrlContext.Provider value={[url,setUrl]}>
            {props.children}
        </UrlContext.Provider>
    )
}