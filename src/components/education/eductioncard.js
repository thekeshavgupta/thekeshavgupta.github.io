import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Container, Typography, Paper, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// // // Define the Accordion component
// function EducationAccordions() {
//     return (
//         <Container sx={{ mt: 3 }}>
//             <Accordion defaultExpanded>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                 >
//                     <Typography variant="h5">Thapar Institute of Engineering and Technology, Patiala</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         This is the content of Accordion 1. It is expanded by default.
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>

//             <Accordion defaultExpanded sx={{ mt: 2 }}>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2a-content"
//                     id="panel2a-header"
//                 >
//                     <Typography variant="h6">Accordion 2</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         This is the content of Accordion 2. It is also expanded by default.
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//         </Container>
//     );
// }

function EducationAccordions() {
    return (
        <Container sx={{ mt: 3 }}>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h5">Thapar Institute of Engineering and Technology, Patiala, Punjab, India</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: 18 }}>Bachelors of Engineering, Major in Computer Engineering</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'right', fontWeight: 'bold', fontSize: 18 }}>2016 - 2020</Typography>
                        </Box>
                        <Typography variant="body2" component="ul" sx={{ fontSize: '1rem' }}>
                            <li>Secured the B.E. Degree with Cumulative Grade Point Average (CGPA) : 9.41/10.0</li>
                            <li>Bagged T.I.E.T merit scholarship among 2000+ students.</li>
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded sx={{ mt: 2 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h5">Bhavan's SL Public School, Amritsar, Punjab, India</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: 18}}>Class X, XI, XII </Typography>
                            <Typography variant="body2" sx={{ textAlign: 'right', fontWeight: 'bold', fontSize: 18 }}>2013 - 2016</Typography>
                        </Box>
                        <Typography variant="body2" component="ul" sx={{ fontSize: '1rem' }}>
                            <li>Secured an overall percentage: 91% in CBSE Senior Secondary Board exams.</li>
                            <li>Secured an overall CGPA: 10.0/10.0 in CBSE Matriculation exams.</li>
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}

export default function MyPage() {
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
                overflow: 'hidden',
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
                <Typography variant="h2" component="div" sx={{ fontFamily: 'Roboto, sans-serif', mb: 1, fontWeight: 'bold', mx: 3}}>
                    Education
                </Typography>
                <EducationAccordions/>
            </Box>
            
        </Paper>
    );
}