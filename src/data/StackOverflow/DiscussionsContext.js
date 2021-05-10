import React, {createContext, useState, useContext, useEffect} from "react";
import {UrlContext} from "../UrlContext";
import axios from "../../utils/StackOverflowAxios";
import {PageContext} from "../PageContext";

export const DiscussionsContext = React.createContext()

export const DiscussionsProvider = (props) => {

    const [url,setUrl] = useContext(UrlContext)
    const [page,setPage] = useContext(PageContext)
    const [discussions,setDiscussions] = useState([])

    useEffect(() => {


        async function getDiscussions(){

            try{
                const res = await axios.get(url)
                setDiscussions(res.data.items)
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