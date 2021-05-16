import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/DefaultAxios";


export const AndroidDocsContext = createContext()

export const AndroidDocsProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [docs,setDocs] = useState([])

    useEffect(() => {


        async function getRepos(){

            try{
                const res = await axios.get(url,{
                    headers: {
                        'Access-Control-Allow-Origin':'http://localhost:3000',
                    }
                })
                setDocs(res.data)
            }catch (err){
                console.error(err)
            }

        }
        getRepos()

    },[url])

    return(
        <AndroidDocsContext.Provider value={[docs,setDocs]}>
            {props.children}
        </AndroidDocsContext.Provider>
    )
}