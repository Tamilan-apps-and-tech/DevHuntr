import {React, useEffect, useState, useContext, createRef} from 'react';
import DiscussionCard from "./DiscussionCard";
import Loading from "./Loading";
import {DiscussionsContext} from "../data/DiscussionsContext";
import PageSwitcher from "./PageSwitcher";
import prev from "../assets/prev.svg";
import next from "../assets/next.svg";
import {PageContext} from "../data/PageContext";

function DiscussionList(props) {

    const [discussions, setDiscussions] = useContext(DiscussionsContext)
    const scrollRef = createRef()
    const [page,setPage] =useContext(PageContext)

    function nextPage(){
        setPage(page+1)
        scrollRef.current.scrollTop = 0
        window.scrollTo(0,0)
    }

    function prevPage(){

        if (page != 1){
            setPage(page-1)
            window.scrollTo(0,0)
            scrollRef.current.scrollTop = 0

        }
    }



    if (discussions.length === 0 ){
        return (
            <Loading/>
        )
    }else {
        return (

            <div ref={scrollRef} className='w-full h-screen overflow-y-scroll overflow-hidden z-0 '>
                <div >
                {
                    discussions.map((item,index) => (

                        <div  key={index} className='flex flex-col overflow-hidden' >
                            <DiscussionCard item={item}  />
                        </div>

                    ))
                }
                </div>

                <PageSwitcher scrollRef={scrollRef}/>

            </div>
        );
    }

}

export default DiscussionList;