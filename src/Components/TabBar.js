import {
    BottomNavigation,
    BottomNavigationAction,
    Paper
} from "@mui/material";
import TodayIcon from '@mui/icons-material/Today';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {observer} from "mobx-react-lite";
import storeTabs from "../Store/storeTabs";
import storeView from "../Store/storeView";

export const TabBar = observer((props) => {
    const handleChange = (e, value) => {
        storeTabs.changeTab(value);
        storeView.changeView("timetable", value);
    };

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, display: {xs: 'block', md: 'none'}}} elevation={6}>
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
        </Paper>
    );
});