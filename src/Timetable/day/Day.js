import {observer} from "mobx-react-lite";
import {
    Box, Chip,
    Container, Divider,
    List,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Typography
} from "@mui/material";

import "./day.css";

const Day = observer((props) => {
    props.titleHeader.setTitleHeader("Понедельник, 30 февраля");
    return (
        <Container sx={{mt: 2}}>
            <Box sx={{boxShadow: 2}}>
                <List disablePadding sx={{width: '100%', bgcolor: 'background.paper'}}
                      subheader={<><ListSubheader component="div">
                          4 пары с 9:40 по 16:30
                      </ListSubheader><Divider variant="middle"/></>
                      }>
                    <ListItemButton divider disabled>
                        <Box className="time-list-item">
                            <Typography>9:40</Typography>
                            <Typography>11:10</Typography>
                        </Box>
                        <ListItemText primary="Математический анализ"
                                      secondary="Преподаватель: Нагуманова А.В., Нагуманова А.В."/>
                        <Chip label="132А" color="primary" variant="outlined"/>
                    </ListItemButton>
                    <ListItemButton divider selected>
                        <Box className="time-list-item">
                            <Typography>11:20</Typography>
                            <Typography>12:50</Typography>
                        </Box>
                        <ListItemText primary="Информатика" secondary="Преподаватель: Какойтохуй П.Р."/>
                        <Chip sx={{ml: 1}} label="132А" color="primary" variant="outlined"/>
                    </ListItemButton>
                    <ListItemButton>
                        <Box className="time-list-item">
                            <Typography>13:15</Typography>
                            <Typography>14:45</Typography>
                        </Box>
                        <ListItemText primary="Архитектура предприятия и моделирование бизнес-процессов (пр.)"
                                      secondary="Преподаватель: Нагуманова А.В."/>
                        <Chip sx={{ml: 1}} label="132А" color="primary" variant="outlined"/>
                    </ListItemButton>
                </List>
            </Box>
        </Container>
    );
});

export default Day;