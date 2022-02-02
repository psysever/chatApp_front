import React, { useRef, useState } from 'react'
import '../../assets/css/SignUp.css'
import PageTitle from '../../components/PageTitle'

import DaumPostApi from './../../components/DaumPostApi'

interface IForm {
  email: String
  pwd: String
  name: String
  phone: String
  ckpwd: String
  addr: String
  d_addr?: String
  avatar: any
}

function SignUpModify() {
  const [addr, setAddr] = useState<any>()
  const [addrPopup, setAddrPopup] = useState(false)

  return (
    <div className="join">
      <PageTitle title="modify_profile" />
      <h2>회원정보수정</h2>
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
                />
              </div>
            </li>
            <li>
              <h4>
                이름<span> *</span>
              </h4>
              <input
                name="name"
                type="text"
                placeholder="이름을 입력해주세요"
              />
            </li>
            <li>
              <h4>프로필사진</h4>
              <input
                name="avatar"
                type="file"
                id="logo_upload"
                accept="image/*"
              />
            </li>
            <li>
              <h4>
                휴대전화<span> *</span>
              </h4>
              <div className="input_box">
                <input
                  name="phone"
                  type="text"
                  placeholder="- 제외한 숫자만 입력해주세요"
                />
              </div>
            </li>
            <li>
              <h4>
                주소<span> *</span>
              </h4>
              <div className="input_box">
                <input
                  value={addr}
                  name="addr"
                  type="text"
                  placeholder="주소"
                />
                <span
                  onClick={() => {
                    setAddrPopup(!addrPopup)
                  }}
                >
                  주소검색
                </span>

                <input
                  name="d_addr"
                  type="text"
                  placeholder="상세주를 입력해주세요"
                />
                {addrPopup ? (
                  <DaumPostApi
                    setAddr={setAddr}
                    setAddrPopup={setAddrPopup}
                    addrPopup={addrPopup}
                  />
                ) : null}
              </div>
            </li>
          </ul>
        </div>
        <div className="join_btn">
          <button type="submit" value="signUp_Modify">
            회원정보수정
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUpModify
