import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Sec = styled.div`
 display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 2rem;
gap: 1.5rem;
border-radius: 1rem;
box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-webkit-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
padding: .5rem;
`
const Icon = styled.div``
const Desc = styled.div`
 display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
align-items: flex-start;
`
export const Comment = ({details}) => {
  return (
    <>
    <Sec>
        <Icon>
        <Avatar src={details.profilePicture}/>
        </Icon>
        <Desc>
            <h4>{details.name}</h4>
            <p>{details.desc}</p>
        </Desc>
    </Sec>
    </>
  )
}
