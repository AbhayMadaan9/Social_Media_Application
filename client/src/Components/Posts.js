import Post from "./Post";
import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from "axios"; 
import { useState, useEffect } from "react";
import AddPost from "./AddPost";

const Sec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
`
const Posts = () => {
  const [data, setdata] = useState([])
    // const { isLoading, error, data } = useQuery(['posts'] , () =>
    //    fetch('http://localhost:5500/user/posts').then((res) => {console.log(res.json()); return (res.json()) }
    //   )
    // )
    useEffect(() => {
     const res = axios.get("http://localhost:5500/user/posts", {withCredentials:true}).then((res)=>{
      setdata(res.data)
     })
    }, [])
  
  //  if (error) return 'An error has occurred: ' + error.message
  
  return (
  <Sec>
    <AddPost/>
    { data.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </Sec>
  )};

export default Posts;