import React,{useContext} from 'react'
import styled from 'styled-components'
import { AuthContext } from '../Context/authContext';
const Sec = styled.div`
width: 18rem;
background-color: ${props=>props.theme.bg};
padding: 5px;
color: ${props=>props.theme.textColor};;
`
const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 12px;
margin: 0;
`
const Item = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 7px;
margin: 5px;
`
const Img = styled.img`
height: 25px;
border-radius: 30px;
`
const Hr = styled.hr`
height: .001px;
background-color: #969696;
margin: 0;
width: 14rem;
`
export default function Leftbar() {
  const {currentUser} = useContext(AuthContext)
  return (
    <>
    <Sec>
      <Menu>
      <Item>
      <Img src={currentUser.profilePic}/>
          <span>{currentUser.name}</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1204/1204086.png?w=740&t=st=1673206078~exp=1673206678~hmac=2abd33d7af25b3d9958841d332ddd7058b45aafb72e207e478594c0fb9e0df53'/>
          <span>Groups</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255220.png?w=740&t=st=1673206206~exp=1673206806~hmac=dddf53a524a0383440b7ad2e03965c2d0566c5caa812bc1611594a48986de092'/>
          <span>MarketPlace</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1255/1255405.png?w=740&t=st=1673206285~exp=1673206885~hmac=f2ed089cde006bc2065c2f46a00ac592fc07cda0330acd1f66279cb3476f9fa9'/>
          <span>Memories</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1257/1257471.png?w=740&t=st=1673206419~exp=1673207019~hmac=dd1bb50da6dbeb8039759e15aef2b1eac4f1c73cf3bb019ed1e2521662ba9ac7'/>
          <span>Watch</span>
        </Item>
        <Hr/>
        &nbsp;&nbsp;Your Shorcuts
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1250/1250229.png?w=740&t=st=1673235888~exp=1673236488~hmac=f2a4b5424c1a0759fc30eab5152c21c95a8bf9e203a9eb15b700b98807a3dbd8'/>
          <span>Events</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1257/1257430.png?w=740&t=st=1673235908~exp=1673236508~hmac=81ef6a83452c461d05d2ed2710f9b9e50ad37f9c5a19a310d12b0285f8ba2cb2'/>
          <span>Gaming</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/856/856330.png?w=740&t=st=1673235927~exp=1673236527~hmac=6cef6a504b7e798f2c4b95f49482f170db8c781bea355479cb3efb179f808ce5'/>
          <span>Gallary</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1256/1256659.png?w=740&t=st=1673236023~exp=1673236623~hmac=3898506a422f690db09c2879448d90d74be33d051cfef54f03b97eca51615f15'/>
          <span>Videos</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1256/1256649.png?w=740&t=st=1673236046~exp=1673236646~hmac=bd49abe868ee4afaded36085f441295bde32b21c50203bf488fafa22cb64c06'/>
          <span>Messages</span>
        </Item>
        <Hr/>
        &nbsp;&nbsp;Others
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1250/1250229.png?w=740&t=st=1673235888~exp=1673236488~hmac=f2a4b5424c1a0759fc30eab5152c21c95a8bf9e203a9eb15b700b98807a3dbd8'/>
          <span>Events</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1257/1257430.png?w=740&t=st=1673235908~exp=1673236508~hmac=81ef6a83452c461d05d2ed2710f9b9e50ad37f9c5a19a310d12b0285f8ba2cb2'/>
          <span>Gaming</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/856/856330.png?w=740&t=st=1673235927~exp=1673236527~hmac=6cef6a504b7e798f2c4b95f49482f170db8c781bea355479cb3efb179f808ce5'/>
          <span>Gallary</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1256/1256659.png?w=740&t=st=1673236023~exp=1673236623~hmac=3898506a422f690db09c2879448d90d74be33d051cfef54f03b97eca51615f15'/>
          <span>Videos</span>
        </Item>
        <Item>
          <Img src='https://cdn-icons-png.flaticon.com/512/1256/1256649.png?w=740&t=st=1673236046~exp=1673236646~hmac=bd49abe868ee4afaded36085f441295bde32b21c50203bf488fafa22cb64c06'/>
          <span>Messages</span>
        </Item>
      </Menu>
    </Sec>
    </>
  )
}
