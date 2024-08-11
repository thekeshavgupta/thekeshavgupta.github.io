import React from "react";
import { brown, red } from '@mui/material/colors';
import { Paper, CardContent, Box, Typography, Avatar, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../footer";
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


function ProfilePaperCard({ companyName, designation, date, color, content, place }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Paper
                elevation={20}
                sx={{
                    display: { 'md': 'flex', 'xs': 'none' }, maxWidth: 900, maxHeight: 300, marginX: 'auto', color: '#ffffff', borderRadius: '20px', marginTop: 2,
                }}>
                {/* Left Portion */}
                <Box sx={{ width: '40%', padding: 2, textAlign: 'center', borderRight: '3px solid #555' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            width: 75, height: 75, margin: 'auto', marginBottom: 0.5, boxShadow: 10,
                            bgcolor: color,
                            fontSize: 50,
                            fontWeight: 700
                        }}
                    >{companyName[0]}</Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 18 }}>
                        {companyName}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 2, fontWeight: 'bold', fontSize: 16 }}>
                        {designation}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 'auto', gap: 2 }}>
                        <Typography variant="h6" color="text.secondary" sx={{ fontSize: 12 }}>
                            {date}
                        </Typography>
                    </Box>
                </Box>

                {/* Right Portion */}
                <CardContent sx={{ width: '60%', padding: 3, display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                    <Typography variant="body1" sx={{ textAlign: 'justify', fontSize: 17 }}>
                        <ul>
                            {content.map((bullet, index) => (
                                <li key={index}>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </Typography>
                </CardContent>
            </Paper>
        </ThemeProvider>
    );
};
export default function EducationPage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    paddingTop: '3vh', // Adjust this value to control the vertical position
                    backgroundColor: '#121212', // Dark background color
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        mx: '20rem',
                        bgcolor: 'grey.800',
                        opacity: 0.6,
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: 96,
                        borderRight: '10px solid yellow',
                        animation: 'typing 5s steps(28) 1s 1 normal both, blink-caret 1s step-end infinite',
                        '@keyframes typing': {
                            '0%': { width: '0%' },
                            '100%': { width: '30%' },
                        },
                        '@keyframes blink-caret': {
                            '0%, 100%': { borderColor: 'transparent' },
                            '50%': { borderColor: 'yellow' }, // Cursor color
                        },
                    }}
                >
                    education..
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'start',
                        flexWrap: 'wrap',
                        gap: 1,
                        padding: 1,
                        width: '100%',
                        maxHeight: 'calc(100vh - 100px)', // Adjust as necessary to allow space for header and padding

                    }}
                >
                    <ProfilePaperCard
                        companyName="Thapar Institute of Engineering and Technology, Patiala"
                        date="2016 - 2020"
                        designation="Bachelors of Engineering, Major in Computer Engineering"
                        content={[
                            "Secured the B.E. Degree with Cumulative Grade Point Average (CGPA) : 9.41/10.0",
                            "Bagged T.I.E.T merit scholarship among 2000+ students."
                        ]}
                        color={red[500]}
                    />
                    <ProfilePaperCard
                        companyName="Bhavan's SL Public School, Amritsar"
                        date="2013 - 2016"
                        designation="Class X, XI, XII"
                        content={[
                            "Secured an overall percentage: 91% in CBSE Senior Secondary Board exams.",
                            "Secured an overall CGPA: 10.0/10.0 in CBSE Matriculation exams."
                        ]}
                        color={brown[500]}
                    />

                </Box>
            </Box>
            <Footer positionValue={'fixed'} />
        </ThemeProvider>
    );
}