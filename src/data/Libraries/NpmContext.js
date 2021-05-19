import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/NpmAxios";
import {PageContext} from "../PageContext";
import {LoadingContext} from "../LoadingContext";

export const NpmContext = React.createContext()

export const NpmProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [page,setPage] = useContext(PageContext)
    const [npms,setNpms] = useState([])
    const [status,setStatus] = useContext(LoadingContext)

    useEffect(() => {


        async function getLibs(){
            setStatus(true)
            try{
                await axios.get(url).then((res) => {
                    setNpms(res.data)
                    setStatus(false)
                })

            }catch (err){
                console.error(err)
            }

        }
        getLibs()

    },[url])

    return(
        <NpmContext.Provider value={[npms,setNpms]}>
            {props.children}
        </NpmContext.Provider>
    )
}