import React, {createContext, useState, useContext, useEffect} from "react";
import {QueryContext} from "./QueryContext";
import axios from "../utils/BingSpellCheckAxios";
import {useHistory} from "react-router-dom";
import {PageContext} from "./PageContext";
import {SiteContext} from "./SiteContext";

export const TypoContext = React.createContext()

export const TypoProvider = (props) => {

    const history = useHistory()

    const [query,setQuery] = useContext(QueryContext)
    const [page,setPage] = useContext(PageContext)
    const [site,setSite] = useContext(SiteContext)
    const [typo,setTypo] = useState('')



    useEffect(() => {
        if (query !== ""){
            axios.get(`https://api.bing.microsoft.com/v7.0/spellcheck?text=${query}&mode=spell`,{
                headers:{
                    "Ocp-Apim-Subscription-Key":"b934d9f24f3d41d8850a5ac9eff9884f"
                }
            }) .then((response) => {
                    const tokens = response.data.flaggedTokens

                    if (tokens.length !== 0){
                        let rplcdtext = query



                        tokens.forEach((item, index) => {

                            rplcdtext = rplcdtext.replace(item.token,item.suggestions[0].suggestion)
                            console.log(item.token,item.suggestions[0].suggestion)

                            console.log(tokens.length)
                            if (index === tokens.length-1) {

                                console.log(rplcdtext)
                                console.log(tokens.length -1)
                                setTypo(rplcdtext)

                            }
                        })



                    }else {
                        setQuery(query)
                        setTypo("")
                    }
                }
            )
        }else {

        }
    },[query])

    return(
        <TypoContext.Provider value={[typo,setTypo]}>
            {props.children}
        </TypoContext.Provider>
    )
}