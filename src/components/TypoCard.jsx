import React, {useContext} from 'react';
import {TypoContext} from "../data/TypoContext";
import {PageContext} from "../data/PageContext";
import {SiteContext} from "../data/SiteContext";
import {useHistory} from "react-router-dom";

function TypoCard(props) {

    const [page,setPage] = useContext(PageContext)
    const [site,setSite] = useContext(SiteContext)
    const [typo,setTypo] = useContext(TypoContext)


    const history = useHistory()
    function updateQuery(e){
        e.preventDefault()
            history.push({
                pathname: '/search',
                search: `?q=${typo}&page=${page}&site=${site}`
            })

    }
    if (typo === "") {

        return (
            <div></div>
        );
    }else {
        return (
            <div className='ml-5 animate-bounce cursor-pointer text-white-secondaryText text-xl font-montserrat' onClick={updateQuery}>Typo found: {typo}</div>
        );
    }

}

export default TypoCard;