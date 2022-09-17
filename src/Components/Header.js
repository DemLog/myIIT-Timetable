import React from "react";

import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton, BottomNavigationAction, BottomNavigation, createTheme, ThemeProvider,
} from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import logoHeader from "./img/logo_header.jpg";
import "./style/header.css";

import {HideOnScroll} from "./HideOnScroll";
import TodayIcon from "@mui/icons-material/Today";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import storeTabs from "../Store/storeTabs";
import {observer} from "mobx-react-lite";
import storeView from "../Store/storeView";

export const Header = observer((props) => {
    const themeTabs = createTheme({
        components: {
            MuiBottomNavigation: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'inherit',
                    }
                }
            },
            MuiBottomNavigationAction: {
                styleOverrides: {
                    root: {
                        color: 'inherit',
                        "&.Mui-selected": {
                            "color": "#a0ffff",
                            "background-color": "#a0ffff21"
                        }
                    }
                }
            },
        }
    });
    const handleChange = (e, value) => {
        if (value === "profile") return props.drawer();
        storeTabs.changeTab(value);
        storeView.changeView("timetable", value);
    };

    return (
        <HideOnScroll direction="down" {...props}>
            <AppBar sx={{boxShadow: 'none'}}>
                <Toolbar sx={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                    <Box sx={{display: 'flex', alignItems: "center"}}>
                        <img src={logoHeader} className="logo-header"/>
                        <Typography variant="h6" noWrap component="a" href="/" sx={{
                            // display: {xs: 'none', md: 'flex'},
                            textDecoration: 'none',
                            color: 'inherit',
                            letterSpacing: "-1px",
                            fontWeight: "bold"
                        }}>
                            / Расписание</Typography>
                    </Box>
                    {/*<Box>*/}
                    {/*    <Typography variant="h6">*/}
                    {/*        {props.title}*/}
                    {/*    </Typography>*/}
                    {/*</Box>*/}
                    <Box sx={{display: {xs: 'none', md: 'block'}}}>
                        <ThemeProvider theme={themeTabs}>
                            <BottomNavigation showLabels value={storeTabs.activeTab} onChange={handleChange}>
                                <BottomNavigationAction
                                    value="today"
                                    label="Сегодня"
                                    icon={<TodayIcon/>}
                                />
                                <BottomNavigationAction
                                    value="tomorrow"
                                    label="Завтра"
                                    icon={<NextWeekIcon/>}
                                />
                                <BottomNavigationAction
                                    value="week"
                                    label="Неделя"
                                    icon={<ViewDayIcon/>}
                                />
                                <BottomNavigationAction
                                    value="profile"
                                    label="Профиль"
                                    icon={<AccountCircleIcon/>}
                                />
                            </BottomNavigation>
                        </ThemeProvider>
                    </Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
});

export const BackHeader = (props) => {

    return (
        <HideOnScroll direction="down" {...props}>
            <AppBar>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="back" sx={{mr: 1}}
                                onClick={props.back}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
};