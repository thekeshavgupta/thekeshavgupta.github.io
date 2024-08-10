import React from 'react';
import { Paper, CardContent, Box, Typography, Avatar, IconButton, CssBaseline } from '@mui/material';
import { LinkedIn, Email, GitHub } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '5vw', // Adjusts the font size relative to the screen width
            fontWeight: 700,
        },
        h3: {
            fontSize: '2vw', // Smaller font size for the second text
            fontWeight: 550,
            color: 'rgba(176, 176, 176, 0.12)', // Transparent gray color for the second text
        },
    },
});

const ProfilePaper = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Paper
                elevation={18}
                sx={{ display: { 'md': 'flex', 'xs': 'none' }, maxWidth: 1000, marginX: 'auto', color: '#ffffff', borderRadius: '20px', marginTop: 5 }}>
                {/* Left Portion */}
                <Box sx={{ width: '40%', padding: 2, textAlign: 'center', borderRight: '1px solid #333' }}>
                    <Avatar
                        src={require("../static/images/profile-image.jpg")}
                        alt="Your Name"
                        sx={{ width: 200, height: 200, margin: 'auto', marginBottom: 2, boxShadow: 10 }}
                    />
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Keshav Gupta
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
                        Software Engineer @ Amazon
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto', gap: 2 }}>
                        <IconButton href="https://linkedin.com/in/kgupta786" target="_blank" sx={{ color: '#0077b5' }}>
                            <LinkedIn />
                        </IconButton>
                        <IconButton href="mailto:guptakeshav2509@gmail.com" sx={{ color: '#D44638' }}>
                            <Email />
                        </IconButton>
                        <IconButton href="https://github.com/kgupta786" target="_blank" sx={{ color: '#ffffff' }}>
                            <GitHub />
                        </IconButton>
                    </Box>
                </Box>

                {/* Right Portion */}
                <CardContent sx={{ width: '60%', padding: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ textAlign: 'justify', fontSize: 18 }}>
                        <ul>
                            <li>Keshav Gupta is a software development engineer at Amazon with expertise in delivering scalable solutions across various systems. He has optimized the ordering checkout process using Kotlin, reducing operational load, and designed a unified portal for dataset evaluation and annotation.</li>
                            <li> Keshav’s skills include working with Spark and Scala for sort-center cost allocations, and he has contributed to projects in C++ and Java. Additionally, he has experience in the Machine Learning domain, applying his analytical abilities to develop innovative models and solutions that enhance efficiency and accuracy.</li>
                        </ul></Typography>
                </CardContent>
            </Paper>
        </ThemeProvider>
    );
};

const ProfileCard = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    paddingTop: '5vh', // Adjust this value to control the vertical position
                    backgroundColor: '#121212', // Dark background color
                    minHeight: '90vh',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        mx: '20rem',
                        background: 'linear-gradient(270deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: 96,
                        animation: 'rainbowAnimation 15s ease infinite, typing 4s steps(30)',
                        '@keyframes rainbowAnimation': {
                            '0%': { backgroundPosition: '0% 50%' },
                            '50%': { backgroundPosition: '100% 50%' },
                            '100%': { backgroundPosition: '0% 50%' },
                        },
                        '@keyframes typing': {
                            '0%': { width: '0%' },
                            '100%': { width: '70%' },
                        },
                    }}
                >
                    &lt;Hello;
                </Typography>
                <Typography variant="h3" sx={{ mx: '20rem', mt: '0.5rem', color: '#444750' }}>
                    a quick intro about me?
                </Typography>
                <ProfilePaper />
            </Box>
        </ThemeProvider>
    );
};


export default ProfileCard;