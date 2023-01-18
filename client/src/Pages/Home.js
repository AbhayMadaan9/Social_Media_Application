import React from 'react'
import Stories from '../Components/Stories'
import Posts from '../Components/Posts'
import styled from 'styled-components'
import { medium_devices } from '../medium_devices'


const Sec = styled.div`
background-color: ${props=>props.theme.bgSoft};
width: 60rem;
z-index: 1;
${medium_devices({ "width": "100%" })}
`
export default function Home() {
  return (
    <Sec>
    <Stories/>
    <Posts/>
    </Sec>
  )
}
