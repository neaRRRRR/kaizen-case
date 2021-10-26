import React from 'react'
import './Header.style.scss'
import Logo from '../svg/Logo'
import Profile from '../svg/Profile'
export default () => {
    return (
        <div className='header-container'>
            <div style={{display:'flex'}}>
            <div style={{width:'5px'}}/>
                <Logo />
            </div>
            <div style={{display:'flex',width:'150px',justifyContent:'space-around'}}>
                <div className='login-button'>Giriş yap</div>
                <div className='profile'><Profile /></div>
            </div>
        </div>
    )
}