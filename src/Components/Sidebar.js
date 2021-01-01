import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import '../Components/Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';


function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button 
            onClick={() => dispatch(openSendMessage())}
            startIcon={<AddIcon fontSize='large' />}
            className="sidebar__compose"
            >
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={94} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={31} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={4} />
            <SidebarOption Icon={NearMeIcon} title="Send" number={23} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={12} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={66} />

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
