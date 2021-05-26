import React, {createContext, useState, useContext, useEffect} from "react";
import {QueryContext} from "./QueryContext";
import {PageContext} from "./PageContext";
import {changeEndpoint} from "../utils/EnpointChanger";
import resources from "./Res.json";
import {SiteContext} from "./SiteContext";
import data from "./Sites.json";
import {ResContext} from "./ResContext";

export const UrlContext = React.createContext()

export const UrlProvider = (props) => {

    const [url,setUrl] = useState()

    const [query,setQuery] = useContext(QueryContext)
    const [page,setPage] = useContext(PageContext)
    const [site,setSite] = useContext(SiteContext)
    const [res,setRes] = useContext(ResContext)



    useEffect(() => {

        if(query !== '') {
            if (data.sites[site].name === "StackOverflow") {
                setUrl(`search/advanced?page=${page}&order=desc&sort=relevance&q=${query}&site=stackoverflow`
                )
            }

            if (data.sites[site].name === "Github Issues") {
                setUrl(`/issues?q=${query}+is:issue&per_page=25&page=${page}`)

            }

            if (data.sites[site].name === "Github Prs") {
                setUrl(`/issues?q=${query}+is:pr&per_page=25&page=${page}`)

            }

            if (data.sites[site].name === "Github Repo") {
                setUrl(`/repositories?q=${query}+in:readme&per_page=25&page=${page}`)

            }

            if (data.sites[site].name === "Github Repo") {
                setUrl(`/repositories?q=${query}+in:readme&per_page=25&page=${page}`)

            }

            if (data.sites[site].name === "Jetpack Android") {
                setUrl(`/jp?q=${query}`)

            }

            if (data.sites[site].name === "Android Docs") {
                setUrl(`/android?q=${query}`)

            }

            if (data.sites[site].name === "References") {

                if (res !== 16) {
                    if (resources[res].id === 0) {
                        setUrl(`/androidDocs?q=${query}`)
                    }
                    if (resources[res].id === 1) {
                        setUrl(`/flutterDocs?q=${query}`)
                    }
                    if (resources[res].id === 2) {
                        setUrl(`/reactnativeDocs?q=${query}`)
                    }
                    if (resources[res].id === 3) {
                        setUrl(`/webDocs?q=${query}`)
                    }
                    if (resources[res].id === 4) {
                        setUrl(`/dockerDocs?q=${query}`)
                    }
                    if (resources[res].id === 5) {
                        setUrl(`/firebaseDocs?q=${query}`)
                    }
                    if (resources[res].id === 6) {
                        setUrl(`/tfDocs?q=${query}`)
                    }
                    if (resources[res].id === 7) {
                        setUrl(`/googleWebDocs?q=${query}`)
                    }
                    if (resources[res].id === 8) {
                        setUrl(`/googleMapsDocs?q=${query}`)
                    }
                    if (resources[res].id === 9) {
                        setUrl(`/djangoDocs?q=${query}`)
                    }
                    if (resources[res].id === 10) {
                        setUrl(`/rubyDocs?q=${query}`)
                    }
                    if (resources[res].id === 11) {
                        setUrl(`/dartDocs?q=${query}`)
                    }
                    if (resources[res].id === 12) {
                        setUrl(`/jestDocs?q=${query}`)
                    }
                    if (resources[res].id === 13) {
                        setUrl(`/mongoDocs?q=${query}`)
                    }
                    if (resources[res].id === 14) {
                        setUrl(`/kubernetesDocs?q=${query}`)
                    }
                    if (resources[res].id === 15) {
                        setUrl(`/googleCloudDocs?q=${query}`)
                    }
                }
            }
        }

    },[query,page,site])





    return(
        <UrlContext.Provider value={[url,setUrl]}>
            {props.children}
        </UrlContext.Provider>
    )
}