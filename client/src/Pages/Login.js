import React,{useContext} from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import {AuthContext} from '../Context/authContext'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

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
}
`
export const Login = () => {
  const [Successs, setSuccesss] = React.useState(false)
  const [Errorr, setErrorr] = React.useState("")
  const [Inputs, setInputs] = React.useState({
    username: "",
    password: ""
  })
  const {login} = useContext(AuthContext)
  const handle_change = (e)=>{
    setInputs(prev=>({
      ...prev, [e.target.name]: e.target.value
    }))
  }
  const handle_login = async(e)=>{
    e.preventDefault();
    try {
      console.log(Inputs);
      await login(Inputs);
      setSuccesss(true)
    } catch (error) {
      setErrorr(error.message)
    }
 
  }
  return (
    <Sec>
      <Contents>
        <Content1>
          <Form>
            <Title>Sign Into Your Account</Title>
            <TextField label="Username" name='username' type='text' onChange={handle_change}/>
            <TextField label="Password" name='password' type='password' onChange={handle_change}/>
            <span>Forget Password?</span>
           <Button onClick={handle_login} type='submit'>Sign In</Button>
           {Successs && <Navigate to='/'/>}
           {Errorr && <Navigate to='/err'/>}
          </Form>
        </Content1>
        <Content2>

          <Illustrate src='./images/call.png' />
        </Content2>

      </Contents>
    </Sec>

  )
}
