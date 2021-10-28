import React,{useRef} from 'react'
import './Card.style.scss'
import RectInnerBg from '../svg/RectInnerBg'
import RectBg from '../svg/RectBg'
import Knurl from '../svg/Knurl'
import Cola from '../svg/Cola'
import { useHistory, withRouter } from 'react-router-dom'

export default (props) => {
    const history = useHistory()
    let item = props.data
    
    return (
        <div className='card-out-cont' onClick={() => {history.push(`/kampanya/${item.PromotionName}/${item.PromotionID}`,props)}}>
        <div className='card-outer'>
            <div className='card-inner'>
                
                <div className='photo-container' style={{background:`url(${item.ImgUrl})`,backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',}}>
                <div style={{height:'100%',width:'20%',paddingLeft:'10px',paddingTop:'10px'}}>
                    
                </div>
                <div className='photo-content-container'>
                    
                    <div className='photo-circle' style={{  
                    backgroundImage: "url(" + item.BrandLogo + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: item.Color,
                    borderColor: item.Color
                            }} />
                        
                    
                    <div className='date'>
                    <p style={{fontWeight:'bold'}}>{item.RemainingDuration}</p>
                    </div>
                    </div>
                </div>
                <div className='text-container'>
                    <p style={{color:'#1D1E1C',fontWeight:'bold', whiteSpace:'normal'}}>
                    {item.Title}
                    </p>
                    <p style={{color:`${item.Color}`,fontWeight:'bold'}}>Daha Daha</p>
                </div>
            </div>
        </div>
        </div>
    )
}