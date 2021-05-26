import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/DocsAxios";
import {LoadingContext} from "../LoadingContext";


export const DjangoDocsContext = createContext()

export const DjangoDocsProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [docs,setDocs] = useState([])
    const [status,setStatus] = useContext(LoadingContext)


    useEffect(() => {


        async function getRepos(){
            setStatus(true)
            try{
                await axios.get(url).then((res) => {
                    setDocs(res.data)
                    setStatus(false)
                })

            }catch (err){
                console.error(err)
            }

        }
        getRepos()

    },[url])

    return(
        <DjangoDocsContext.Provider value={[docs,setDocs]}>
            {props.children}
        </DjangoDocsContext.Provider>
    )
}