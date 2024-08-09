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
                    Keshav Gupta is a skilled software development engineer with a proven track record at Amazon, where he has delivered scalable and maintainable solutions across various systems. With a good understanding in Kotlin, he has optimized the ordering checkout process in JWO systems, significantly reducing operational load. Keshav’s proficiency extends to designing robust frontend and backend systems, including a unified dataset evaluation and annotation portal that enhances efficiency and accuracy. Additionally, he has experience working with Spark and Scala for cost allocations corresponding to sort-centers and has contributed to multiple projects involving C++ and Java. Keshav is also well-versed in the Machine Learning domain, applying his analytical skills to develop models and solutions that drive innovation.
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