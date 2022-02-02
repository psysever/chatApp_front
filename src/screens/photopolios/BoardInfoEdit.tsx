import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { editBoardInfoApi, postBoardInfoApi } from '../../api/auth'

import '../../assets/css/UploadForm.css'
import PageTitle from '../../components/PageTitle'

function BoardInfoEdit(props: any) {
  const history = useHistory()
  const [boardInfo, setBoardInfo] = useState<any>({
    title: props.location.state.boardInfo.title,
    contents: props.location.state.boardInfo.contents,
  })

  const formData = {
    _id: props.location.state.boardInfo._id,
    title: boardInfo.title,
    contents: boardInfo.contents,
  }

  const onClickEditBoardInfoApi = async () => {
    const res = await editBoardInfoApi(formData)

    if (res.message === 'ok') {
      history.push('/photopolios/1')
    }
  }

  return (
    <div className="join">
      <PageTitle title="Up_load_Board" />
      <h2>Edit Board</h2>
      <div className="join_info">
        <h2>-제목</h2>
        <input
          defaultValue={boardInfo.title}
          placeholder="제목"
          name="title"
          onChange={(e) => {
            setBoardInfo({ ...boardInfo, title: e.target.value })
          }}
        ></input>
        <h2>-내용</h2>
        <textarea
          defaultValue={boardInfo.contents}
          placeholder="내용"
          name="contents"
          onChange={(e) => {
            setBoardInfo({ ...boardInfo, contents: e.target.value })
          }}
        ></textarea>
      </div>
      <div className="join_btn">
        <button type="submit" value="Upload" onClick={onClickEditBoardInfoApi}>
          게시판글수정완료
        </button>
      </div>
    </div>
  )
}

export default BoardInfoEdit
