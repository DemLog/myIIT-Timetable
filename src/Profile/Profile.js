import React, {useState} from "react";

import {observer} from "mobx-react-lite";

import {
    Avatar,
    Box,
    Container,
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


const Profile = observer((props) => {
    const backView = () => {
        console.log(1)
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
    return (
        <Container sx={{mt: 2}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{width: 96, height: 96}}>ДЛ</Avatar>
                <Typography>Логинов Дмитрий</Typography>
                <Typography>ПрИ-202</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <List sx={{width: '100%', boxShadow: 2, mt: 2}}>
                    <ListItemButton divider>
                        <ListItemIcon><ArticleIcon /></ListItemIcon>
                        <ListItemText primary="Информация о профиле" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemIcon><LibraryAddCheckIcon /></ListItemIcon>
                        <ListItemText primary="Выбрать подгруппу" secondary="II подгруппа"/>
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemIcon><ContrastIcon /></ListItemIcon>
                        <ListItemText primary="Оформление" />
                    </ListItemButton>
                    <ListItemButton divider>
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
                    <ListItemButton divider>
                        <ListItemIcon><HelpIcon /></ListItemIcon>
                        <ListItemText primary="Помощь" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon><ForwardToInboxIcon /></ListItemIcon>
                        <ListItemText primary="Написать разработчику" />
                    </ListItemButton>
                </List>
                <List sx={{width: '100%', boxShadow: 2, mt: 1}}>
                    <ListItemButton>
                        <ListItemText sx={{textAlign: 'center', m: 0, color: 'red'}} primary="Выйти" />
                    </ListItemButton>
                </List>
            </Box>
        </Container>
    );
};

export default Profile;