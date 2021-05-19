import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/GithubAxios";
import {PageContext} from "../PageContext";
import {LoadingContext} from "../LoadingContext";

export const RepoContext = createContext()

export const RepoProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [repo,setRepo] = useState([])
    const [status,setStatus] = useContext(LoadingContext)

    useEffect(() => {


        async function getRepos(){
            setStatus(true)
            try{
                await axios.get(url).then((res) => {
                    setRepo(res.data.items)
                    setStatus(false)
                })

            }catch (err){
                console.error(err)
            }

        }
        getRepos()

    },[url])

    return(
        <RepoContext.Provider value={[repo,setRepo]}>
            {props.children}
        </RepoContext.Provider>
    )
}