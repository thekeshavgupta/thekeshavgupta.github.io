import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';

export default function Footer({positionValue}) {
    return (
        <Box
            component="footer"
            sx={{
                position: positionValue,
                bottom: 0,
                width: '100%',
                py: 2,
                px: 3,
                backgroundColor: 'background.paper',
                borderTop: '4px solid',
                borderColor: 'divider',
                textAlign: 'center',
                display: { xs: 'none', md: 'flex' },
                zIndex: 1200 // Ensures it is above other content
            }}
        >
            <Container maxWidth="md">
                <Typography variant="body1">
                    Keshav Gupta © {new Date().getFullYear()} - All rights reserved.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Crafted with{
                        <IconButton aria-label="GitHub" color="inherit">
                            <Favorite color='error' />
                        </IconButton>
                    } using Material-UI & ReactJS
                </Typography>
            </Container>
        </Box>
    );
}