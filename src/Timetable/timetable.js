import React, {useState} from "react";

import {observer} from "mobx-react-lite";
import storeView from "../Store/storeView";

import {View} from "../Components/View";
import {TabBar} from "../Components/TabBar";
import {Header} from "../Components/Header";
import {
    Box,
    Container, Divider,
    Drawer, IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, styled,
    Toolbar, useTheme
} from "@mui/material";
import Day from "./day/Day";
import Week from "./week/Week";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {ProfileList} from "../Profile/Profile";

const TimeTable = observer((props) => {
    const [titleHeader, setTitleHeader] = useState("");
    const DrawerHeader = styled('div')(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Header title={titleHeader} drawer={handleDrawerOpen}/>
            <Toolbar/>
            <View activeView={storeView.activeView.timetable}>
                <Day id="today" titleHeader={{titleHeader, setTitleHeader}}/>
                <Day id="tomorrow" titleHeader={{titleHeader, setTitleHeader}}/>
                <Week id="week" titleHeader={{titleHeader, setTitleHeader}}/>
                <Week id="secondWeek" titleHeader={{titleHeader, setTitleHeader}}/>
            </View>
            <Toolbar/>
            <TabBar/>

            <Drawer sx={{width: 'auto', flexShrink: 0, '& .MuiDrawer-paper': {width: 'auto',},}}
                    variant="persistent" anchor="right" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {<ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <ProfileList/>
            </Drawer>
        </>
    );
});

export default TimeTable;