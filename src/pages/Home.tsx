import { Box, Typography } from '@mui/material';


export default function Home() {
    const imgGradientOtherScreens = `linear-gradient(90deg, rgba(250,247,242,0) 0%, rgba(87,180,225,0.9) 80%),url('/images/homeBgImage.jpg')`;

    return (
        <>
            <Box sx={{
                backgroundImage: {
                    xs: `linear-gradient(0deg, rgba(250,247,242,0) 0%, rgba(87,180,225,0.9) 80%),url('/images/homeBgImage.jpg')`,
                    sm: imgGradientOtherScreens,
                    md: imgGradientOtherScreens,
                    lg: imgGradientOtherScreens,
                    xl: imgGradientOtherScreens
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                height: { xs: '40vh', sm: '40vh', md: '70vh', lg: '70vh', xl: '70vh' },
                width: '100vw',
                position: 'relative',
                backgroundColor: '#faf7f2',
                display: 'flex',
                alignItems: { xs: 'start', sm: 'start', md: 'center', lg: 'center', xl: 'center' }
            }}>
                <Box sx={{
                    mr: { md: 5, lg: 7, xl: 7 },
                    ml: { xs: 1, sm: 1 },
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'start', sm: 'start', md: 'end', lg: 'end', xl: 'end' }
                }}>
                    <Typography
                        fontWeight={'bold'}
                        color={'#2d3449'}
                        variant="h2"
                        gutterBottom>
                        Welcome to my TestSite
                    </Typography>
                    <Typography
                        fontWeight={'bold'}
                        fontSize={'2rem'}
                        color={'#fff'}
                        variant="subtitle1"
                        gutterBottom>
                        Some Text
                    </Typography>
                </Box>
            </Box >
            <Typography
                m={3}
                fontSize={'1.5rem'}
                color={'#37405c'}
                variant="subtitle1"
                gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptates consectetur.
                Totam repellendus voluptatem assumenda ullam quae natus dignissimos quasi doloribus in iusto aliquam itaque,
                voluptates officiis! Illo, ex explicabo?
            </Typography>
        </>
    );
}