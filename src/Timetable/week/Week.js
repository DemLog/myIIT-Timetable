import {observer} from "mobx-react-lite";
import {
    AppBar,
    Box,
    Chip,
    Container,
    Divider,
    List, ListItem,
    ListItemButton,
    ListItemText,
    ListSubheader, Tab, Tabs,
    Typography
} from "@mui/material";

const Week = observer((props) => {
    props.titleHeader.setTitleHeader("Первая неделя");
    return (
        <Container sx={{mt: 2}} component="main">
            <Box sx={{width: '100%', mb: 2}}>
                <Box sx={{boxShadow: 1}}>
                    <Tabs value={0}>
                        <Tab label="I неделя"/>
                        <Tab label="II неделя"/>
                    </Tabs>
                </Box>
            </Box>
            <Box sx={{boxShadow: 2, mb: 2}}>
                <List disablePadding sx={{width: '100%', bgcolor: 'background.paper'}}
                      subheader={<>
                          <Typography variant="h6" sx={{ml: 2}}>Понедельник</Typography>
                          <ListSubheader component="div" sx={{lineHeight: '24px'}}>
                              4 пары с 9:40 по 16:30</ListSubheader>
                          <Divider variant="middle"/></>
                      }>
                    <ListItem divider>
                        <Box className="time-list-item">
                            <Typography>9:40</Typography>
                            <Typography>11:10</Typography>
                        </Box>
                        <ListItemText primary="Математический анализ"
                                      secondary="Преподаватель: Нагуманова А.В., Нагуманова А.В."/>
                        <Chip label="132А" color="primary" variant="outlined"/>
                    </ListItem>
                    <ListItem divider>
                        <Box className="time-list-item">
                            <Typography>11:20</Typography>
                            <Typography>12:50</Typography>
                        </Box>
                        <ListItemText primary="Информатика" secondary="Преподаватель: Какойтохуй П.Р."/>
                        <Chip sx={{ml: 1}} label="132А" color="primary" variant="outlined"/>
                    </ListItem>
                    <ListItem>
                        <Box className="time-list-item">
                            <Typography>13:15</Typography>
                            <Typography>14:45</Typography>
                        </Box>
                        <ListItemText primary="Архитектура предприятия и моделирование бизнес-процессов (пр.)"
                                      secondary="Преподаватель: Нагуманова А.В."/>
                        <Chip sx={{ml: 1}} label="132А" color="primary" variant="outlined"/>
                    </ListItem>
                </List>
            </Box>
            <Box sx={{boxShadow: 2, mb: 2}}>
                <List disablePadding sx={{width: '100%', bgcolor: 'background.paper'}}
                      subheader={<>
                          <Typography variant="h6" sx={{ml: 2}}>Вторник</Typography>
                          <ListSubheader component="div" sx={{lineHeight: '24px'}}>
                              4 пары с 9:40 по 16:30</ListSubheader>
                          <Divider variant="middle"/></>
                      }>
                    <ListItem divider>
                        <Box className="time-list-item">
                            <Typography>9:40</Typography>
                            <Typography>11:10</Typography>
                        </Box>
                        <ListItemText primary="Математический анализ"
                                      secondary="Преподаватель: Нагуманова А.В., Нагуманова А.В."/>
                        <Chip label="132А" color="primary" variant="outlined"/>
                    </ListItem>
                    <ListItem divider>
                        <Box className="time-list-item">
                            <Typography>11:20</Typography>
                            <Typography>12:50</Typography>
                        </Box>
                        <ListItemText primary="Информатика" secondary="Преподаватель: Какойтохуй П.Р."/>
                        <Chip sx={{ml: 1}} label="132А" color="primary" variant="outlined"/>
                    </ListItem>
                    <ListItem>
                        <Box className="time-list-item">
                            <Typography>13:15</Typography>
                            <Typography>14:45</Typography>
                        </Box>
                        <ListItemText primary="Архитектура предприятия и моделирование бизнес-процессов (пр.)"
                                      secondary="Преподаватель: Нагуманова А.В."/>
                        <Chip sx={{ml: 1}} label="132А" color="primary" variant="outlined"/>
                    </ListItem>
                </List>
            </Box>
            <Box sx={{boxShadow: 2, mb: 2}}>
                <List disablePadding sx={{width: '100%', bgcolor: 'background.paper'}}
                      subheader={<>
                          <Typography variant="h6" sx={{ml: 2}}>Среда</Typography>
                          <Divider variant="middle"/></>
                      }>
                    <ListItem divider>
                        <ListItemText primary="В этот день пар нет :)"/>
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
});

export default Week;