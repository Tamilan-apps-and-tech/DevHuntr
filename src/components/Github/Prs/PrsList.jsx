import {React, useEffect, useState, useContext, createRef} from 'react';
import PrCard from "./PrCard";
import Loading from "../../Loading";
import PageSwitcher from "../../PageSwitcher";
import {PageContext} from "../../../data/PageContext";
import {PrContext} from "../../../data/Github/PrsContext";
import {LoadingContext} from "../../../data/LoadingContext";
import NoResult from "../../NoResult";

function PrsList(props) {

    const [prs, setPrs] = useContext(PrContext)
    const scrollRef = createRef()
    const [page,setPage] =useContext(PageContext)
    const [status,setStatus] = useContext(LoadingContext)

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



    if (prs.length === 0 ){
        if (status === true){
            return (
                <Loading/>
            )
        }else {
            return (
                <NoResult/>
            )
        }
    }else {
        return (

            <div ref={scrollRef} className='w-full h-screen overflow-y-scroll overflow-hidden z-0 '>
                <div >
                {
                    prs.map((item,index) => (

                        <div  key={index} className='flex flex-col overflow-hidden' >
                            <PrCard item={item}  />
                        </div>

                    ))
                }
                </div>

                <PageSwitcher scrollRef={scrollRef}/>

            </div>
        );
    }

}

export default PrsList;