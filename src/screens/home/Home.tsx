import React, { useEffect } from 'react'
import Slider from 'react-slick'
import banner_img1 from '../../assets/img/main-banner-1.jpg'
import brand1 from '../../assets/img/main-img-1.jpg'
import brand2 from '../../assets/img/main-img-2.jpg'
import m_brand1 from '../../assets/img/m-main-img-1.jpg'
import m_brand2 from '../../assets/img/m-main-img-2.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../assets/css/Home.css'
import Cookies from 'js-cookie'

function Home() {
  // 배너 슬라이드
  const setting = {
    arrow: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeeed: 5000,
    speed: 2000,
    slidesToScroll: 1,
  }

  return (
    <div className="main">
      <Slider {...setting} className="banner pc">
        <div>
          <img src={banner_img1} alt="" />
        </div>
        <div>
          <img src={banner_img1} alt="" />
        </div>
        <div>
          <img src={banner_img1} alt="" />
        </div>
      </Slider>
      <div className="brand_story">
        <div className="tit">
          <h3 className="en">Jack Story</h3>
        </div>
        <ul className="brand_story_list">
          <li>
            <div className="brand_story_img pc">
              <img src={brand1} alt="" />
            </div>
            <div className="brand_story_img mobile">
              <img src={m_brand1} alt="" />
            </div>
            <div className="brand_story_text">
              <h4 className="en">완벽한 </h4>
              <br />
              <h4 className="en">풀스택개발자</h4>
              <br />
              <h4 className="en">되기위한노력</h4>
            </div>
          </li>
          <li>
            <div className="brand_story_img pc">
              <img src={brand2} alt="" />
            </div>
            <div className="brand_story_img mobile">
              <img src={m_brand2} alt="" />
            </div>
            <div className="brand_story_text">
              <p>
                우리 가족
                <br />
                <span>'케이'</span>를 소개합니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
