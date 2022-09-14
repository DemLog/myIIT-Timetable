import React from "react";
import {CssBaseline} from "@mui/material";

import {View} from "./Components/View";

import {observer} from "mobx-react-lite";
import storeView from "./Store/storeView";

const App = observer((props) => {
    return (
        <CssBaseline>
            <View activeView={storeView.activeView.app}>
                <></>
            </View>
        </CssBaseline>
    );
});

export default App;