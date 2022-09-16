import React, {useState} from "react";

import {observer} from "mobx-react-lite";
import storeView from "../Store/storeView";

import {View} from "../Components/View";
import {TabBar} from "../Components/TabBar";
import {Header} from "../Components/Header";
import {Container, Toolbar} from "@mui/material";
import Day from "./day/Day";
import Week from "./week/Week";

const TimeTable = observer((props) => {
    const [titleHeader, setTitleHeader] = useState("");

    return (
        <>
            <Header title={titleHeader}/>
            <Toolbar/>
            <View activeView={storeView.activeView.timetable}>
                <Day id="today" titleHeader={{titleHeader, setTitleHeader}}/>
                <Day id="tomorrow" titleHeader={{titleHeader, setTitleHeader}}/>
                <Week id="week" titleHeader={{titleHeader, setTitleHeader}}/>
                <Week id="secondWeek" titleHeader={{titleHeader, setTitleHeader}}/>
            </View>
            <Toolbar/>
            <TabBar/>
        </>
    );
});

export default TimeTable;