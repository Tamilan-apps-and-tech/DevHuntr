import React from 'react';
import NpmChip from "../Npm/NpmChip";

function NpmCard(props) {

    return (
        <div
            className='bg-black-secondary m-3 w-11/12 justify-between self-center  flex-col flex rounded-2xl flex-col'>
            <a href={`http://npmjs.org/${props.item.name}`}>
                <h1 className='font-montserrat text-white-secondaryText text-xl ml-6 mb-0 m-4'>{props.item.name}</h1>
            </a>
            <h1 className='font-montserrat text-white-secondaryText text-xl ml-6 m-4 opacity-50'>{props.item.description}</h1>

        </div>
    );

}


export default NpmCard;