import Cookies from 'js-cookie'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postBoardInfoApi } from '../../api/auth'

import '../../assets/css/UploadForm.css'
import PageTitle from '../../components/PageTitle'

function BoardUpload() {
  const history = useHistory()
  const [boardInfo, setBoardInfo] = useState<any>({
    title: '',
    contents: '',
  })

  const formData = {
    _id: Cookies.get('userInfo'),
    title: boardInfo.title,
    contents: boardInfo.contents,
  }

  const onClickPostBoardInfoApi = async () => {
    const res = await postBoardInfoApi(formData)
    if (res.message === 'ok') {
      history.push('/photopolios/1')
    }
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
        <h2>-내용</h2>
        <textarea
          placeholder="내용"
          name="contents"
          onChange={(e) => {
            setBoardInfo({ ...boardInfo, contents: e.target.value })
          }}
        ></textarea>
      </div>
      <div className="join_btn">
        <button type="submit" value="Upload" onClick={onClickPostBoardInfoApi}>
          게시판글등록
        </button>
      </div>
    </div>
  )
}

export default BoardUpload
