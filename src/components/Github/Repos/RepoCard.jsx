import React,{useRef} from 'react';
import RepoChip from "./RepoChip";
import code from '../../../assets/code.svg'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

function RepoCard(props) {

    const [open, setOpen] = React.useState(false);

    const handleClose = () =>{
        setOpen(false)
    }
    const handleOpen = ()=> {
        setOpen(true)
    }
        return (
            <div
                className='bg-black-secondary m-3 w-11/12 justify-between self-center  flex-col flex rounded-2xl flex-col'>
                <a href={props.item.html_url}>
                    <h1 className='font-montserrat text-white-secondaryText text-2xl ml-6 mr-6 mt-4'>{props.item.full_name}</h1>
                </a>


                <h1 className='font-montserrat text-white-secondaryText ml-6 text-lg m-2 opacity-50'>{props.item.description}</h1>

                    <div  className='bg-black-bg inline-block whitespace-nowrap w-min ml-6 rounded-md opacity-50'>
                </div>
                <div className='flex-col flex ml-3 mt-3 mb-3'>
                    <div className='mb-3'>
                        <RepoChip text={props.item.language}/>
                    </div>
                </div>

            </div>


        );




}


export default RepoCard;