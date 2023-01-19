import Post from "./Post";
import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from "axios"; 


const Sec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
`
const Posts = () => {

    const { isLoading, error, data } = useQuery(['posts'] , () =>
       fetch('http://localhost:5500/posts').then((res) => {return  res.json()}
      )
    )

    if (isLoading) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
  
  return <Sec>
    {data.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </Sec>;
};

export default Posts;