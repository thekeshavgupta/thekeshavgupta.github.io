import React from 'react';
import { Link, CardActions, Typography, Button, IconButton, Paper, Box } from '@mui/material';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';

export default function ProfileCard() {
    return (
        <Paper
            elevation={16}
            sx={{
                maxWidth: 1200,
                width: '100%',
                mx: 'auto',
                my: 12,
                p: 2,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 'auto',
                backgroundColor: 'background.paper',
                borderRadius: 2,
                overflow: 'hidden', // Ensures the image stays within bounds
            }}
        >
            {/* Content Section */}
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                p: 2,
            }}>
                <Typography variant="h2" component="div" sx={{ fontFamily: 'Roboto, sans-serif', mb: 1, fontWeight: 'bold'}}>
                    Keshav Gupta
                </Typography>
                <Typography variant="h5" component="div" sx={{ fontFamily: 'Roboto, sans-serif', mb: 5 }}>
                    Software Development Engineer @ Amazon
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto, sans-serif', fontSize: 19 }}>
                    Keshav Gupta is an experienced software engineer with a strong background in developing scalable and maintainable systems.
                    At Amazon, Keshav has successfully implemented solutions in Kotlin to streamline the Ordering Checkout Process, reducing operational load significantly.
                    He has also designed comprehensive frontend and backend systems for a unified dataset evaluation and annotation portal, enhancing annotator efficiency and accuracy.
                    His expertise extends to working with Spark and Scala for variable cost allocations in Sort Centers and contributing to various projects involving C++ and Java.
                    With a keen eye for detail and a commitment to quality, Keshav is dedicated to advancing technology and improving system performance.
                </Typography>
                <CardActions sx={{ mt: 2 }}>
                    <Link href="https://www.linkedin.com/in/kgupta786" target="_blank" rel="noopener" color="text.primary">
                        <IconButton><LinkedIn /></IconButton>
                    </Link>
                    <Link href="mailto: guptakeshav2509@gmail.com" target="_blank" rel="noopener" color="text.primary">
                        <IconButton><Email /></IconButton>
                    </Link>
                </CardActions>
            </Box>

            {/* Image Section */}
            <Box sx={{
                flexShrink: 0,
                width: { xs: '100%', md: 300 },
                height: { xs: 200, md: 300 },
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                p: 0,
            }}>
                <img
                    src={require("../static/images/profile-image.jpg")}
                    alt="Profile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Box>
        </Paper>
    );
}