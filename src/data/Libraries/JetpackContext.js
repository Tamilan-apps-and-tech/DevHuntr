import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/JetpackAxios";
import {PageContext} from "../PageContext";
import {LoadingContext} from "../LoadingContext";

export const JetpackContext = React.createContext()

export const JetpackProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [page,setPage] = useContext(PageContext)
    const [jplibs,setJplibs] = useState([])
    const [status,setStatus] = useContext(LoadingContext)

    useEffect(() => {


        async function getLibs(){
            setStatus(true)
            try{
                await axios.get(url).then((res) => {
                    setJplibs(res.data)
                    setStatus(false)
                })

            }catch (err){
                console.error(err)
            }

        }
        getLibs()

    },[url])

    return(
        <JetpackContext.Provider value={[jplibs,setJplibs]}>
            {props.children}
        </JetpackContext.Provider>
    )
}