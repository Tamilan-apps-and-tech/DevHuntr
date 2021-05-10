import {React, useEffect, useState, useContext, createRef} from 'react';
import IssueCard from "./IssueCard";
import Loading from "../../Loading";
import PageSwitcher from "../../PageSwitcher";
import {PageContext} from "../../../data/PageContext";
import {IssuesContext} from "../../../data/Github/IssuseContext";

function IssuesList(props) {

    const [issues, setISsues] = useContext(IssuesContext)
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



    if (issues.length === 0 ){
        return (
            <Loading/>
        )
    }else {
        return (

            <div ref={scrollRef} className='w-full h-screen overflow-y-scroll overflow-hidden z-0 '>
                <div >
                {
                    issues.map((item,index) => (

                        <div  key={index} className='flex flex-col overflow-hidden' >
                            <IssueCard item={item}  />
                        </div>

                    ))
                }
                </div>

                <PageSwitcher scrollRef={scrollRef}/>

            </div>
        );
    }

}

export default IssuesList;