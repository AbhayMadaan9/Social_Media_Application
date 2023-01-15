import React,{useContext} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styled from 'styled-components'
import { DarkModeContext } from '../Context/darkModeContext'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { AuthContext } from '../Context/authContext';
import { small_devices } from '../small_devices';


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
color: ${props=>props.theme.textColor};
z-index: 2;
${small_devices({ "justify-content": "center" })}
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
${small_devices({ "display": "none" })}
`
const Right = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
gap: 15px;
margin-inline-end: 5px;
${small_devices({ "display": "none" })}
`
const Input = styled.input`
border: .1px solid black;
border-radius: 5px;
height: 20px;
font-size: medium;
outline: 0;
width: 200px;
${small_devices({ "display": "none" })}
`
const Title = styled.h3`
font-weight: bold;
font-family: 'Archivo Black', sans-serif;
color: ${props=>props.theme.logo};
`
const Titlee = styled.h3`
font-weight: bold;
font-family: 'Archivo Black', sans-serif;
color: ${props=>props.theme.logo};
display: none;
${small_devices({ "display": "block" })}
`
const Img = styled.img`
height: 25px;
border-radius: 30px;
`


export default function Navbar() {
  const {darkMode, toggle} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext)
  return (
    <>
     <Sec>
     <Titlee>METAVERSE</Titlee>
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
        <Img src={currentUser.profilePic}/>
        <span>{currentUser.name}</span>
      </Right>
      </Sec>   
    </>
  )
}
