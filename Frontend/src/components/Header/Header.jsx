import React from 'react'
import './Header.css'
import { FaCartShopping } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay , EffectCube} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';


const Header = () => {
    return (

<div className='header'>
    <Swiper
       modules={[Pagination, Autoplay , EffectCube]}
      spaceBetween={500}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      effect='cube'
      pagination={{ clickable: true }}
    >
      <SwiperSlide><img src="header_img5.jpg"/></SwiperSlide>
      <SwiperSlide><img src="header_img2.jpg"/></SwiperSlide>
      <SwiperSlide><img src="header_img3.jpg"/></SwiperSlide>
      <SwiperSlide><img src="header_img4.jpg"/></SwiperSlide>
    </Swiper>
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <a className='hvr-btn' href='#explore-menu'><span><FaCartShopping /></span>Order Now</a>
            </div>
        </div>
    )
}

export default Header
