import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import i_naver from '../../assets/img/sns-naver-icon.png'
import i_kakao from '../../assets/img/sns-kakao-icon.png'
import i_facebook from '../../assets/img/sns-facebook-icon.png'
import '../../assets/css/LogIn.css'
import { useLocation } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import { postSign_InApi } from '../../api/auth'
import Cookies from 'js-cookie'

interface IForm {
  email: String
  pwd: String
  result: String
}

function SignIn() {
  const location: any = useLocation()

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })

  const formData = {
    email: userInfo.email,
    password: userInfo.password,
  }

  console.log(userInfo)

  const onClick_PostSign_In = async () => {
    const res = await postSign_InApi(formData)
    console.log(res)
    if (res.message === 'ok') {
      Cookies.set('token', res.token)
      Cookies.set('userInfo', res.existingEmail._id)
      window.location.replace('/')
    } else {
      alert('회원정보가 일치하지 않습니다.')
    }
  }

  return (
    <div className="login">
      <PageTitle title="Log In" />
      <h2>로그인</h2>
      <p className="pp">{location?.state?.message}</p>

      <div className="login_info">
        <div className="login_box">
          <div className="login_input">
            <input
              name="email"
              type="text"
              placeholder="이메일"
              onChange={(e) => {
                setUserInfo({ ...userInfo, email: e.target.value })
              }}
            />
            <input
              name="pwd"
              type="password"
              placeholder="비밀번호"
              onChange={(e) => {
                setUserInfo({ ...userInfo, password: e.target.value })
              }}
            />
            <button type="submit" value="Log in" onClick={onClick_PostSign_In}>
              로그인
            </button>
          </div>
          <ul className="login_list">
            <li>
              <Link to="/SignUp">회원가입</Link>
            </li>
            <li>｜</li>
            <li>
              <Link to="/IdFind">아이디찾기</Link>
            </li>
            <li>｜</li>
            <li>
              <Link to="/PwFind">비밀번호찾기</Link>
            </li>
          </ul>
        </div>
        <div className="login_sns">
          <p>SNS 계정으로 로그인 하기</p>
          <ul className="login_sns_list">
            <li>
              <Link to="#">
                <img src={i_naver} alt="" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={i_kakao} alt="" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={i_facebook} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SignIn
