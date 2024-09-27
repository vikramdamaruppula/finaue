import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Grid2, TextField, Typography } from '@mui/material'
import finaureLogo from '../assets/socialIcons/finaureLogo.svg'

import './login.scss'
import { useNavigate } from 'react-router-dom'

const Verification = () => {
  const animationTexts = ['Plan','Invest','Buy']
  const [currentIndex,setCurrentIndex] =useState(0)
  const navigate = useNavigate()

  useEffect(()=>{
    const intervalId =setInterval(()=>{
      setCurrentIndex((prevIndex)=>(prevIndex +1)%animationTexts.length)
    },2500)
    return()=>clearInterval(intervalId)
  },[animationTexts.length])

  return (
    
    <form>
    <Grid2 container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Card container */}
      <Grid2 item xs={12} md={6} display="flex" justifyContent="center" alignItems="center" >
        {/* <Box > */}

{/*main  Card structure */}
          <Box
            // width={{ xs: '90%', md: '85%' }}
            boxShadow={2}
            borderRadius={5}
            overflow="hidden" 
            display="flex"
            // gap={{xs:'0px',md:'15px'}}
            flexDirection={{ xs:'column-reverse', md: 'row' }}
            bgcolor="white"
          >

{/* Left Section with Background */}
            <Box
              p={3}
              width={{ xs: '100%', md: '38%' }}
              color="white"
              textAlign="center"
              display="flex"
              justifyContent="space-between"
              alignItems='flex-start'
              flexDirection={{xs:'column',md:'column'}}
              position="relative"
              className='left-login-container'
            >
              <h5 className='left-container-text'  variant="h6" >
                BUY WITH SIP.
              </h5>

              {/* Animation for Invest/Buy */}
              <div className='animation-container'>
                <div className='line'></div>
                <div className='animation-text' > {animationTexts[currentIndex]} </div>
              </div>
            </Box>


{/* Right Section with Form */}
          <Grid 
          item 
          xs={12} 
          md={6} 
          className='otp-container'
          sx={{ 
            // padding:'80px 55px',
            backgroundColor: '#fff',
            width:'496px',
            marginRight:'20px'
          }}
        >
          <h5 className='verification-text'>
            Sent a verification code to verify your mobile number
          </h5>
          <h5 className='verification-mobile-star' sx={{ }}>
            Sent to +91 ********89
          </h5>

          {/* OTP Input Fields */}
          <Grid container spacing={1.6} justifyContent="center" mb={2.4}  >
            {[...Array(4)].map((_, index) => (
              <Grid item key={index}>
                <TextField
                  variant="filled"
                  inputProps={{ maxLength: 1, inputMode: 'numeric', pattern: '[0-9]*' }}
                  sx={{
                    width: { xs: 52, md: 75 },
                    height: { xs: 43, md: 65 },
                    fill:'#F5F0FF',
                    backgroundColor: '#F5F0FF',  // Light purple background
                    borderRadius: 4,  // Keep border radius
                    '& .MuiFilledInput-root': {
                      borderRadius: '12px', // Ensure the root has the radius
                      backgroundColor: '#F5F0FF',
                      '&:before, &:after': {
                        display: 'none', // Remove filled variant borders
                      }
                    },
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                      fontSize: { xs: '14px', md: '24px' },
                    },
                  }}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />

              </Grid>
            ))}
          </Grid>

          <Typography variant="body2" sx={{ lineHeight:'25px',fontSize:'12px'}}>
            Didn't get otp yet? <br /> <span className='verification-resend-text' >Resend OTP</span>
          </Typography>

          {/* <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Button className='continue-btn' variant="contained">
                  Continue
                </Button>
             </Box> */}

          <Button 
            variant="contained" 
            width={{sx:'50%',md:'100%'}}
            className='verification-continue-btn'
            sx={{ 
              color: '#fff', 
              maxWidth: 300, 
              mt: 2,
            }}
            onClick={()=>navigate('/setpin')}
          >
            Continue
          </Button>
        </Grid>

