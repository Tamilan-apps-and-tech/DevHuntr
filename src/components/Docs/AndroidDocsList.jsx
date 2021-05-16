import {React, useEffect, useState, useContext, createRef} from 'react';
import AndroidDocsCard from "./AndroidDocsCard";
import Loading from "../Loading";
import PageSwitcher from "../PageSwitcher";
import {PageContext} from "../../data/PageContext";
import {AndroidDocsContext} from "../../data/Docs/AndroidDocsContext";

function AndroidDocsList(props) {

    const [docs, setDocs] = useContext(AndroidDocsContext)
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



    if (docs.length === 0 ){
        return (
            <Loading/>
        )
    }else {
        return (

            <div ref={scrollRef} className='w-full h-screen overflow-y-scroll overflow-hidden z-0 '>
                <div >
                {
                    docs.map((item,index) => (

                        <div  key={index} className='flex flex-col overflow-hidden' >
                            <AndroidDocsCard item={item}  />
                        </div>

                    ))
                }
                </div>

                <PageSwitcher scrollRef={scrollRef}/>

            </div>
        );
    }

}

export default AndroidDocsList;