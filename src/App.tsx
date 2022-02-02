import React, { useEffect, useState } from 'react'
import { Route, useLocation } from 'react-router'
import './App.css'

//헤더

import Header from './components/Header'
//네비

import Nav from './components/Nav'
//메인

import Home from '../src/screens/home/Home'
//에러메세지

import Error from './components/Error'
//풋터

import Footer from './components/Footer'
//로그인

import SignIn from './screens/sign_In/SignIn'
//회원가입

import SignUp from './screens/sign_up/SignUp'
//아이디 찾기, 비밀번호 찾기 변경

import IdFind from './screens/info_find/IdFind'
import IdInfo from './screens/info_find/IdInfo'
import PwFind from './screens/info_find/PwFind'
import PwReset from './screens/info_find/PwReset'

//포토폴리오페이지

//마이페이지
import SignUpModify from './screens/sign_up/SignUpModify'
import PhotoPolios from './screens/photopolios/Photopolios'
import Board from './screens/photopolios/Board'
import Chat from './screens/photopolios/Chat'
import BoardUpload from './screens/photopolios/BoardUpload'
import BoardInfoEdit from './screens/photopolios/BoardInfoEdit'
import BoardInfo from './screens/photopolios/BoardInfo'
import ChatUpload from './screens/photopolios/ChatUpload'
import ChatInfo from './screens/photopolios/ChatInfo'

function App() {
  let location = useLocation()
  //-----useState------------

  // 네비
  const [navOpen, setNavOpen] = useState(false)
  // 스크롤
  const [scrollState, setScrollState] = useState(0)

  //스크롤 중심함수
  useEffect(() => {
    window.scrollTo(0, 0)
    setNavOpen(false)
  }, [location])
  const onScroll = (e: any) => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    setScrollState(scrollTop)
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="App" onScroll={onScroll}>
      <div id="wrap">
        {navOpen && <Nav setNavOpen={setNavOpen} />}
        {/* <TopBanner /> */}
        <Header setNavOpen={setNavOpen} scrollState={scrollState} />
        <div className="container">
          {/* 홈 */}
          <Route exact path="/" component={Home} />
          {/* 로그인 */}
          <Route path="/signIn" component={SignIn} />
          {/* 회원가입 */}
          <Route path="/signUp" component={SignUp} />
          {/* 아이디,비밀번호 찾기,변경 */}
          <Route path="/idFind" component={IdFind} />
          <Route path="/idInfo" component={IdInfo} />
          <Route path="/pwFind" component={PwFind} />
          <Route path="/pwReset" component={PwReset} />
          {/* PhotoPoliosPage */}
          <Route path="/photopolios/:id" component={PhotoPolios} />
          <Route path="/signup_modify" component={SignUpModify} />
          <Route path="/borad_create" component={BoardUpload} />
          <Route path="/board_info_edit" component={BoardInfoEdit} />
          <Route path="/board_info" component={BoardInfo} />
          {/* 채팅만들기 */}
          <Route path="/chat_add" component={ChatUpload} />
          <Route path="/chat_info" component={ChatInfo} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
