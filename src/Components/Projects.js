import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

export const Projects = () => {
    const [cards, setCards] = useState([
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg',
            isFlipped: false,
        }, {
            image: 'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
            isFlipped: false,
        }, {
            image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
            isFlipped: false,
        }, {
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
            isFlipped: false,
        }, {
            image: 'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg',
            isFlipped: false,
        }])
    const handleFlipClick = (index) => {
        let updatedCards = [...cards];
        updatedCards[index].isFlipped = !updatedCards[index].isFlipped;
        setCards(updatedCards);
    }
    return (
        <Box sx={{
            backgroundImage: 'url(https://d1l5pp53ux74mz.cloudfront.net/images/default-source/backgrounds/brand-refresh-q4-2021/home_hero_top_element.svg.svg?sfvrsn=6c39ecde_6)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            // display: 'flex'
        }}>
            <Typography sx={{
                marginLeft: '3vw', marginTop: '0%',
                // position: 'absolute',
                paddingTop: '3%',
                transform: 'rotate(335deg)',
                width: 'fit-content'
            }} color="#1B545D" variant="h3" component="h2">
                Projects
            </Typography>
            <Grid container spacing={2} sx={{ paddingTop: '5%' }}>
                {
                    cards.map((card, index) => {
                        console.log(card);
                        return <Grid item xs={4} key={card.image}>
                            <ReactCardFlip isFlipped={card.isFlipped} flipDirection="vertical" cardStyles={{ height: '30vh' }} containerStyle={{ height: '30vh' }} >
                                <Box height={'30vh'} sx={{
                                    backgroundImage: 'url(' + card.image + ')',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'contain'
                                }} onClick={() => handleFlipClick(index)} >
                                </Box>
                                <Box height={'20vh'} sx={{ textAlign: 'center', background: 'white' }} onClick={() => handleFlipClick(index)} >
                                    This is the back of the card.
                                </Box>
                            </ReactCardFlip>
                        </Grid>;
                    })
                }
            </Grid>
        </Box>
    )
    {/* <Grid item xs={4} sx={{
                width: '45vh',
                height: '25vh',
                marginLeft: 'auto',
                marginRight: 'auto',
                overflow: 'hidden'
            }}> */}
    {/* <AnimatedProjectImages /> */ }
    {/* </Grid> */ }
}
