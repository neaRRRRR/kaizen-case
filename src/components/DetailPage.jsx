import React from 'react'
import './Detail.style.scss'
import BackButton from '../svg/BackButton'
import Cola from '../svg/Cola'
import { useHistory, withRouter } from 'react-router-dom'

export default (props) => {
    console.log(props)
    let item = props.location.state.data
    const history = useHistory()
    return(
        <div className='detail-container'>
            <div className='detail-photo-container' style={{background:`url(${item.ImgUrl})`,backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',}}>
                <div style={{height:'100%',width:'20%',paddingLeft:'20px',paddingTop:'30px'}} onClick={() => {history.push('/')}}>
                    <BackButton />
                </div>
                <div className='detail-photo-content-container'>
                    
                    <div className='detail-photo-circle' style={{  
                    backgroundImage: "url(" + item.BrandLogo + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: item.Color,
                    borderColor: item.Color
                            }}>
                        
                    </div>
                    <div className='detail-date'>
                    <p style={{fontWeight:'bold'}}>{item.RemainingDuration}</p>
                    </div>
                    </div>
                </div>
            <div className='bottom-container'>
                <div className='detail-header'>{item.Title}</div>
                <div className='detail-p'>
                {item.Description}   
                </div>
                <a href={item.DetailUrl} className='detail-b' >Hemen Katıl</a>
            </div>
        </div>
    )
}
