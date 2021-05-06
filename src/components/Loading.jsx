import React from 'react';

function Loading(props) {
    return (
        <div className='w-full flex flex-col h-full'>
            <h1 className='font-montserrat animate-pulse text-red-text text-2xl justify-center self-center '>Loading please wait...</h1>
        </div>
    );
}

export default Loading;