import {React, useEffect, useState, useContext, createRef} from 'react';
import NpmCard from "./NpmCard";
import Loading from "../../Loading";
import PageSwitcher from "../../PageSwitcher";
import {PageContext} from "../../../data/PageContext";
import {JetpackContext} from "../../../data/Libraries/JetpackContext";
import {NpmContext} from "../../../data/Libraries/NpmContext";
import {LoadingContext} from "../../../data/LoadingContext";
import NoResult from "../../NoResult";

function NpmList(props) {

    const [npms, setSetNpms] = useContext(NpmContext)
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



    if (npms.length === 0 ){
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
                            <NpmCard item={npms}  />
            </div>
        );
    }

}

export default NpmList;