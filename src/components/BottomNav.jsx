import React from 'react'
import './BottomNav.style.scss'
import Kesfet from '../svg/Kesfet'
import Star from '../svg/Star'
import Portal from '../svg/Portal'
import Plus from '../svg/Plus'
export default () => {
    return (
    <div style={{width:'100%',height:'260px'}}>
        <div className='nav-container'>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'80px'}}>
                <Kesfet />
                <div style={{marginTop:'5px'}}>KEŞFET</div>
            </div>
            <div style={{width:'2px'}}></div>
            <div style={{position:'absolute',bottom:'5px',}}>
                <Portal />   
            </div>
            
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',}}>
                <Star />
                <div style={{marginTop:'5px'}}>DAHA CÜZDAN</div>
            </div>
        </div>
    </div>
    )
}