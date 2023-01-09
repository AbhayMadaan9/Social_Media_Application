import React from 'react'
import { useDispatch } from 'react-redux'
import { current_theme } from '../theme_toggle';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styled from 'styled-components'

const Sec = styled.div`
height: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const Logo = styled.img`
object-fit: cover;
width: 80px;
height: fit-content;
`
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
`
export default function Navbar() {
  const dispatch = useDispatch()
  const handle_func = ()=>{
    dispatch(current_theme);
  }
  return (
    <>
     <Sec>
      <Left>
        {/* <Logo src='./images/logo.png'/> */}
        <Title>METAVERSE</Title>
        <HomeIcon fontSize='large'/>
        <div onClick={handle_func} style={{cursor: 'pointer'}}>
        <DarkModeIcon fontSize='large'/>
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
      <hr/>
    </>
  )
}
