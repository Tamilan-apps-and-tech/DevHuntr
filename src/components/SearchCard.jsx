import React, {createRef, useContext} from 'react';
import {QueryContext} from "../data/QueryContext";

function SearchCard(props) {

    const [query,setQuery] = useContext(QueryContext)
    const inptRef = createRef()

    function updateQuery(){


        const value = inptRef.current.value

        if (value != null){
            setQuery(value)
        }

    }

    return (
        <div className='bg-black-secondary self-center my-5 flex rounded-full flex w-1/2 justify-between z-10 font-montserrat text-lgshadow-2xl'>
            <input ref={inptRef} type='text' placeholder='Search here...'
                   className='mt-2 mb-2 ml-5 p-2 w-9/12 border-none bg-transparent outline-none text-white-secondaryText placeholder-white-secondaryText drop-shadow-2xl'/>
            <button
                onClick={updateQuery}
                className='drop-shadow-2xl bg-red-text justify-self-end pl-5 pr-5 pt-2 pb-2 m-2 rounded-full text-white-secondaryText outline-none border-none focus:outline-none self-end'>Search</button>

        </div>
    );
}


export default SearchCard;