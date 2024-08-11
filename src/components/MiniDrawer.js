import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { AppBar, Box, Toolbar, Switch, IconButton, Container, Tabs, Tab, Paper } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PrecisionManufacturing from '@mui/icons-material/PrecisionManufacturing';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Science from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';
import Home from '@mui/icons-material/Home';
import Footer from './footer';
import ProfileCard from './HomeCard';
import { Experience } from './experience/expcard';
import EducationPage from './education/educationcard';

const pages = [
    { label: 'Home', icon: <Home /> },
    { label: 'Experience', icon: <WorkIcon /> },
    { label: 'Education', icon: <SchoolIcon /> },
    // { label: 'Research', icon: <Science /> },
    // { label: 'Projects', icon: <PrecisionManufacturing /> },
    // { label: 'Skillset', icon: <CodeIcon /> },
    // Add more pages as needed
];

export default function MyAppBar() {
    const [darkMode, setDarkMode] = useState(true);
    const [currPage, setCurrPage] = useState('Home');

    const handleToggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const handleTabChange = (event, newValue) => {
        setCurrPage(pages[newValue].label);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'dark',
            primary: {
                main: '#1976d2', // Blue color for highlighted tab
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position='sticky'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters variant="dense">
                        {/* Tabs for Desktop */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                            <Tabs value={pages.findIndex(page => page.label === currPage)} onChange={handleTabChange} aria-label="Navigation Tabs">
                                {pages.map((page) => (
                                    <Tab
                                        key={page.label}
                                        label={page.label}
                                        icon={page.icon}
                                        iconPosition="start"
                                        sx={{ textTransform: 'none', mx: 5 }}
                                    />
                                ))}
                            </Tabs>
                        </Box>

                        {/* Dark Mode Toggle for Desktop */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <Switch checked={darkMode} onChange={handleToggleDarkMode} disabled={true} />
                            <IconButton
                                edge="end"
                                color={darkMode ? theme.palette.text.primary : 'inherit'}
                                aria-label="toggle dark mode"
                            >
                                {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {currPage === 'Home' && <ProfileCard />}
            {currPage === 'Education' && <EducationPage />}
            {currPage === 'Experience' && <Experience />}
        </ThemeProvider>
    );
}