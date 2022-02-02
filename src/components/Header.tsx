import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/m-black-logo.png'
import w_logo from '../assets/img/logo.png'
import i_hamberger from '../assets/img/m-bl-hamberger-icon.png'
import i_w_hamberger from '../assets/img/hamberger-icon.png'
import '../assets/css/Header.css'
import Cookies from 'js-cookie'

function Header(props: any, { setNavOpen, scrollState }: any) {
  const { pathname } = window.location
  const token = Cookies.get('token')
  const userInfo = Cookies.get('userInfo')
  const onClick_LogOut = () => {
    Cookies.remove('token')
    Cookies.remove('userInfo')
    alert('로그아웃 되었습니다.')
    window.location.replace('/')
  }

  return (
    <>
      <div
        className={
          pathname !== '/' ? 'header_wrap active_header_wrap' : 'header_wrap'
        }
      >
        <div className={scrollState > 30 ? 'header active_header' : 'header'}>
          <h1>
            <Link to="/">
              <img
                src={pathname !== '/' || scrollState > 30 ? logo : w_logo}
                alt=""
              />
            </Link>
          </h1>
          <div className="header_right">
            <ul className="header_nav pc">
              <li>
                <Link to="/photopolios/:id">photopolio</Link>
              </li>
              {token ? null : (
                <li>
                  <Link to="/signUp">SignUp</Link>
                </li>
              )}
              {token ? (
                <li>
                  <Link to="/" onClick={onClick_LogOut}>
                    LogOut
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/signIn">LogIn</Link>
                </li>
              )}
            </ul>
            <div className="header_icon">
              <div onClick={() => setNavOpen(true)} className="i_hamberger">
                <img
                  src={
                    pathname !== '/' || scrollState > 30
                      ? i_hamberger
                      : i_w_hamberger
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
