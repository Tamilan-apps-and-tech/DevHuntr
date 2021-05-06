import React from 'react';
import DiscussionChip from "./DiscussionChip";

function DiscussionCard(props) {


    if(props.item.hasOwnProperty("accepted_answer_id")) {
        return (
            <div className='bg-black-secondary m-3 w-11/12 justify-between self-center  flex-col flex rounded-2xl flex-col'>
                <a href={'https://stackoverflow.com/questions/'+props.item.question_id}>
                    <h1 className='font-montserrat text-white-secondaryText text-xl ml-6 mt-4'>{props.item.title}</h1>
                </a>
                <div className='flex-col flex m-3'>
                    <div className='flex flex-row mb-4' >{
                        props.item.tags.map((item,index) => (
                                <DiscussionChip text={item}/>
                        ))
                    }</div>
                    <div className='mb-3'>
                        <a href={'https://stackoverflow.com/questions/'+props.item.question_id+'/#'+props.item.accepted_answer_id}>
                    <DiscussionChip text="recommended"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }else {
        return (
            <div className='bg-black-secondary m-3 w-11/12 justify-between self-center  flex-col flex rounded-2xl flex-col'>
                <a href={'https://stackoverflow.com/questions/'+props.item.question_id}>
                <h1 className='font-montserrat text-white-secondaryText text-xl ml-6 mt-4'>{props.item.title}</h1>
                </a>
                <div className='flex-col flex m-3'>
                    <div className='flex flex-row mb-4' >{
                        props.item.tags.map((item,index) => (
                            <DiscussionChip text={item}/>
                        ))
                    }</div>
                </div>
            </div>
        );
    }





}


export default DiscussionCard;