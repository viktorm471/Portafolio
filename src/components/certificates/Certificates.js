import React from 'react'

// certificates
import img1 from '../../assets/certificate1.png';
import img2 from '../../assets/certificate2.png';
import img3 from '../../assets/certificate3.png';
import img4 from '../../assets/certificate4.png';
import img5 from '../../assets/certificate5.png';
import img6 from '../../assets/certificate6.png';
import img7 from '../../assets/certificate7.png';
import img8 from '../../assets/certificate8.png';
import img9 from '../../assets/certificate9.png';
import img10 from '../../assets/certificate10.png';
import img11 from '../../assets/certificate11.png';
import img12 from '../../assets/certificate12.png';
import img13 from '../../assets/certificate13.png';
import img14 from '../../assets/certificate14.png';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import './style.css'

// import required modules
import { Navigation, Pagination } from "swiper";

const data = [img14,img12,img13,img11,img10,img1,img2,img3,img4,img5,img6,img7,img8,img9]
const Certificates = () => {
  return (
    <section id="certificates">
      <h5>Courses And Certificates </h5>
      <h2>Always Learning</h2>

      <Swiper  navigation={true} pagination={ {clickable:true} } modules={[Pagination, Navigation]} className=" certificates__container">
        {data.map((img)=>{
          return (
            <SwiperSlide key={`${img}`}><img src={img} alt="certificate1" /></SwiperSlide>
          )
        })}
        
        
      </Swiper>
    </section>
  )
}

export default Certificates
