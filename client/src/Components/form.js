import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './form.css';
import icon from './image/icon.png'
import camera from './image/camera.png'
import { Link } from 'react-router-dom';

export default function Form(){
    const Navigate = useNavigate()  
    const [user,setUser] = useState({  
        img:"",author:"",location:"" ,description:""  
    })

    let name,value
    const PostInputs = (e)=>{   
        console.log(e)
        name = e.target.name
        value = e.target.value
        setUser({...user,[name]:value})
    }
    console.log(user)

    const PostData = async(e)=>{
        e.preventDefault()
        const res = await fetch("http://localhost:5000/postdetail",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                mode:"cors"

            },
            body:JSON.stringify(user)
        })
        const data = await res.json()
        console.log(data)
        if(data.status === "Success"){
            window.alert("Post Successful")
            Navigate('/Posts')
        }else{
            window.alert("Some Data missing")
        }
    }

    return(
        <>
        <header className='for-header'>
            <img className='for-icon' src={icon} alt='icon'></img>
            <h1 className='for-name'>Instaclone</h1>
            <Link to="/form"><img className='for-camera' src={camera} alt='camera'></img></Link>
        </header>
        <div className="form-filling"></div>
        <form method="POST">
        <input  className="select-file" size="35" type="text" name='img' value={user.img} onChange={PostInputs}  placeholder='Share Your Link'/><br />
            <div ><input  className="author" type="text" name="author" placeholder="Author" value={user.author} onChange={PostInputs}></input></div>
            <input className="location"  type="text" name="location" placeholder="Location" value={user.location} onChange={PostInputs}></input><br></br>
            <input className="description1"type="text" name="description" placeholder="Description" value={user.description} onChange={PostInputs}></input><br></br>
            <div className="post1"><p className="post" type="submit" onClick={PostData}>Post</p></div>
        </form>
        </>
    )
}