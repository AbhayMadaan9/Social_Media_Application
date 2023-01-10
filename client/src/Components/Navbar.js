import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styled from 'styled-components'
import { useContext } from 'react';
import { DarkModeContext } from '../Context/darkModeContext'
import WbSunnyIcon from '@mui/icons-material/WbSunny';


const Sec = styled.div`
height: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: ${props=>props.theme.bg};
position: sticky;
top: 0;
border: ${props=>props.theme.border};
color: ${props=>props.theme.textColor};;
`
// const Logo = styled.img`
// object-fit: cover;
// width: 80px;
// height: fit-content;
// `
const Left = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
gap: 15px;
`
const Right = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
gap: 15px;
margin-inline-end: 5px;
`
const Input = styled.input`
border: .1px solid black;
border-radius: 5px;
height: 20px;
font-size: medium;
outline: 0;
width: 200px;
`
const Title = styled.h3`
font-weight: bold;
font-family: 'Archivo Black', sans-serif;
color: ${props=>props.theme.logo};;
`
export default function Navbar() {
  const {darkMode, toggle} = useContext(DarkModeContext);
  console.log(useContext(DarkModeContext))
 // const cur_state = JSON.parse(localStorage.getItem("darkMode"))
  return (
    <>
     <Sec>
      <Left>
        {/* <Logo src='./images/logo.png'/> */}
        <Title>METAVERSE</Title>
        <HomeIcon fontSize='large'/>
       
        <div onClick={toggle} style={{cursor: 'pointer'}}>
        {darkMode? <DarkModeIcon fontSize='large'/>:<WbSunnyIcon fontSize='large'/>}
        </div>
        <AppsIcon fontSize='large'/>
        <Input placeholder='Search..' type="text" />
      </Left>
      <Right>
        <NotificationsIcon fontSize='large'/>
        <EmailIcon fontSize='large'/>
        <AccountCircleIcon fontSize='large'/>
        <span>Abhay</span>
      </Right>
      </Sec>   
    </>
  )
}
