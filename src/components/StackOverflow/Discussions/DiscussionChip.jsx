import React from 'react';
import firebase from "firebase";
import 'firebase/analytics'

function DiscussionChip(props) {

    function AcceptedAnswer(){

        firebase.analytics().logEvent('so_accepted_ans');
    }
    if (props.text === "recommended"){
        return (
            <div
                onClick={
                    AcceptedAnswer
                }
                className='bg-blue-chip flex flex-row w-min inline-block whitespace-nowrap object-fit rounded-full px-3 py-1 text-white-secondaryText mx-1.5 font-montserrat'>
                accepted answer
            </div>
        );
    }
    else {
        return (
            <div
                className='bg-red-text flex flex-row w-min inline-block whitespace-nowrap object-fit rounded-full px-3 py-1 text-white-secondaryText mx-1.5 font-montserrat'>
                {props.text}
            </div>
        );
    }
}

export default DiscussionChip;