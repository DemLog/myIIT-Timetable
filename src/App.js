import React, {useState} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

import {View} from "./Components/View";

import {observer} from "mobx-react-lite";
import storeView from "./Store/storeView";
import TimeTable from "./Timetable/timetable";
import Profile from "./Profile/Profile";

import "./app.css";
import Info from "./Profile/panels/Info";
import Devices from "./Profile/panels/Devices";
import Help from "./Profile/panels/Help";

const App = observer((props) => {
    const [themeUI, setThemeUI] = useState(createTheme({palette: {mode: 'light',},})); // переезд
    return (
        <ThemeProvider theme={themeUI}>
        <CssBaseline>
            <View activeView={storeView.activeView.app}>
                <TimeTable id="timetable"/>
                <Profile id="profile"/>
                <Info id="info"/>
                <Devices id="devices"/>
                <Help id="help"/>
            </View>
        </CssBaseline>
        </ThemeProvider>
    );
});

export default App;