import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { IconButton, Button } from '@mui/material'
import {
  Add as AddIcon,
  Inbox as InboxIcon,
  Star as StarIcon,
  AccessTime as AccessTimeIcon,
  LabelImportant as LabelImportantIcon,
  NearMe as NearMeIcon,
  Note as NoteIcon,
  ExpandMore as ExpandMoreIcon,
  Person as PersonIcon,
  Duo as DuoIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'

function Sidebar() {

  const dispatch = useDispatch();

  return (
    <div className='sidebar'>
        <Button 
            startIcon={<AddIcon fontSize='large' />}
            className='sidebar__compose' 
            onClick={() => dispatch(openSendMessage())}
        >
            Compose
        </Button>

        <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={true} />
        <SidebarOption Icon={StarIcon} title='Starred' number={54} />
        <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={54} />
        <SidebarOption Icon={LabelImportantIcon} title='Important' number={54} />
        <SidebarOption Icon={NearMeIcon} title='Sent' number={54} />
        <SidebarOption Icon={NoteIcon} title='Draft' number={54} />
        <SidebarOption Icon={ExpandMoreIcon} title='More' number={54} />

        <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
            <IconButton>
              <PersonIcon />
            </IconButton>

            <IconButton>
              <DuoIcon />
            </IconButton>

            <IconButton>
              <PhoneIcon />
            </IconButton>
          </div>
        </div>

    </div>
  )
}

export default Sidebar