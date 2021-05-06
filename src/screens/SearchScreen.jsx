import React, {useContext} from 'react';
import {useLocation} from 'react-router-dom'
import SearchCard from "../components/SearchCard";
import DiscussionList from "../components/DiscussionList";
import {QueryContext} from "../data/QueryContext";
import PageSwitcher from "../components/PageSwitcher";
import {PageContext} from "../data/PageContext";


function SearchScreen(props) {


    function useQuery(){
        return new URLSearchParams(useLocation().search)
    }

    let q = useQuery().get('q')
    const [query,setQuery] = useContext(QueryContext)
    if (q !== query) {
        setQuery(q)
    }

    let pageparam = useQuery().get('page')
    const [page,setPage] = useContext(PageContext)

    if (pageparam != 1) {
        setPage(pageparam)
    }
    pageparam = 0


    return (

        <div className='w-full h-full flex flex-col '>
            <SearchCard/>

            <DiscussionList/>
        </div>

    );
}

export default SearchScreen;