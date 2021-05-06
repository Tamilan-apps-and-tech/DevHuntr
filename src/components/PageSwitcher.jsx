import React, {useContext} from 'react';
import prev from '../assets/prev.svg'
import next from '../assets/next.svg'
import {PageContext} from "../data/PageContext";

function PageSwitcher(props) {

    const [page,setPage] =useContext(PageContext)

    function nextPage(){
        setPage(page+1)
        props.scrollRef.current.scrollTop = 0
        window.scrollTo(0,0)
    }

    function prevPage(){

        if (page != 1){
            setPage(page-1)
            window.scrollTo(0,0)
            props.scrollRef.current.scrollTop = 0

        }
    }
    return (
        <div className='flex-row flex h-min w-full m-4 justify-around' onClick={prevPage}>
            <div className='flex-row flex h-min w-min font-montserrat text-white-secondaryText text-3xl'>
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