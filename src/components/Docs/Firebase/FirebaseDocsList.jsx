import {React, useEffect, useState, useContext, createRef} from 'react';
import Loading from "../../Loading";
import {PageContext} from "../../../data/PageContext";
import {LoadingContext} from "../../../data/LoadingContext";
import NoResult from "../../NoResult";
import FirebaseDocsCard from "./FirebaseDocsCard";
import {FirebaseDocsContext} from "../../../data/Docs/FirebaseDocsContext";

function FirebaseDocsList(props) {

    const [docs, setDocs] = useContext(FirebaseDocsContext)
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



    if (docs.length === 0 ){

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
                    docs.map((item,index) => (

                        <div  key={index} className='flex flex-col overflow-hidden' >
                            <FirebaseDocsCard item={item}  />
                        </div>

                    ))
                }
                </div>

            </div>
        );
    }

}

export default FirebaseDocsList;