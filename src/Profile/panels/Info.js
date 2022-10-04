import React from "react";
import {BackHeader} from "../../Components/Header";
import {
    Avatar,
    Box,
    Button,
    Container,
    List,
    ListItem,
    ListItemButton, ListItemIcon,
    ListItemText,
    Paper,
    Toolbar,
    Typography
} from "@mui/material";
import storeView from "../../Store/storeView";

import PublicIcon from '@mui/icons-material/Public';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const Info = (props) => {
    const backView = () => {
        storeView.changeView("app", "timetable")
    };

    const AvatarHeader = () => (<Box className="panel">
        <Box
            className="panel-body"
            sx={{display: 'flex', justifyContent: 'space-between'}}
        >
            <Box className="profile-thumb">
                <Avatar sx={{width: 100, height: 100}}>ДЛ</Avatar>
            </Box>
            <Box sx={{mr: 3, mt: 1}}>
                <Button size="small" variant="outlined">Изменить</Button>
            </Box>
        </Box>
    </Box>);

    const displayUserInfo = () => {
        return (<React.Fragment>
            <Box>
                <Typography variant="h5">Дмитрий Логинов</Typography>
                <Typography variant="subtitle2" color="text.secondary">ПрИ-202</Typography>
            </Box>
            <Box sx={{mt: 2}}>
                <Typography variant="subtitle2">Личные данные:</Typography>
                <Paper elevation={2}>
                    <List disablePadding dense>
                        <ListItem>
                            <ListItemText primary="Отчество" secondary="Николаевич"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="E-Mail" secondary="dem.loginov@gmail.com"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Страна" secondary="Россия"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Город" secondary="Челябинск"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Статус" secondary="{storeUser.userInfo.status}"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Направление обучения" secondary="{storeUser.userInfo.direction}"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Профиль" secondary="{storeUser.userInfo.profile}"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Форма обучения" secondary="{storeUser.userInfo.form_study}"/>
                        </ListItem>
                    </List>
                </Paper>
            </Box>
            <Box sx={{my: 2}}>
                <Typography variant="subtitle2">Привязанные аккаунты:</Typography>
                <Paper elevation={2}>
                    <List disablePadding dense>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PublicIcon/>
                                </ListItemIcon>
                                <ListItemText primary="ВКонтакте" secondary="{storeUser.userInfo.vk_id}"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GoogleIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Google" secondary="Не привязано"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GitHubIcon/>
                                </ListItemIcon>
                                <ListItemText primary="GitHub" secondary="Не привязано"/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Paper>
            </Box>
        </React.Fragment>);
    };


    return (
        <>
            <BackHeader title="Информация о профиле" back={backView}/>
            <Toolbar/>
            <Container sx={{mt: 2}}>
                <AvatarHeader/>
                {displayUserInfo()}
            </Container>
        </>
    );
}

export default Info;