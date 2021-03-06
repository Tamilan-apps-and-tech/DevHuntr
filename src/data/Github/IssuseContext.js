import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/GithubAxios";
import {PageContext} from "../PageContext";
import {LoadingContext} from "../LoadingContext";

export const IssuesContext = React.createContext()

export const IssuesProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [page,setPage] = useContext(PageContext)
    const [issues,setIssues] = useState([])
    const [status,setStatus] = useContext(LoadingContext)

    useEffect(() => {


        async function getIssues(){

            setStatus(true)
            try{
                await axios.get(url).then((res) => {
                    setIssues(res.data.items)
                    setStatus(false)
                })

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