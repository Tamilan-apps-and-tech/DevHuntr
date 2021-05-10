import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/GithubAxios";
import {PageContext} from "../PageContext";

export const RepoContext = createContext()

export const RepoProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [repo,setRepo] = useState([])

    useEffect(() => {


        async function getRepos(){

            try{
                const res = await axios.get(url)
                setRepo(res.data.items)
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