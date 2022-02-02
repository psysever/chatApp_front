import * as React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Error.css'

function Error() {
  return (
    <div className="error">
      <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
      <p>홈페이지 이용에 불편을 드려서 죄송합니다.</p>
      <p>
        브라우저의 새로고침 버튼을 눌러 확인하시거나 <br className="mobile" />
        잠시 후 접속을 다시 시도해 주십시오.
      </p>
      <Link to="/">홈으로</Link>
    </div>
  )
}

export default Error
