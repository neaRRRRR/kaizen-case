import React from 'react'
import './Contents.style.scss'
import Tags from './Tags'
import Card from './Card'
// import RectBg from '../svg/RectBg'
import RectBg from '../svg/RectBg.svg'

export default () => {
    return(
    
        <div className='content-container'>
            <div className='tag-container'>
                <Tags />
                <Tags />
                <Tags />
                <Tags />
                <Tags />
            </div>
            <div className='card-container'>
                <Card />
            </div>
        </div>
        
        )
        
}