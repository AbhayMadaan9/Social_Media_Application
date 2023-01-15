import React from 'react'
import Stories from '../Components/Stories'
import Posts from '../Components/Posts'
import styled from 'styled-components'

const Sec = styled.div`
background-color: ${props=>props.theme.bgSoft};
width: 60rem;
z-index: 1;

`
export default function Home() {
  return (
    <Sec>
    <Stories/>
    <Posts/>
    </Sec>
  )
}
