import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 20px;
color: ${props=>props.theme.textColorSoft};
background-color: ${props=>props.theme.bgSoft};
margin-top: 10px;

`
const Sec = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
border: 1px solid black;
min-width: 25rem;
padding: 10px;
background-color: ${props=>props.theme.bg};
//color: ${props=>props.theme.textColorSoft};
box-shadow: -1px 7px 11px 0px rgba(0,0,0,0.71);
-webkit-box-shadow: -1px 7px 11px 0px rgba(0,0,0,0.71);
-moz-box-shadow: -1px 7px 11px 0px rgba(0,0,0,0.71);
`
const Item = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 3px;
width: 100%;
`
const About = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: .5rem;
`
const Img = styled.img`
width: 1.5rem;
cursor: pointer;
`
const Buttons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: .5rem;
`
const Button = styled.button`
background-color: ${props => props.color};
color: white;
border: none;
border-radius: 5px;
padding: 10px;
height: auto;
cursor: pointer;
`
const Info = styled.p``
export default function Rightbar() {
  return (
    <>
    <Main>
    <Sec>
      <span>Suggestions for You</span>
      <Item>
       <About>
         <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
        <p>John cena</p>
       </About>
        <Buttons>
        <Button color='#0031e7'>Follow</Button>
        <Button color='#f70000'>Dismiss</Button>
        </Buttons>
      </Item>
      <Item>
       <About>
         <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
        <p>John cena</p>
       </About>
        <Buttons>
        <Button color='#0031e7'>Follow</Button>
        <Button color='#f70000'>Dismiss</Button>
        </Buttons>
      </Item>
    </Sec>
    <Sec>
      <span>Latest Activites</span>
      <Item>
      <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
      <p>John Cena</p>
      <span>changed thier cover photo</span>
      <span>1 min ago</span>
      </Item>
      <Item>
      <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
      <p>John Cena</p>
      <span>changed thier cover photo</span>
      <span>1 min ago</span>
      </Item>
      <Item>
      <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
      <p>John Cena</p>
      <span>changed thier cover photo</span>
      <span>1 min ago</span>
      </Item>
      <Item>
      <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
      <p>John Cena</p>
      <span>changed thier cover photo</span>
      <span>1 min ago</span>
      </Item>
    </Sec>
    <Sec>
      <span>Online Friends</span>
      <Item>
       <About>
         <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
        <Info>Roman Rings</Info>
       </About>
      </Item>
      <Item>
       <About>
         <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
        <Info>Roman Rings</Info>
       </About>
      </Item>
      <Item>
       <About>
         <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
        <Info>Roman Rings</Info>
       </About>
      </Item>
      <Item>
       <About>
         <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
        <Info>Roman Rings</Info>
       </About>
      </Item>
      <Item>
       <About>
         <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
        <Info>Roman Rings</Info>
       </About>
      </Item>
      <Item>
       <About>
         <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
        <Info>Roman Rings</Info>
       </About>
      </Item>
      <Item>
       <About>
         <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255974.png?w=740&t=st=1673260275~exp=1673260875~hmac=1cab0375c3f3dd3fbf7844d08b1a967d0c84b52b42f5660a03ef85b4f9fc4ead'/>
        <Info>Roman Rings</Info>
       </About>
      </Item>
    </Sec>
    </Main>
    </>
  )
}
