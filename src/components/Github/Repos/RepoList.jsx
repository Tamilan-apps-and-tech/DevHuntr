import {React, useEffect, useState, useContext, createRef} from 'react';
import RepoCard from "./RepoCard";
import Loading from "../../Loading";
import PageSwitcher from "../../PageSwitcher";
import {PageContext} from "../../../data/PageContext";
import {RepoContext} from "../../../data/Github/RepoContext";

function RepoList(props) {

    const [repo, setRepo] = useContext(RepoContext)
    const scrollRef = createRef()
    const [page,setPage] =useContext(PageContext)

    if (repo.length === 0 ){
        return (
            <Loading/>
        )
    }else {
        return (

            <div ref={scrollRef} className='w-full h-screen overflow-y-scroll overflow-hidden z-0 '>
                <div >
                {
                    repo.map((item,index) => (

                        <div  key={index} className='flex flex-col overflow-hidden' >
                            <RepoCard item={item}/>
                        </div>

                    ))
                }
                </div>

                <PageSwitcher scrollRef={scrollRef}/>

            </div>
        );
    }

}

export default RepoList;