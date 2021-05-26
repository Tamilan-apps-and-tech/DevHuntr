import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/DocsAxios";
import {LoadingContext} from "../LoadingContext";


export const TensorflowDocsContext = createContext()

export const TensorflowDocsProvider = (props) => {

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
        <TensorflowDocsContext.Provider value={[docs,setDocs]}>
            {props.children}
        </TensorflowDocsContext.Provider>
    )
}