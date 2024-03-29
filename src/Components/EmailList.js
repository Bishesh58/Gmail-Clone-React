import React, { useEffect, useState } from 'react';
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
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from '../firebase';
import { coutTotalMail } from '../features/mailSlice';
import { useDispatch } from 'react-redux';



function EmailList() {

    const [emails, setEmails] = useState([]);
    
    const dispatch = useDispatch();

    useEffect(() => {
       db.collection('emails')
        .orderBy('timestamp', 'desc')
        .onSnapshot((onSnapshot) => 
            setEmails(
                onSnapshot.docs.map( (doc) =>({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, [])
    useEffect(()=> {
        if(emails.length > 0){
            dispatch(coutTotalMail(emails.length))
        }
    }, [emails])
    
   

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
                 title='Primary' 
                 color='red' 
                 selected 
                />
                 <Section Icon={PeopleIcon}
                 title='Social' 
                 color='#1A73E8' 
                 
                />
                 <Section Icon={LocalOfferIcon}
                 title='Promotions' 
                 color='green' 
                />
            </div>
            <div className="emailList__list">
               
                {emails.map(({id, data: {to, subject, message, timestamp} }) =>(
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                   
                )
                )}
                
            </div>
        </div>
    )
}

export default EmailList
