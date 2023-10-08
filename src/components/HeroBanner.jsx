import React from 'react';
import {Box, Stack, Typography, Button } from "@mui/material"
import HeroBannerImage from '../assets/images/girl2-banner.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: " 220px", xs:"80px"},
      ml: { sm: "50px"}
    }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="30px">
        Fitness Club
      </Typography>

      <Typography fontWeight={700} sx={{fontSize : {lg:"44px", xs:"24px"}}}  mt='20px' mb='30px'>
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography  sx={{fontSize: {lg:"22px", xs:"16px"}}} mb={3}>
        Check out the most effective Exercises 
      </Typography>

      <Button 
         variant="contained" 
         color="error"
         href='#exercises'
         sx={{ backgroundColor:'#FF2625', padding:'10px'}}
      
      >
        Explore Exercises 
      </Button>

      <Typography 
         fontWeight={600}
         color='#FF2625'
         sx={{
           opacity: 0.1,
           display:{ lg: 'block', xs:'none'}
         }}
         mt= '20px'
         fontSize='200px'
      >
        Exercise 
      </Typography>

      <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
      
    </Box>
  )
}

export default HeroBanner
