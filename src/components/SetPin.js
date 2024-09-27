import React, { useEffect, useRef, useState } from 'react'

import { Box, Button, Grid, Grid2, TextField } from '@mui/material';
import finaureLogo from '../assets/socialIcons/finaureLogo.svg'
import { useNavigate } from 'react-router-dom';


const SetPin = () => {
  const animationTexts = ['Plan','Invest','Buy']
  const [currentIndex,setCurrentIndex] =useState(0)

  const [pin,setPin] =useState(['','','',''])
  const [confirmPin,SetConfirmPin] = useState()
  const inputRefs = useRef([]);
  const navigate = useNavigate()
  console.log(pin,'pin')

  useEffect(()=>{
    const intervalId =setInterval(()=>{
      setCurrentIndex((prevIndex)=>(prevIndex +1)%animationTexts.length)
    },2500)
    return()=>clearInterval(intervalId)
  },[animationTexts.length])

  const handleBack=()=>{
    console.log('first')
  }

  const handlePin=(e,index)=>{
    const {value} = e.target
    if (/^[0-9]?$/.test(value)) {
      const newPin = [...pin]
      newPin[index] =value 
      setPin(newPin)
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();  // Focus next input
      }
   }

  }
  console.log(inputRefs.current,'pin')

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
            flexDirection={{ xs:'column-reverse', md: 'row' }}
            bgcolor="white"
          >

{/* Left Section with Background */}
            <Box
              p={3}
              width={{ xs: '100%', md: '30%' }}
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
                SIP FOR EVERYTHING.
              </h5>

              {/* Animation for Invest/Buy */}
              <div className='animation-container-pin'>
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
            width:'418px',
            // marginRight:'20px'
          }}
        >
          <h5 className='pin-verification-text'>
          Set finaure PIN
          </h5>
          <h5 className='pin-verification' sx={{ }}>
          PIN helps to keep your Account safe
          </h5>

          {/* OTP Input Fields */}
          <Grid container spacing={1.6} justifyContent="center" mb={2.4}  >
            {[...Array(4)].map((_, index) => (
              <Grid item key={index}>
                <TextField
                  variant="outlined"  
                  inputProps={{ maxLength: 1, inputMode: 'numeric', pattern: '[0-9]*' }}
                  inputRef={(el) => (inputRefs.current[index] = el)}
                  value={pin[index]}
                  onChange={(e)=>handlePin(e,index)}
                  autoFocus={index ===0}
                  sx={{
                    width: { xs: 52, md: 75 },
                    height: { xs: 43, md: 65 },
                    // backgroundColor: '#7A7CFF', 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,  // Ensure no rounded corners
                      padding:0,
                      '& fieldset': {
                        border: 'none',  // Remove the full border from the fieldset
                        borderBottom: '3px solid #5D20D2',  // Apply only bottom border
                      },
                      '&:hover fieldset': {
                        borderBottom: '3px solid #5D20D2',  // Ensure bottom border stays the same on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderBottom: '3px solid #5D20D2',  // Keep bottom border on focus
                      },
                    },
                    '& .MuiInputBase-input': {
                      textAlign: 'center',  // Center the input text
                      fontSize: { xs: '14px', md: '24px' },
                      paddingBottom:'4px',
                    },
                  }}  
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' && index > 0 && !pin[index]) {
                      inputRefs.current[index - 1].focus();  // Move focus to the previous input on backspace
                    }
                  }}
                />

              </Grid>
            ))}
          </Grid>

          {/* <Typography variant="body2" sx={{ lineHeight:'25px'}}>
            Didn't get OTP yet? <br /> <span className='verification-resend-text' >Resend OTP</span>
          </Typography> */}

          {/* <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Button className='continue-btn' variant="contained">
                  Continue
                </Button>
             </Box> */}

          <Button 
            variant="contained" 
            width={{sx:'50%',md:'100%'}}
            className='verification-continue-btn'
            disabled={pin.length < 4}
            onClick={()=>navigate('/confirmpin')}
            sx={{ 
              color: '#fff', 
              maxWidth: 300, 
              mt: 2,
            }}
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
  )
}

export default SetPin