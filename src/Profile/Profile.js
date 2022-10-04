import React, {useState} from "react";

import {observer} from "mobx-react-lite";

import {
    Avatar,
    Box,
    Container, Dialog, DialogTitle,
    List, ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Switch,
    Toolbar,
    Typography
} from "@mui/material";
import {BackHeader} from "../Components/Header";
import storeView from "../Store/storeView";

import ArticleIcon from '@mui/icons-material/Article';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import ContrastIcon from '@mui/icons-material/Contrast';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HelpIcon from '@mui/icons-material/Help';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const DialogSubgroup = (props) => {
    return (
        <Dialog onClose={props.handleClose} open={props.open}>
            <DialogTitle>Выберите подгруппу</DialogTitle>
            dfdffd
        </Dialog>
    );
}

const DialogMessageDev = (props) => {
    return (
        <Dialog onClose={() => props.handleClose()} open={props.open}>
            <DialogTitle>Написать разработчику</DialogTitle>
            dfdffd
        </Dialog>
    );
}

const Profile = observer((props) => {
    const backView = () => {
        storeView.changeView("app", "timetable")
    };

    return (
        <>
            <BackHeader title="Профиль" back={backView}/>
            <Toolbar/>
            <ProfileList/>
        </>
    );
});

export const ProfileList = (props) => {
    const [dialogs, setDialogs] = useState({
        subgroupOpen: false,
        messageDevOpen: false
    });

    return (
        <Container sx={{mt: 2}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{width: 96, height: 96}}>ДЛ</Avatar>
                <Typography>Логинов Дмитрий</Typography>
                <Typography>ПрИ-202</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <List sx={{width: '100%', boxShadow: 2, mt: 2}}>
                    <ListItemButton divider onClick={() => storeView.changeView("app", "info")}>
                        <ListItemIcon><ArticleIcon /></ListItemIcon>
                        <ListItemText primary="Информация о профиле" />
                    </ListItemButton>
                    <ListItemButton divider onClick={() => setDialogs({...dialogs, subgroupOpen: true})}>
                        <ListItemIcon><LibraryAddCheckIcon /></ListItemIcon>
                        <ListItemText primary="Выбрать подгруппу" secondary="II подгруппа"/>
                    </ListItemButton>
                    <ListItemButton divider onClick={() => storeView.changeView("app", "devices")}>
                        <ListItemIcon><SmartphoneIcon /></ListItemIcon>
                        <ListItemText primary="Устройства" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon><DarkModeIcon /></ListItemIcon>
                        <ListItemText primary="Темная тема" />
                        <Switch edge="end"/>
                    </ListItemButton>
                </List>
                <List sx={{width: '100%', boxShadow: 2, mt: 3}}>
                    <ListItemButton divider onClick={() => storeView.changeView("app", "help")}>
                        <ListItemIcon><HelpIcon /></ListItemIcon>
                        <ListItemText primary="Помощь" />
                    </ListItemButton>
                    <ListItemButton onClick={() => setDialogs({...dialogs, messageDevOpen: true})}>
                        <ListItemIcon><ForwardToInboxIcon /></ListItemIcon>
                        <ListItemText primary="Написать разработчику" />
                    </ListItemButton>
                </List>
                <List sx={{width: '100%', boxShadow: 2, my: 1}}>
                    <ListItemButton>
                        <ListItemText sx={{textAlign: 'center', m: 0, color: 'red'}} primary="Выйти" />
                    </ListItemButton>
                </List>
            </Box>
            <DialogSubgroup
                open={dialogs.subgroupOpen}
                onClose={() => setDialogs({...dialogs, subgroupOpen: false})}
            />
            <DialogMessageDev
                open={dialogs.messageDevOpen}
                onClose={() => setDialogs({...dialogs, messageDevOpen: false})}
            />
        </Container>
    );
};

export default Profile;