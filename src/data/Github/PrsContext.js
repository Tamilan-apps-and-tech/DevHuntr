import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/GithubAxios";
import {PageContext} from "../PageContext";
import {LoadingContext} from "../LoadingContext";

export const PrContext = React.createContext()

export const PrProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [page,setPage] = useContext(PageContext)
    const [prs,setPrs] = useState([])
    const [status,setStatus] = useContext(LoadingContext)

    useEffect(() => {


        async function getPrs(){
            setStatus(true)
            try{
                await axios.get(url).then((res) => {
                    setPrs(res.data.items)
                    setStatus(false)
                })

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