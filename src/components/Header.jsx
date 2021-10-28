import React, { useState } from 'react'
import './Header.style.scss'
import Logo from '../svg/Logo'
import Profile from '../svg/Profile'
export default () => {
    let [isLoggedIn,setLoggedIn] = useState(false)

    return (
        <div className='header-container'>
            <div style={{display:'flex'}}>
            <div style={{width:'5px'}}/>
                <Logo />
            </div>
            <div style={{display:'flex',width:'150px',justifyContent:'space-around'}}>
                
                {isLoggedIn ? 
                <>
                <div className='login-button' style={{backgroundColor:'#fff'}}></div>
                <div className='profile-container'>
                <div className='online'></div>
                <div className='profile' style={{backgroundColor:'#F40000'}} onClick={() => setLoggedIn(false)}><Profile/></div>
                </div>
                </>
                :
                <>
                <div className='login-button' onClick={() => setLoggedIn(true)}>Giriş yap</div>
                <div className='profile-container'>
                <div className='profile'><Profile /></div>
                </div>
                </>
                }
            </div>
        </div>
    )
}