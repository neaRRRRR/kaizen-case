import React from 'react'
import './Card.style.scss'
import RectInnerBg from '../svg/RectInnerBg'
import RectBg from '../svg/RectBg'
import Knurl from '../svg/Knurl'
import Cola from '../svg/Cola'

export default () => {
    return (
        <div style={{width:'305px',paddingBottom:'15px'}}>
        <div className='card-outer'>
            <div className='card-inner'>
                
                <div className='photo-container'>
                <div style={{height:'100%',width:'20%',paddingLeft:'10px',paddingTop:'10px'}}>
                    <Knurl />
                </div>
                <div className='photo-content-container'>
                    
                    <div className='photo-circle'>
                        <Cola />
                    </div>
                    <div className='date'>
                    <p style={{fontWeight:'bold'}}>Son 12 gün</p>
                    </div>
                    </div>
                </div>
                <div className='text-container'>
                    <p style={{color:'#1D1E1C',fontWeight:'bold'}}>2,5 LT Coca-Cola kapakları
                        Coca-Cola +Coffee kazandırıyor!
                    </p>
                    <p style={{color:'red',fontWeight:'bold'}}>Daha Daha</p>
                </div>
            </div>
        </div>
        </div>
    )
}