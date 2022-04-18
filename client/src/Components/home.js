import React from 'react';
import './home.css';
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='main-container'>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IixZTk_tZeWLtn4dyM2bXVKKfIHkm7zc2Q&usqp=CAU' alt='profile'></img>
            </div>
            <div>
                <p className='title-1'>Instaclone</p>
                <Link to='/posts'><button className='home-button'>Enter</button></Link>
            </div>
        </div>
        
    );
}