import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@mui/material'
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    ArrowDropDown as ArrowDropDownIcon,
    Apps as AppsIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder='Search mail' type="text" />
                <ArrowDropDownIcon className='header__inputCaret' />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <Avatar />
            </div>
        </div>
    )
}

export default Header