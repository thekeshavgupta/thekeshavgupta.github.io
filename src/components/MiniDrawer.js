import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import ProfileCard from './HomeCard';
import {
    AppBar,
    Box,
    Toolbar,
    Switch,
    IconButton,
    Button,
    Container,
    BottomNavigation,
    BottomNavigationAction,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PrecisionManufacturing from '@mui/icons-material/PrecisionManufacturing';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Science from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';
import Home from '@mui/icons-material/Home';
import Footer from './footer';
import MyPage from './education/eductioncard';

const pages = [
    { label: 'Home', icon: <Home /> },
    // { label: 'Experience', icon: <WorkIcon /> },
    { label: 'Education', icon: <SchoolIcon /> },
    // { label: 'Research', icon: <Science /> },
    // { label: 'Projects', icon: <PrecisionManufacturing /> },
    // { label: 'Skillset', icon: <CodeIcon /> },
    // Add more pages as needed
];

export default function MyAppBar() {
    const [darkMode, setDarkMode] = useState(true);
    const [currPage, setCurrPage] = useState('Home')
    const [bottomNavValue, setBottomNavValue] = useState(0);
    const theme = createTheme({
        palette: {
            
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#1976d2', // Blue color for highlighted icon
            },
        },
    });

    const handleToggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const handleBottomNavChange = (event, newValue) => {
        setBottomNavValue(newValue);
    };

    const handlePageChange = (pageLabel) => {
        setCurrPage(pageLabel);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters variant="dense">
                        <Box sx={{
                            flexGrow: 1, display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center', mx: 10,
                        }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.label}
                                    onClick={() => handlePageChange(page.label)}
                                    sx={{
                                        mx: 5,
                                        color: 'white',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textTransform: 'none',
                                        color: currPage === page.label ? theme.palette.primary.main : 'white',
                                    }}
                                >
                                    <Box>
                                        {page.icon}
                                    </Box>
                                    {page.label}
                                </Button>
                            ))}
                        </Box>


                        {/* Dark Mode Toggle for desktop*/}
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            { /**
                             * need to update in the next version update
                             */}
                            <Switch checked={darkMode} onChange={handleToggleDarkMode} disabled={true} />
                            <IconButton
                                edge="end"
                                color={darkMode ? theme.palette.text.primary : 'inherit'}
                                aria-label="toggle dark mode"
                            >
                                {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
                            </IconButton>
                        </Box>

                        {/* Dark Mode Toggle for small devices*/}
                        <Box sx={{
                            display: { xs: 'flex', md: 'none' },
                            position: 'fixed',
                            bottom: 70, // Ensure it is above the BottomNavigation
                            right: 0,
                            padding: 1,
                            backgroundColor: theme.palette.background.paper,
                            borderTopLeftRadius: 8,
                            borderBottomLeftRadius: 8,
                            boxShadow: theme.shadows[4],
                        }}>
                            <Switch checked={darkMode} onChange={handleToggleDarkMode} // Use default color to match theme
                            />
                            <IconButton
                                edge="end"
                                color={darkMode ? theme.palette.text.primary : 'warning'}
                                aria-label="toggle dark mode"
                            >
                                {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {currPage == 'Home' && <ProfileCard />}
            {currPage == 'Education' && <MyPage />}

            <Footer/>

            {/* Bottom Navigation for Mobile */}
            <BottomNavigation
                value={bottomNavValue}
                onChange={handleBottomNavChange}
                showLabels
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: theme.palette.background.paper, // Match the AppBar color
                    color: theme.palette.text.primary, // Ensure the text color is readable
                    boxShadow: theme.shadows[24],
                }}
            >
                <BottomNavigationAction label="Experience" icon={<WorkIcon />} />
                <BottomNavigationAction label="Education" icon={<SchoolIcon />} />
                <BottomNavigationAction label="Research" icon={<Science />} />
                <BottomNavigationAction label="Projects" icon={<PrecisionManufacturing />} />
                <BottomNavigationAction label="Skills" icon={<CodeIcon />} />
            </BottomNavigation>


        </ThemeProvider>
    );
}