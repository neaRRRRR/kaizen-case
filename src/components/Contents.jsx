import React, { useState,useEffect,useCallback,useRef, Children } from 'react'
import './Contents.style.scss'
import Tags from './Tags'
import Card from './Card'
// import RectBg from '../svg/RectBg'
import RectBg from '../svg/RectBg.svg'
import * as Scroll from 'react-scroll';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useHistory, withRouter } from 'react-router-dom'
import axios from 'axios'

export default () => {
  
    let [data,setData] = useState([])
    let [tags,setTags] = useState('all')
    
    const carouselItems = [];

    useEffect(() => {
      console.log(tags)
    },[tags])
   
    
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
          partialVisibilityGutter: 30
        }
      };


      const CustomDot = ({ onClick, ...rest }) => {
        const {
          onMove,
          index,
          active,
          carouselState: { currentSlide, deviceType }
        } = rest;
        
        
        return (
          
          <button
            className={active ? "dots-active" : "dots"}
            onClick={(e) => {onClick();console.log(e)}}
          >
            {React.Children.toArray(carouselItems)[index]}
          </button>
          
        );
      };
   
      useEffect(() => {
        axios.get('https://testapi.dahadaha.com/api/promotions').then((res) =>{
              setData(res.data)
              
        })
      },[])

      const getData = (data) => {
        setTags(data)
      }
    

    return(
    
        <div className='content-container'>
            <div className='tag-container'>
                <Tags tag={data} state={getData}/>
            </div>
            
            <Carousel 
            responsive={responsive}
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            partialVisible={true}
            containerClass="card-container"
            customDot={<CustomDot/>}
            >
                {data.map((item) => {
                  if(item.BrandTags[0]?.BrandName == tags || item.BrandTags[1]?.BrandName == tags){
                    return <Card data={item}/>
                  }
                  if(tags == 'all'){
                    return <Card data={item}/>
                  }
                })}
            </Carousel>
            
            
            
        </div>
        
        )
        
}