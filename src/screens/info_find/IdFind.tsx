import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/Find.css'

function IdFind() {
  return (
    <div className="find">
      <h2>아이디 찾기</h2>
      <div className="find_info">
        <ul className="find_input">
          <li>
            <h4>이름</h4>
            <input type="text" placeholder="이름을 입력해주세요" />
          </li>
          <li>
            <h4>휴대전화</h4>
            <div className="input_box">
              <input type="text" placeholder="- 제외한 숫자만 입력해주세요" />
              <span>인증하기</span>
              <input type="text" placeholder="인증번호를 입력해주세요" />
            </div>
          </li>
        </ul>
        <div className="find_btn">
          <Link to="/IdInfo">다음</Link>
        </div>
      </div>
    </div>
  )
}

export default IdFind
