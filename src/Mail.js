import {
    ArrowBack as ArrowBackIcon,
    CheckCircle as CheckCircleIcon,
    Delete as DeleteIcon,
    Email as EmailIcon,
    Error as ErrorIcon,
    LabelImportant as LabelImportantIcon,
    MoveToInbox as MoveToInboxIcon,
    WatchLater as WatchLaterIcon,
    MoreVert as MoreVertIcon,
    UnfoldMore as UnfoldMoreIcon,
    Print as PrintIcon,
    ExitToApp as ExitToAppIcon,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectOpenMail } from './features/mailSlice';
import './Mail.css'

function Mail() {
    const navigate = useNavigate();

    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className='mail'>
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => navigate('/')}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>

            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className='mail__important' />
                    <p>{selectedMail?.title}</p>
                    <p className='mail__time'>{selectedMail?.time}</p>
                </div>

                <div className="mail__message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail