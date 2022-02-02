import Cookies from 'js-cookie'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postChatInfoApi } from '../../api/auth'

import '../../assets/css/UploadForm.css'
import PageTitle from '../../components/PageTitle'

function ChatUpload(props: any) {
  const chatInfo = props.location.state
  const userNo = Cookies.get('userInfo')

  const [boardInfo, setBoardInfo] = useState<any>({
    title: '',
  })

  const formData = {
    userId: userNo,
    title: boardInfo.title,
    userNo: chatInfo.board.userId,
  }

  const onClickPostChatApi = async () => {
    const response = await postChatInfoApi(formData)
  }
  return (
    <div className="join">
      <PageTitle title="Up_load_Board" />
      <h2>Upload PhotoPolios</h2>
      <div className="join_info">
        <h2>-제목</h2>
        <input
          placeholder="제목"
          name="title"
          onChange={(e) => {
            setBoardInfo({ ...boardInfo, title: e.target.value })
          }}
        ></input>
      </div>
      <div className="join_btn">
        <button type="submit" value="Upload" onClick={onClickPostChatApi}>
          채팅방만들기
        </button>
      </div>
    </div>
  )
}

export default ChatUpload
