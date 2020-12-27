import React from 'react';
import '../Components/EmailList.css';
import { IconButton } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import  ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import  RedoIcon from '@material-ui/icons/Redo';
import  MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronleftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';




function EmailList() {
    return (
        <div className='emailList'>
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronleftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon}
                 title='primary' 
                 color='red' 
                 selected 
                />
                 <Section Icon={PeopleIcon}
                 title='Social' 
                 color='#1A73E8' 
                 selected 
                />
                 <Section Icon={LocalOfferIcon}
                 title='Promotions' 
                 color='green' 
                 selected 
                />
            </div>
        </div>
    )
}

export default EmailList
