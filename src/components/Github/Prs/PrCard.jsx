import React from 'react';
import PrStateChip from "./PrStateChip";

function PrCard(props) {

    if (props.item.comments === 0){
        return (
            <div
                className='bg-black-secondary m-3 w-11/12 justify-between self-center  flex-col flex rounded-2xl flex-col'>
                <a href={props.item.html_url}>
                    <h1 className='font-montserrat text-white-secondaryText text-xl ml-6 mt-4'>{props.item.title}</h1>
                </a>
                <div className='flex-col flex m-3'>
                    <div className='mb-3'>
                        <PrStateChip text={props.item.state}/>
                    </div>
                    <PrStateChip text="no comments"/>
                </div>
            </div>
        );
    }else {
        return (
            <div
                className='bg-black-secondary m-3 w-11/12 justify-between self-center  flex-col flex rounded-2xl flex-col'>
                <a href={props.item.html_url}>
                    <h1 className='font-montserrat text-white-secondaryText text-xl ml-6 mt-4'>{props.item.title}</h1>
                </a>
                <div className='flex-col flex m-3'>
                    <div className='mb-3'>
                        <PrStateChip text={props.item.state}/>
                    </div>
                </div>
            </div>
        );
    }

}


export default PrCard;