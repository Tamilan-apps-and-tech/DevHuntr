import React from 'react';


function MozillaWebDocsCard(props) {

        return (
            <div
                className='bg-black-secondary m-3 w-11/12 justify-between self-center  flex-col flex rounded-2xl flex-col'>
                <a href={props.item.link}>
                    <h1 className='font-montserrat text-white-secondaryText text-xl ml-6 mt-4'>{props.item.title}</h1>
                </a>
                <h1 className='font-montserrat text-orange-chip mt-2 mb-2 text-xl ml-6'>{props.item.linkRef}</h1>
            </div>
        );



}


export default MozillaWebDocsCard;