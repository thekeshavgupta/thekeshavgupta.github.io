import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { deepOrange, yellow } from '@mui/material/colors';


function CardProject({ companyName, designation, date, content, color }) {
    return (
        <Paper
            elevation={24}
            sx={{
                maxWidth: 600,
                borderRadius: "20px",
                bgcolor: 'black',
                mx: 2,
            }}
        >
            <Box
                sx={{
                    padding: '2px 20px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Avatar
                    sx={{
                        bgcolor: color,
                        width: 100,
                        height: 100,
                        transform: "translateY(50%)",
                        textAlign: 'center',
                        lineHeight: '100px',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                    }}
                >
                    {companyName}
                </Avatar>
                    <Typography
                        sx={{
                            fontSize: 14,
                            letterSpacing: "1px",
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        }}
                    >
                        {date}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        backgroundColor: "grey.500",
                        marginBottom: '23px'
                    }}
                    component="hr"
                />
            <CardContent sx={{ p: 2, mt: 5 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{
                    fontSize: 18, fontFamily: 'Poppins',
                    fontWeight: 500,
}}>
                    {designation}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <ul style={{
                        paddingLeft: "20px", margin: "0", fontSize: 16, textAlign: 'justify', fontFamily: 'Poppins',
                        fontWeight: 300 }}>
                        {content.map((bullet, index) => (
                            <li key={index} style={{ marginBottom: "8px" }}>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </Typography>
            </CardContent>
        </Paper>
    );
}

export function Experience() {
    return (
        <Paper
            elevation={20}
            sx={{
                maxWidth: 1350,
                width: '100%',
                mx: 'auto',
                my: 4,
                p: 2,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'column' },
                justifyContent: 'space-evenly',
                alignItems: 'space-evenly',
                height: 'auto',
                backgroundColor: 'background.paper',
                borderRadius: 2,
                overflow: 'hidden',
            }}
        >
            {/* Content Section */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    p: 1,
                }}
            >
                <Typography
                    variant="h2"
                    component="div"
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        mb: 2,
                        mx: 2,
                    }}
                >
                    Experience
                </Typography>
            </Box>
            <Box
                sx={{
                    flex: 3,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    p: 2,
                    flexWrap: 'wrap',
                }}
            >
                <CardProject
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
                />
                <CardProject
                    companyName="Optum"
                    date="JUL. 2020 - JAN. 2021"
                    designation="Software Engineer"
                    content={[
                        "Gained in-depth understanding of healthcare systems and acquired a good understanding of big data technologies, including Spark and Hadoop, during the probation period."
                    ]}
                    color={deepOrange[200]}
                />
            </Box>
        </Paper>
    );
}