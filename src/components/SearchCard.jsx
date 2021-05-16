import React, {createRef, useContext, useState} from 'react';
import {QueryContext} from "../data/QueryContext";
import {SiteContext} from '../data/SiteContext'
import {PageContext} from '../data/PageContext'
import {useHistory} from 'react-router-dom'
import logo from '../logo.svg'


function SearchCard(props) {

    const history = useHistory()
    const [query,setQuery] = useContext(QueryContext)
    const [site,setSite] = useContext(SiteContext)
    const [page,setPage] = useContext(PageContext)



    const [queryinpt,setQueryinpt] = useState('')
    const [siteinpt,setSiteinpt] = useState(site)


    const updateQueryInpt = (e) =>{
        setQueryinpt(e.target.value)
    }

    const updateSiteInpt = (e) =>{
        setSiteinpt(e.target.value)
    }
    function updateQuery(e){
        e.preventDefault()

        if (queryinpt === "") {

            history.push({
                pathname: '/search',
                search: `?q=${query}&page=${page}&site=${siteinpt}`
            })

        }else{

            history.push({
                pathname: '/search',
                search: `?q=${queryinpt}&page=${page}&site=${siteinpt}`
            })

        }
    }


    return (

        <form  className='drop-shadow-xl bg-black-secondary self-center my-5 flex rounded-full flex w-1/2 justify-between z-10 font-montserrat text-lgshadow-2xl'>
            <input  defaultValue={query} onChange={updateQueryInpt}
                   className='mt-2 mb-2 ml-5 p-2 w-9/12 appearance-none border-none bg-transparent outline-none text-white-secondaryText placeholder-white-secondaryText drop-shadow-2xl'/>
            <select value={siteinpt}  className='bg-transparent mr-6 focus:outline-none text-white-secondaryText text-lg'
                    onChange={updateSiteInpt}>
                <option className='text-red-text text-xl' value={0} >StackOverflow</option>
                <option className='text-red-text text-xl' value={1} >Github Issues</option>
                <option className='text-red-text text-xl' value={2} >Github Prs</option>
                <option className='text-red-text text-xl' value={3} >Github Repo</option>
                <option className='text-red-text text-xl' value={4} >Jetpack Android</option>
                <option className='text-red-text text-xl' value={5} >Android Docs</option>
                <option className='text-red-text text-xl' value={6} >Npm Package</option>
            </select>
            <button onClick={updateQuery}/>
        </form>

    );
}


export default SearchCard;