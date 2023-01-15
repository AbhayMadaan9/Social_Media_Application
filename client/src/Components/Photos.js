import React from 'react'
import axios from 'axios';
import styled from 'styled-components'


const Sec = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 55rem;
gap: 10px;

box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-webkit-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
`
const Img = styled.img`
width: 10rem;
height: 10rem;
object-fit: cover;
border-radius: 1rem;
`
export default function Photos() {
const [images, setimages] = React.useState({})

React.useEffect(() => {
    axios.get('https://pixabay.com/api/?key=32866951-93f171c40abb59b710feef9d7&q=yellow+flowers&image_type=photo')
    .then(response=> { setimages(response.data);})
}, [])

  return (
    <>
    <Sec>
        {images.hits.map(ig=>(
            <Img src={ig.userImageURL}/>
          //  console.log(ig.userImageURL)
        ))}
       
    </Sec>
    </>
  )
}
