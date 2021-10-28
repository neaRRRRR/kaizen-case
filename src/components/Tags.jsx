import React from 'react'
import './Tags.style.scss'
import Search from '../svg/Search'
export default ({state},props) => {
    
    let brands = [
        {
            brandName:"Fuse Tea",
            brandLogo:"https://test.dahadaha.com/content/images/e84fe2a3-8f7e-454f-898d-75064ee2ee1a.jpeg"
        },
        {
            brandName:"Coca-Cola",
            brandLogo:"https://test.dahadaha.com/content/images/378e35bc-6f40-437d-9c74-4ade67d02f1a.png"
        },
        {
            brandName:"Fanta",
            brandLogo:"https://test.dahadaha.com/content/images/66da5841-3805-4653-8a00-57e658668d75.png"
        }
    ]

    

    

    return (
        <>
        <div className='tags' onClick={() => {state('all')}}>
        <div style={{width:'10px'}}></div>
            <Search />
            <div style={{width:'5px'}}></div>
            <div>Fırsat Bul</div>
            <div style={{width:'10px'}}></div>
        </div>
        {brands.map((data) => {
            return(
                <div className='tags' onClick={() => {state(data.brandName)}}>
        <div style={{width:'10px'}}></div>
            <img src={data.brandLogo} width="24" height="24"/>
            <div style={{width:'5px'}}></div>
            <div>{data.brandName}</div>
            <div style={{width:'10px'}}></div>
        </div>
            )
        })}
        
        
        </>
    )
}