{/* ------------------- image container for mobile      --------------- */}
            <Box className='verification-mobile-image'>
               <img  src={finaureLogo} alt='logo' />
            </Box>

          </Box>
        {/* </Box> */}
      </Grid2>
    </Grid2>
    </form>



    // <form>
    // <Box 
    //   sx={{
    //     height: '100vh',
    //     backgroundColor: '#f5f5f5',
    //   }}
    // >
    //   <Box 
    //     display="flex"
    //     flexDirection={{ xs:'column-reverse', md: 'row' }}
    //     justifyContent= 'center'
  
    //     alignItems='center'
    //     sx={{ 
    //       // width: { xs: '100%', md: '100%', lg: '60%' },
    //       maxWidth: 1200,
    //       display: 'flex',
    //       boxShadow: 3,
    //       borderRadius: 2,
    //       overflow: 'hidden',
    //     }}
    //   >
    //     {/* Left Section */}
    //     <Grid 
    //       item 
    //       xs={12} 
    //       md={6} 
    //       sx={{ 
    //         color: '#fff',
    //         padding: '10px 30px',
    //         position: 'relative',
    //         width: { xs: '100%',md:'35%' },
    //       }}
    //       className='left-verification-container'
    //     >
    //       {/* "BUY WITH SIP." at the top left corner */}
    //       <Box sx={{ textAlign: 'left',width:'200px' }}>
    //         <Typography variant="h5" sx={{ fontWeight: 500,fontSize:'24px',fontFamily:'raleway' }}>
    //           BUY WITH SIP.
    //         </Typography>
    //       </Box>

    //       {/* "PLAN" in the middle with underline */}
    //       <div style={{marginLeft:'3.2rem'}} class="scrolling-words-container">
    //           <div class="scrolling-words-box">
    //             <ul>
    //               <li >Invest</li>
    //               <li>Buy</li>
    //               <li>Plan</li>
    //             </ul>
    //           </div>
    //         </div>

    //       {/* Background Pattern */}
    //       <Box 
    //       />
    //     </Grid>

    //     {/* Right Section */}
    //     <Grid 
    //       item 
    //       xs={12} 
    //       md={6} 
    //       sx={{ 
    //         padding:'50px 0px',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         backgroundColor: '#fff',
    //         textAlign: 'center',
    //         width:'496px',
    //         // marginTop:'10px'
    //       }}
    //     >
    //       <h5 className='verification-text'>
    //         Sent a verification code to verify your mobile number
    //       </h5>
    //       <h5 className='verification-mobile-star' sx={{ }}>
    //         Sent to +91 ********89
    //       </h5>

    //       {/* OTP Input Fields */}
    //       <Grid container spacing={2} justifyContent="center" mb={3}  >
    //         {[...Array(4)].map((_, index) => (
    //           <Grid item key={index}>
    //             <TextField
    //               variant="outlined"
    //             //   type='number'
    //               inputProps={{ maxLength: 1,inputMode:'numeric', pattern: '[0-9]*' }}
    //               sx={{
    //                 width: { xs: 52, md: 75 },
    //                 height: { xs: 43, md: 70 },
    //                 backgroundColor: '#F5F0FF',  // Light purple background
    //                 borderRadius: 3,
    //                 '& .MuiInputBase-input': {
    //                   textAlign: 'center',
    //                   fontSize:{xs:'14px',md:'24px'} ,
    //                 },
    //                 '& .MuiOutlinedInput-root': {
    //                     '& fieldset': {
    //                         border: 'none',  // This removes the border
    //                     },
    //                 }
    //               }}
    //               onKeyPress={(e) => {
    //                 // Prevent non-numeric characters
    //                 if (!/[0-9]/.test(e.key)) {
    //                   e.preventDefault();
    //                 }
    //               }}
                  
    //             />
    //           </Grid>
    //         ))}
    //       </Grid>

    //       <Typography variant="body2" sx={{ lineHeight:'25px'}}>
    //         Didn't get OTP yet? <br /> <span className='verification-resend-text' >Resend OTP</span>
    //       </Typography>

    //       <Button 
    //         variant="contained" 
    //         sx={{ 
    //           backgroundColor: '#7E00FF', 
    //           color: '#fff', 
    //           width: '100%', 
    //           maxWidth: 300, 
    //           mt: 2,
    //         }}
    //       >
    //         Continue
    //       </Button>
    //     </Grid>

    //     {/* mobile image */}
    //     <Box backgroundColor='white' className='mobile-image'>
    //         <img  src={finaureLogo} alt='logo' />
    //     </Box>
    //   </Box>
    // </Box>
    // </form>
  )
}

export default Verification