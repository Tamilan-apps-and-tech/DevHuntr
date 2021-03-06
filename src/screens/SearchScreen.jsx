import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import {QueryContext} from "../data/QueryContext";
import {PageContext} from "../data/PageContext";
import {SiteContext} from "../data/SiteContext";
import ResultsList from "../components/ResultsList";
import axios from "../utils/BingSpellCheckAxios";
import {ResContext} from "../data/ResContext";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";


function SearchScreen(props) {



    function useQuery(){
        return new URLSearchParams(useLocation().search)
    }

    let pageparam = useQuery().get('page')
    const [page,setPage] = useContext(PageContext)
    setPage(pageparam)



    let siteparam = useQuery().get('site')
    const [site,setSite] = useContext(SiteContext)
    setSite(siteparam)



    let resparam = useQuery().get('res')
    const [res, setRes] = useContext(ResContext)
    setRes(resparam)


    let qparam = useQuery().get('q')
    const [query,setQuery] = useContext(QueryContext)
    setQuery(qparam)


    return (

        <div className='overflow-hidden w-full h-full flex flex-col '>
          <ResultsList/>
        </div>

    );

}

export default SearchScreen;