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

export default () => {
    
    
    const carouselItems = [<Card text={'AAAAAAAAA'}/>, <Card text={'BBBBBBB'}/>, <Card text={'CCCCCCC'}/>];

    // let carouselItems = data.map((item) => {
    //     return <Card text={item.text} ... />
    // })

    
    
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
   
    

    return(
    
        <div className='content-container'>
            <div className='tag-container'>
                <Tags />
                <Tags />
                <Tags />
                <Tags />
                <Tags />
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
                {carouselItems}
            </Carousel>
            
            
            
        </div>
        
        )
        
}