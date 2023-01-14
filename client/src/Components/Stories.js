import React ,{useContext, useState} from 'react'
import styled from 'styled-components'
import { AuthContext } from '../Context/authContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const Sec = styled.div`
height: auto;
`;
const Story = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
overflow: scroll;
::-webkit-scrollbar {
  display: none;
}
margin-top: 2rem;
width: auto;
margin-inline: auto;
padding: 1rem;
`
const Card = styled.div`
height: 15rem;
width: 10rem;
margin-inline: 2rem;
border-radius: 1rem;
box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-webkit-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
position: relative;
cursor: pointer;
`;
const Img = styled.img`
width: 10rem;
height: 15rem;
object-fit: cover;
border-radius: .7rem;
`
const P = styled.p`
position: absolute;
z-index: 1;
bottom: 0;
color: black;
margin-inline: 1rem;
`
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Stories()  {
  const {currentUser} = useContext(AuthContext)
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
 
  const stories = [
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Abhay madaan",
      img: "https://media.licdn.com/dms/image/D4D03AQG8Y6CN1LVyVQ/profile-displayphoto-shrink_800_800/0/1671369794605?e=2147483647&v=beta&t=GPqqDsANIn2oIf_gGHKBZ5h-6UzT6l7zVWcOdYEn5L8",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    
    
  ];
  return (
    <>
    <Sec>
      <Story>
    {stories.map((stry)=>(
        <Card onClick={handleOpen}>
          <Img src={stry.img}/>
          <P>{stry.name}</P>
        </Card>
      ))}
       <Modal
        open={open}
        onClose={handleClose}
        >
                 <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>

          </Modal>
      </Story>
    </Sec>
    </>
  )
}
