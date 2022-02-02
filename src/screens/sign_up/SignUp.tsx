import React, { useRef, useState } from 'react'
import '../../assets/css/SignUp.css'
import PageTitle from '../../components/PageTitle'
import { useHistory } from 'react-router'
import DaumPostApi from './../../components/DaumPostApi'
import { postSign_upApi } from '../../api/auth'

interface IForm {
  email: String
  pwd: String
  name: String
  phone: String
  ckpwd: String
  addr: String
  d_addr?: String
}

function SignUp() {
  const history = useHistory()

  const [signUpinfo, setSignUpinfo] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const formData = {
    email: signUpinfo.email,
    username: signUpinfo.username,
    password: signUpinfo.password,
    password2: signUpinfo.password2,
  }

  const onClickPostSignUpApi = async () => {
    if (signUpinfo.password !== signUpinfo.password2) {
      alert('비밀번호가 같지 않습니다.')
    }
    const res = await postSign_upApi(formData)
    console.log(res)
    if (res.message === 'emailDupilcate') {
      alert('이메일이 중복되었습니다.')
    }
    if (res.message === 'ok') {
      history.push('/signIn')
    }
  }

  return (
    <div className="join">
      <PageTitle title="Sign Up" />
      <h2>회원가입</h2>
      <div className="join_info">
        <div className="join_box">
          <ul className="join_input">
            <li>
              <h4>
                이메일<span> *</span>
              </h4>
              <div className="input_box">
                <input
                  name="email"
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  onChange={(e) => {
                    setSignUpinfo({ ...signUpinfo, email: e.target.value })
                  }}
                />
              </div>
            </li>
            <li>
              <h4>
                비밀번호<span> *</span>
              </h4>
              <input
                name="pwd"
                type="password"
                placeholder="비밀번호는 6자 이상입니다."
                onChange={(e) => {
                  setSignUpinfo({ ...signUpinfo, password: e.target.value })
                }}
              />
            </li>
            <li>
              <h4>
                비밀번호 확인<span> *</span>
              </h4>
              <input
                name="ckpwd"
                type="password"
                placeholder="비밀번호 확인"
                onChange={(e) => {
                  setSignUpinfo({ ...signUpinfo, password2: e.target.value })
                }}
              />
            </li>
            <li>
              <h4>
                이름<span> *</span>
              </h4>
              <input
                name="name"
                type="text"
                placeholder="이름을 입력해주세요"
                onChange={(e) => {
                  setSignUpinfo({ ...signUpinfo, username: e.target.value })
                }}
              />
            </li>
          </ul>
        </div>
        <div className="join_btn">
          <button type="submit" value="Sing up" onClick={onClickPostSignUpApi}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
