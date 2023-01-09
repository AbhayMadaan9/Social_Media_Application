import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'


const Sec = styled.div`
margin: 0;
padding: 0;
background-image: linear-gradient(to right, #fff 0%,#fff 65%, #94d4e0 65%, #94d4e0 100%);
height: 100vh;
`
const Contents = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`
const Content1 = styled.div`
margin-top: 120px;
width: 300px;
height: 300px;
`
const Content2 = styled.div`
margin-top: 120px;
`
const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1.5rem;
`
const Illustrate = styled.img`
object-fit: cover;
width: 350px;
//transform: scaleX(-1);
`
const Title = styled.h1`
color: #94d4e0;
`
const Button = styled.button`
background-color: #94d4e0;
border-radius: 5px;
border: none;
height: 3rem;
color: white;
font-size: large;
&:hover{
  cursor: pointer;
  box-shadow: #b9b9b9 5px 5px 5px 5px;
}
`
export const Register = () => {
  return (
    <Sec>
      <Contents>
        <Content1>
          <Form>
            <Title>Sign Into Your Account</Title>
            <TextField label="Username"/>
            <TextField label="Email"/>
            <TextField label="Password"/>
            <TextField label="Name"/>
           <Button>Register</Button>
          </Form>
        </Content1>
        <Content2>

          <Illustrate src='./images/call.png' />
        </Content2>

      </Contents>
    </Sec>

  )
}
