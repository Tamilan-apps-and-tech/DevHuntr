import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/GithubAxios";
import {PageContext} from "../PageContext";

export const PrContext = React.createContext()

export const PrProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [page,setPage] = useContext(PageContext)
    const [prs,setPrs] = useState([])

    useEffect(() => {


        async function getPrs(){

            try{
                const res = await axios.get(url)
                setPrs(res.data.items)
            }catch (err){
                console.error(err)
            }

        }
        getPrs()

    },[url])

    return(
        <PrContext.Provider value={[prs,setPrs]}>
            {props.children}
        </PrContext.Provider>
    )
}