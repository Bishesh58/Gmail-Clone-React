import React from 'react';
import '../Components/EmailList.css';
import { IconButton } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import  ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import  RedoIcon from '@material-ui/icons/Redo';
import  MoreVertIcon from '@material-ui/icons/MoreVert';




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
            </div>
        </div>
    )
}

export default EmailList
