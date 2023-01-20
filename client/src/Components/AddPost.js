import React from 'react'
import styled from 'styled-components'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button'
import axios from 'axios';


const Main = styled.div`
padding: 1rem;
display: flex;
border-radius: 1rem;
box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-webkit-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
background-color: ${props=>props.theme.bg};
color: ${props=>props.theme.textColorSoft};
width: 50rem;
gap: 20px;
`
const Sec = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
const Sec1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
width: 100%;
`
const Input = styled.input`
width: 40rem;
outline: none;
background: none;
border: none;
color: ${props=>props.theme.textColorSoft};
font-size: large;
font-weight: 200;
height: fit-content;
`
export default function AddPost() {

    const [State, setState] = React.useState({
        file: null,
        src: null
    })

    const handleFileChange = (event)=> {
        const file = event.target.files[0];
        setState({
            file: file,
            src: window.URL.createObjectURL(file)
        });
    }

    // componentWillUnmount() {
    //     window.URL.revokeObjectURL(State.src);
    // }

    const [Inputs, setInputs] = React.useState("")
    const [Res, setRes] = React.useState("")
    const handle_change = (e)=>{
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handle_post = (e)=>{
        e.preventDefault();
        const details = {
            desc: Inputs.desc,
            img: State.src
        }
       const res = axios.post("http://localhost:5500/user/addpost", details,{withCredentials: true})
       setRes(res)
       console.log(Res);
    }
  return (
    <>
    
    <form>
        <Main>
    <Sec>
        <Input type="text" placeholder='Leave your mark on the Metaverse' onChange={handle_change} name="desc" />
        <Button variant="contained" type='submit' onClick={handle_post}>Post</Button>
    </Sec>
    <Sec1>
    {State.src && <img src={State.src} alt="Selected Image"  style={{objectFit:"cover", width: "20rem", height:"20rem"}}/>}
    <input type="file" onChange={handleFileChange} />
    {Res && alert("Post added successfully please refresh the page")}
    </Sec1>
    </Main>
    </form>
    
    </>
  )
}
