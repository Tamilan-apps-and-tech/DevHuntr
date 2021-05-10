import React from 'react';

function RepoChip(props) {

    if (props.text === "no comments"){
        return (
            <div
                className='bg-orange-chip  flex flex-row w-min inline-block whitespace-nowrap object-fit rounded-full px-3 py-1 text-white-secondaryText mx-1.5 font-montserrat'>
                no comments
            </div>
        );
    }else {
        return (
            <div
                className='bg-red-text flex flex-row w-min inline-block whitespace-nowrap object-fit rounded-full px-3 py-1 text-white-secondaryText mx-1.5 font-montserrat'>
                {props.text}
            </div>
        );
    }


}

export default RepoChip;