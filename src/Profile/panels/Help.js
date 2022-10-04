import React from "react";
import storeView from "../../Store/storeView";
import {BackHeader} from "../../Components/Header";
import {Container, Toolbar} from "@mui/material";

const Help = (props) => {
    const backView = () => {
        storeView.changeView("app", "timetable")
    };
    return (
        <>
            <BackHeader title="Помощь" back={backView}/>
            <Toolbar/>
            <Container sx={{mt: 2}}>

            </Container>
        </>
    );
}

export default Help;