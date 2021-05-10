import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/GithubAxios";
import {PageContext} from "../PageContext";

export const IssuesContext = React.createContext()

export const IssuesProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [page,setPage] = useContext(PageContext)
    const [issues,setIssues] = useState([])

    useEffect(() => {


        async function getIssues(){

            try{
                const res = await axios.get(url)
                setIssues(res.data.items)
            }catch (err){
                console.error(err)
            }

        }
        getIssues()

    },[url])

    return(
        <IssuesContext.Provider value={[issues,setIssues]}>
            {props.children}
        </IssuesContext.Provider>
    )
}