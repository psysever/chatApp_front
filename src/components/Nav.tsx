import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import i_insta from '../assets/img/m-instagram-icon.png'
import i_facebook from '../assets/img/m-facebook-icon.png'
import i_search from '../assets/img/menu-search-icon.png'
import i_close from '../assets/img/m-menu-x-icon.png'
import '../assets/css/Nav.css'

interface NavType {
  nav1: boolean
  nav2: boolean
}

function Nav({ setNavOpen }: any) {
  // 메뉴 더보기
  const [navDown, setNavDown] = useState<any | NavType>({
    nav1: false,
    nav2: false,
  })

  return (
    <div className="nav">
      <div onClick={() => setNavOpen(false)} className="nav_dim"></div>
      <div className="nav_box">
        <div onClick={() => setNavOpen(false)} className="nav_close">
          <img src={i_close} alt="" />
        </div>
        <ul className="nav_list">
          <li>
            <Link to="/jackInfo_list" className="en">
              About Me
            </Link>
          </li>
          <li>
            <div onClick={() => setNavDown({ nav1: !navDown.nav1 })}>
              <p className="en">Phtopolio</p>
              <span className={navDown.nav1 ? 'nav_down' : ''}></span>
            </div>
            <ul className={navDown.nav1 ? 'on' : ''}>
              <li>
                <Link to="/jackInfo_list2">Main</Link>
              </li>
              <li>
                <Link to="">준비중</Link>
              </li>
            </ul>
          </li>

          <li>
            <div onClick={() => setNavDown({ nav2: !navDown.nav2 })}>
              <p className="en">Community</p>
              <span className={navDown.nav2 ? 'nav_down' : ''}></span>
            </div>
            <ul className={navDown.nav2 ? 'en on' : 'en'}>
              <li>
                <Link to="/community/1">Notice</Link>
              </li>
              <li>
                <Link to="/community/3">FAQ</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="nav_bottom">
          <ul className="nav_login en">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/join">Join</Link>
            </li>
          </ul>
          <ul className="nav_logout en">
            <li>
              <Link to="#">Logout</Link>
            </li>
            <li>
              <Link to="/mypage">My page</Link>
            </li>
          </ul>
          <div className="nav_sns">
            <Link to="#">
              <img src={i_insta} alt="" />
            </Link>
            <Link to="#">
              <img src={i_facebook} alt="" />
            </Link>
          </div>
        </div>
        <div className="nav_search">
          <input type="text" />
          <span>
            <img src={i_search} alt="" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Nav
