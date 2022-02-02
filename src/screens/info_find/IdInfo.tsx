import React from 'react'
import { Link } from 'react-router-dom'

function IdInfo() {
  return (
    <div className="find">
      <h2>아이디찾기</h2>
      <div className="no_id_info id_info">
        <p>해당 정보로 가입된 아이디 정보가 없습니다.</p>
        <div className="join_btn">
          <Link to="/signUp">회원가입</Link>
        </div>
      </div>
      <div className="id_info">
        <p>해당 정보로 가입된 아이디를 찾았습니다.</p>
        <div className="id_get">
          <span>user1234</span>
        </div>
        <div className="id_btn">
          <Link to="/pwFind">비밀번호 찾기</Link>
          <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  )
}

export default IdInfo
