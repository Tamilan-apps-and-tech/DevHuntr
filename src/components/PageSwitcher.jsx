import React, {useContext} from 'react';
import prev from '../assets/prev.svg'
import next from '../assets/next.svg'
import {PageContext} from "../data/PageContext";
import { useHistory } from "react-router-dom";
import {QueryContext} from "../data/QueryContext";
import {SiteContext} from "../data/SiteContext";

function PageSwitcher(props) {

    const [page,setPage] = useContext(PageContext)
    const [query,setQuery] = useContext(QueryContext)
    const [site,setSite] = useContext(SiteContext)

    const history = useHistory()

    function nextPage(){
        props.scrollRef.current.scrollTop = 0
        window.scrollTo(0,0)
        history.push({
            pathname:'/search',
            search:`?q=${query}&page=${+page + +1}&site=${site}`
    })
    }

    function prevPage(){

        if (page > 1) {
            window.scrollTo(0, 0)
            props.scrollRef.current.scrollTop = 0

            setPage(+page - 1)

            history.push({
                pathname: '/search',
                search: `?q=${query}&page=${+page - +1}&site=${site}`
            })
        }


    }
    return (
        <div className='flex-row flex h-min w-full m-4 justify-around' >
            <div className='flex-row flex h-min w-min font-montserrat text-white-secondaryText text-3xl' onClick={prevPage}>
                <img src={prev} className='object-fill  h-full'/>
                Previous
            </div>

            <div className='flex-row flex h-min w-min  font-montserrat text-white-secondaryText text-3xl' onClick={nextPage} >
                Next
                <img src={next} className='object-fill  h-full'/>
            </div>

        </div>
    );
}

export default PageSwitcher;