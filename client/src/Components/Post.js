import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'
import { AuthContext } from "../Context/authContext";
import Avatar from '@mui/material/Avatar';
import { Comment } from './Comment';
import axios from 'axios';
import { Alert } from '@mui/material';



const Sec = styled.div`
 width: 40rem;
 height: auto;
 padding: 2rem;
 border-radius: 1rem;
box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-webkit-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 0px 35px -6px rgba(0,0,0,0.49);
 display: flex;
flex-direction: column;
align-items: center;
margin-top: 5rem;
flex-wrap: nowrap;
gap: 1rem;
background-color: ${props => props.theme.bg};
color: ${props => props.theme.textColorSoft}; 
`
const Person = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
/* gap: 30rem; */
width: 100%;

`
const About = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 1rem;
`
const Icon = styled.div`
cursor: pointer;
`
// const Avatar = styled.img`
// width: 3rem;
// border-radius: 100%;
// cursor: pointer;
// height: 2rem;
// object-fit: cover;
// `
const P = styled.p`
font-weight: bold;
`
const PostDesc = styled.p`
 align-self: flex-start;
 font-weight: bold;
 `
const Img = styled.img`
width: 30rem;
height: auto;
object-fit: cover;

`
const Reviews = styled.div`
 display: flex;
flex-direction: row;
align-items: center;
align-self: flex-start;
gap: 3rem;
`
const Comments = styled.div`
 display: ${props => props.mode ? "flex" : "none"};
 flex-direction: column;
 align-items: center;
 justify-content: center;
 `
const AddComment = styled.div`
 display: flex;
flex-direction: row;
align-items: center;
align-self: flex-start;
justify-content: flex-start;
gap: 1rem;
 `
const Input = styled.input`
outline: none;
width: 30rem;
height: 2rem;
font-size: large;
`




export default function Post({ post }) {
    const [postdel, setpostdel] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [commentOpen, setCommentOpen] = React.useState(false);
    const [Like, setLike] = React.useState(false);
    const [likesCount, setlikesCount] = React.useState([])
    const [likes, setlikes] = React.useState({
        no: 0,
        postid: 0
    })
    const { currentUser } = React.useContext(AuthContext);
    const [cmts, setcmts] = React.useState([])
    const [addCmts, setaddCmts] = React.useState({
        desc: "",
        postId: post.id
    })
    
    React.useEffect(() => {
        const res = axios.get('http://localhost:5500/users/comments?postID='+ post.id,{withCredentials: true})
            setcmts(res.data);
            console.log(res.data);
       }, [])
  
    const handle_delete = (e) => {
        const details = { userpostId: post.id, userId: post.user_id }
        e.preventDefault();
        axios.delete("http://localhost:5500/user/deletePost?postid="+post.id+"&userId="+ post.user_id, { withCredentials: true })
        setpostdel(true);
    }
    const handle_Comment = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5500/users/addComment", addCmts, {withCredentials: true})
        alert("please refresh the page")
    }
    const handle_Comment_change = (e)=>{
        setaddCmts((prev)=>({
            ...prev, [e.target.name]: e.target.value
         } ))
    }
    const handleLikes = ()=>{
        // const count = likes.no;
        //  count = Like?count+1:count-1;
        // setlikes({
        //     no: count,
        //     postid: post.id
        // })

        const res = axios.get("http://localhost:5500/userss/likes?postID="+ post.id,{withCredentials: true});
        setlikesCount(res.data);
        console.log(likesCount);
        setLike(!Like) 
    }
    return (
        <>
            {postdel && alert("Please refresh the page ")}
            <Sec>
                <Person>
                    <About>

                        <Avatar src={post.profilePic} onClick={handleOpen} sx={{ width: "3rem", height: "3rem" }} />
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Img src={post.profilePic} style={{ width: "30rem", objectFit: "cover", height: "30rem" }} />
                        </Modal>
                        <P>{post.name}</P>
                    </About>

                    <Icon onClick={handle_delete}>
                        <p>Delete Post</p>
                    </Icon>
                </Person>
                <PostDesc>
                    {post.desc}
                </PostDesc>
                <Img src={post.img} />
                <Reviews>
                    <Icon onClick={handleLikes}>
                        {Like ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorderIcon />}
                    </Icon>
                    {/* {likesCount.length} */}
                    <Icon onClick={() => {
            setCommentOpen(!commentOpen) 
                         }}>
                        <InsertCommentIcon />
                    </Icon>
                    <Icon>
                        <ShareIcon />
                    </Icon>
                </Reviews> 
                <Comments mode={commentOpen} >
                    <form >
                        <AddComment>
                            <Avatar src={currentUser.profilePic} sx={{ width: "3rem", height: "3rem" }} />
                            <Input type='text' onChange={handle_Comment_change} name='desc'/>
                            <Button variant="contained" onClick={handle_Comment}>Send</Button>
                        </AddComment>
                    </form>
                    {/* {cmts.map(cmts => (
                        <Comment details={cmts} key={cmts.id} />
                    ))} */}
                </Comments>


            </Sec>
        </>

    )
}
