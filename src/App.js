import React from "react";
import {CssBaseline} from "@mui/material";

import {View} from "./Components/View";

import {observer} from "mobx-react-lite";
import storeView from "./Store/storeView";
import TimeTable from "./Timetable/timetable";

const App = observer((props) => {
    return (
        <CssBaseline>
            <View activeView={storeView.activeView.app}>
                <TimeTable id="timetable"/>
            </View>
        </CssBaseline>
    );
});

export default App;