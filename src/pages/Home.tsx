import { Box, Typography } from '@mui/material';

export default function Home() {

    return (
        <>
            <Box sx={{
                backgroundImage: `linear-gradient(90deg, rgba(250,247,242,0) 0%, rgba(87,180,225,0.9) 80%),url('/images/homeBgImage.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'right',
                margin: 'auto',
                height: '70vh',
                width: '100vw',
                position: 'relative',
                backgroundColor: '#faf7f2',
            }}>
                <Box>
                    <Typography
                        fontWeight={'bold'}
                        mr={5}
                        color={'#2d3449'}
                        variant="h2"
                        gutterBottom>
                        Welcome to my TestSite
                    </Typography>
                    <Typography
                        fontWeight={'bold'}
                        fontSize={'2rem'}
                        mr={5}
                        color={'#fff'}
                        variant="subtitle1"
                        gutterBottom>
                        Some Text
                    </Typography>
                </Box>
            </Box>
        </>
    );
}