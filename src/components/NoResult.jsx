import React from 'react';
import logo from '../assets/crying.svg'

function NoResult(props) {
    return (
        <div className='w-full flex flex-col h-full'>
            <img src={logo} className='w-1/12 justify-center self-center animate-spin-slow'/>
            <h1 className='font-montserrat animate-pulse text-red-text text-2xl justify-center self-center '>No Results Found</h1>
        </div>
    );
}

export default NoResult;