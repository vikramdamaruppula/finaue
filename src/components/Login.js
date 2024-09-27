import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Grid2, Box, Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import google from '../assets/socialIcons/google.svg'
import facebook from '../assets/socialIcons/facebook.svg'
import finaureLogo from '../assets/socialIcons/finaureLogo.svg'
import './login.scss'; 
// for animations and custom styles

const Login = () => {
    const [countryCode, setCountryCode] = useState('+91'); // Default country code
    const[signUp,setSignup] = useState(false)
    const animationTexts = ['Plan','Invest','Buy']
    const [currentIndex,setCurrentIndex] =useState(0)
    const navigate = useNavigate()

    const handleCountryCodeChange = (event) => {
      setCountryCode(event.target.value);
    };

    useEffect(()=>{
      const intervalId =setInterval(()=>{
        setCurrentIndex((prevIndex)=>(prevIndex +1)%animationTexts.length)
      },2500)
      return()=>clearInterval(intervalId)
    },[animationTexts.length])

    const handleSignUp=()=>{
        setSignup(!signUp)
    }

    const handleVerify=()=>{
      navigate('/verify')
    }

  return (
    <form >
    <Grid2 container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Card container */}
      <Grid2 item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        {/* <Box > */}

{/*main  Card structure */}
          <Box
            // width={{ xs: '95%' }}
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
              width={{ xs: '100%', md: '34%' }}
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
              <div className='animation-container'>
                <div className='line'></div>
                <div className='animation-text' > {animationTexts[currentIndex]} </div>
              </div>
            </Box>

{/* Right Section with Form */}

            <Box className='right-main-container'  display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <h5 className='welcome-text'>   WELCOME </h5>
              <Typography fontSize={{xs:'10px',md:'12px'}} variant="subtitle1" sx={{opacity:'0.6'}}> {signUp ? 'signup' :'Login'}  to get started</Typography>

              <Box width="100%" mt={2} >
              <Box 
                display="flex" 
                alignItems="center" 
                sx={{
                    backgroundColor: '#F4EEFF', 
                    borderRadius: '10px', 
                    padding: '0px 0px',
                }}
                >
                <Select
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    disableUnderline
                    variant="standard"
                    className='country-code-select'
                    sx={{
                    backgroundColor: '#D7C6FF', 
                    borderRadius: '16px',
                    padding: '8px 4px',
                    color: '#000',
                    fontWeight:'bold',
                    }}
                    MenuProps={{
                    PaperProps: {
                        sx: {
                        bgcolor: '#D7C6FF',
                        color: '#000',
                        },
                    },
                    }}
                >
                    <MenuItem value="+91">+91</MenuItem>
                    <MenuItem value="+1">+1</MenuItem>
                    <MenuItem value="+44">+44</MenuItem>
                </Select>

                {/* Mobile Number Input */}
                <TextField
                    placeholder="Enter Mobile Number"
                    variant="standard"
                    fullWidth
                    // borderRadius={5}
                    className='mobile-input'
                    // height={{xs:'100px'}}
                    InputProps={{
                    disableUnderline: true,
                    sx: { color: '#9C9C9C',minHeight:'42px',paddingLeft:'14px' },
                    }}
                />
              </Box>
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Button onClick={handleVerify} className='continue-btn' variant="contained">
                  Continue
                </Button>
             </Box>
              </Box>
            
              <Typography mt={1} >
               <span className='account-name' >{signUp ? 'Already Have An Account? ' :  `Don't Have An Account? `} </span> 
               <span onClick={handleSignUp} className='login-signup-text'  style={{ color: '#7E00FF', cursor:'pointer' }}> {signUp ?'Login' :'Sign up'} </span>
              </Typography>
            
              <Box display="flex" alignItems="center" mt={1}>
                <hr className='horizontal-line'  />
                    <Typography  className='or-text'>or</Typography>
                <hr className='horizontal-line' />
            </Box>
              {/* Social Login Icons */}
            <Box display="flex" justifyContent="center" mt={3} gap={3}>
                <button className='custom-button'> <img src={google} alt="Google" style={{ width: 24, height: 24 }} />  </button>
                <button className='custom-button'> <img src={facebook} alt='facebook' style={{ width: 24, height: 24 }} /> </button>
                <button className='custom-button'><AppleIcon /></button>
              </Box>
            </Box>

{/* ------------------- image container for mobile      --------------- */}
            <Box className='verification-mobile-image'>
               <img  src={finaureLogo} alt='logo' />
            </Box>

          </Box>
        {/* </Box> */}
      </Grid2>
    </Grid2>
    </form>
  );
}

export default Login;
