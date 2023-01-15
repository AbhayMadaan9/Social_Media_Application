import React from 'react'
import styled from 'styled-components'
import { AuthContext } from '../Context/authContext'
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Button from '@mui/material/Button'
import { DarkModeContext } from '../Context/darkModeContext';
import Posts from './Posts'
import About from './About'
import Followers from './Followers'
import Photos from './Photos'



const Sec = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
background-color: ${props=>props.theme.bgSoft};
color: ${props=>props.theme.textColor};
`
const Img = styled.img`
width: 60rem;
height: 20rem;
object-fit: cover;
`
const Abouta = styled.div`
margin-top: 5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Desc = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 1rem;
box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-webkit-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
width: 55rem;
height: auto;
background-color: ${props=>props.theme.bg};
`
const SocialMedias = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;
`
const Icon = styled.div`
cursor: pointer;
padding: 5px;

:hover{
    background-color: ${props=>props.theme.bgSoft};
    opacity: 1;
    color: ${props=>props.theme.textColor};
}
`
const Nav = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 20px;
`
const AddOns = styled.div`

`

export default function Profile() {
    const {currentUser} = React.useContext(AuthContext)
    const {darkMode} = React.useContext(DarkModeContext)
    const [Info, setInfo] = React.useState({active: true, mode: "posts"})
    const {active, mode} = Info;
  return (
    <>
    <Sec>
        <Img src="https://media.audleytravel.com/-/media/images/home/indian-subcontinent/regional-guides/india-to-nepal-where-to-go-in-the-himalaya/istock_540840250_nepal_himalaya_mt_everest_letterbox.jpg?q=79&w=1920&h=640"/>
        <Avatar src={currentUser.profilePic} sx={{position: "absolute",marginTop: "15rem", width:"10rem", height: "10rem", zIndex: 2}}/>
        <Desc>
        <Abouta>
        <h3>{currentUser.name}</h3>
        <p style={{marginTop:"0"}}>100K followers</p>
        {currentUser?<Button variant="contained" sx={{display:"none"}}>Follow</Button>:<Button variant="contained" >Follow</Button>}
        </Abouta>
        <SocialMedias>
            <Icon>
            <FacebookIcon fontSize='large'/>
            </Icon>
            <Icon><InstagramIcon fontSize='large'/></Icon>
            <Icon> <TelegramIcon fontSize='large'/></Icon>
            <Icon><TwitterIcon fontSize='large'/></Icon>
            <Icon><PinterestIcon fontSize='large'/></Icon>
            <Icon><LinkedInIcon fontSize='large'/></Icon>
        </SocialMedias>
        <hr color={darkMode?"black":"white"} width="100%" height="10px"/>
        <Nav>
            <Icon onClick={()=>{setInfo({active: !active ,mode: "posts"})}}>Post</Icon>
            <Icon onClick={()=>{setInfo({active: !active ,mode: "about"})}}>About</Icon>
            <Icon onClick={()=>{setInfo({active: !active ,mode: "mentions"})}}>Mentions</Icon>
            <Icon onClick={()=>{setInfo({active: !active ,mode: "reviews"})}}>Reviews</Icon>
            <Icon onClick={()=>{setInfo({active: !active ,mode: "followers"})}}>Followers</Icon>
            <Icon onClick={()=>{setInfo({active: !active ,mode: "photo"})}}>Photo</Icon> 
        </Nav>
        </Desc>
        <AddOns>
            {active=== true && mode==="posts" && <Posts/>}
            {active=== true && mode==="about" && <About/>}
            {active=== true && mode==="followers " && <Followers/>}
            {active=== true && mode==="photo" && <Photos/>}
        </AddOns>
    </Sec>
    </>
  )
}
