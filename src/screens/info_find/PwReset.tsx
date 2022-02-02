import React from 'react'
import { Link } from 'react-router-dom'

function PwReset() {
  return (
    <div className="find">
      <h2>비밀번호 재설정</h2>
      <div className="find_info">
        <ul className="find_input reset_input">
          <li>
            <h4>신규 비밀번호</h4>
            <input
              type="text"
              placeholder="영문 소문자 / 숫자 / 특수문자 조합, 10-16자"
            />
          </li>
          <li>
            <h4>신규 비밀번호 확인</h4>
            <input type="text" placeholder="신규 비밀번호 확인" />
          </li>
        </ul>
        <div className="find_btn">
          <Link to="/login">재설정하기</Link>
        </div>
      </div>
    </div>
  )
}

export default PwReset
