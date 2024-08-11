import {React, useEffect, useState} from "react";
import { deepOrange, yellow } from '@mui/material/colors';
import { Paper, CardContent, Box, Typography, Avatar, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../footer";
import { keyframes } from "@emotion/react";

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
                    display: { 'md': 'flex', 'xs': 'none' }, maxWidth: 1200, maxHeight: 300, marginX: 'auto', color: '#ffffff', borderRadius: '20px', marginTop: 5,}}>
                {/* Left Portion */}
                <Box sx={{ width: '40%', padding: 2, textAlign: 'center', borderRight: '3px solid #555' }}>
                    <Avatar
                        sx={{
                            width: 100, height: 100, margin: 'auto', marginBottom: 1, boxShadow: 10,
                            bgcolor: color,
                            fontSize: 50,
                            fontWeight: 700
                         }}
                    >{ companyName[0]}</Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        {companyName}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 3, fontWeight: 'bold', fontSize: '1vw' }}>
                        {designation}
                    </Typography>
                    <Box sx={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', marginTop: 'auto', gap: 2 }}>
                        <Typography variant="h6" color="text.secondary" sx={{ fontSize: 14 }}>
                            {date}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 1, fontSize: 16, fontWeight: 'bold' }}>
                            {place}
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

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const TypingAnimation = () => {
    const [text, setText] = useState("");
    const fullText = "Cuurious to know more about me?";
    const typingSpeed = 100; // Speed in milliseconds

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText((prev) => prev + fullText.charAt(index));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <Box display="flex" alignItems="start">
            <Typography variant="h3" component="div"
                sx={{
                    marginLeft: '20rem',
                    mt: '0.5rem',
                    color: '#444750',
                    opacity: 0.5
                }}
            >
                {text}
            </Typography>
            <Box
                component="span"
                sx={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    // mt: '0.5rem',
                    // ml: 1,
                    animation: `${blink} 0.5s infinite`,
                }}
            >
                .
            </Box>
        </Box>
    );
};
export function Experience() {
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
                    overflowY: 'auto', // Enables vertical scrolling
                    paddingBottom: '50px'
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        mx: '20rem',
                        background: 'linear-gradient(270deg, #00ff00, #0000ff, #ff7f00, #4b0082, #ffff00, #9400d3)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: 96,
                        animation: 'fadeIn 2s ease-in',
                        '@keyframes fadeIn': {
                            '0%': { opacity: 0 },
                            '100%': { opacity: 1 },
                        },
                    }}
                >
                    &lt;Experience/&gt;
                </Typography>
                {/* <Typography
                    variant="h3"
                    sx={{
                        mx: '20rem',
                        mt: '0.5rem',
                        color: '#444750',
                        animation: 'fadeIn 1.5s ease-in',
                    }}
                >
                    Crafting the code, One Line of Code at a Time
                </Typography> */}
                <TypingAnimation/>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 2,
                        padding: 1,
                        width: '100%',
                        maxHeight: 'calc(100vh - 200px)', // Adjust as necessary to allow space for header and padding
                        
                    }}
                >
                    <ProfilePaperCard
                        companyName="Amazon"
                        date="JAN. 2021 - PRESENT"
                        designation="Software Development Engineer"
                        content={[
                            "Developed scalable and maintainable systems for various projects.",
                            "Implemented Kotlin-based systems to reduce operational load during the Ordering Checkout Process in JWO systems.",
                            "Designed and implemented frontend webpages and backend JWO systems corresponding to a portal, enabling researchers to evaluate dataset outputs and annotation summaries.",
                            "Utilized Spark and Scala to execute Sort Center daily variable cost allocations."
                        ]}
                        color={yellow[800]}
                        place={"Bengaluru, Karnataka"}
                    />
                    <ProfilePaperCard
                        companyName="Optum"
                        date="JUL. 2020 - JAN. 2021"
                        designation="Software Engineer"
                        content={[
                            "Gained in-depth understanding of healthcare systems",
                            "Acquired a good understanding of big data technologies, including Spark and Hadoop, during the probation period."
                        ]}
                        color={deepOrange[200]}
                        place={"Hyderabad, Telangana"}
                    />
                </Box>
            </Box>
            <Footer positionValue={'sticky'} />
        </ThemeProvider>
    );
}