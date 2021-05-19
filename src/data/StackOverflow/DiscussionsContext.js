import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/StackOverflowAxios";
import {PageContext} from "../PageContext";
import {LoadingContext} from "../LoadingContext";

export const DiscussionsContext = React.createContext()

export const DiscussionsProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [page,setPage] = useContext(PageContext)
    const [discussions,setDiscussions] = useState([])
    const [status,setStatus] = useContext(LoadingContext)

    useEffect(() => {


        async function getDiscussions(){
            setStatus(true)
            try{
                await axios.get(url).then((res) => {
                    setDiscussions(res.data.items)
                    setStatus(false)
                })

            }catch (err){
                console.error(err)
            }

        }
        getDiscussions()

    },[url])

    return(
        <DiscussionsContext.Provider value={[discussions,setDiscussions]}>
            {props.children}
        </DiscussionsContext.Provider>
    )
}