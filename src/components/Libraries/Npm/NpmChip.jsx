import React from 'react';

function NpmChip(props) {


        return (
            <div
                className='bg-red-text flex flex-row w-min inline-block whitespace-nowrap object-fit rounded-full px-3 py-1 text-white-secondaryText mx-1.5 font-montserrat'>
                {props.text}
            </div>
        );

}

export default NpmChip;