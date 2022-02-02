import Cookies from 'js-cookie'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { delBoardInfoApi } from '../../api/auth'

import '../../assets/css/UploadForm.css'
import PageTitle from '../../components/PageTitle'

function BoardInfo(props: any) {
  const history = useHistory()
  const userCheck: any = Cookies.get('userInfo')
  const userCheckStirng = parseInt(userCheck)

  const [boardInfo, setBoardInfo] = useState<any>({
    _id: props.location.state.board._id,
    title: props.location.state.board.title,
    contents: props.location.state.board.contents,
    userId: props.location.state.board.userId,
  })

  const formData = {
    _id: props.location.state.board._id,
  }

  const onClickDelBoardInfoApi = async () => {
    const res = await delBoardInfoApi(formData)
    if (res.message === 'ok') {
      alert('게시물이 삭제되었습니다.')
      history.push('/photopolios/1')
    }
  }

  return (
    <div className="join">
      <PageTitle title="Up_load_Board" />
      <h2>Board</h2>
      <div className="join_info">
        <h2>-제목</h2>
        <input
          readOnly
          defaultValue={boardInfo.title}
          placeholder="제목"
          name="title"
          onChange={(e) => {
            setBoardInfo({ ...boardInfo, title: e.target.value })
          }}
        ></input>
        <h2>-내용</h2>
        <textarea
          readOnly
          defaultValue={boardInfo.contents}
          placeholder="내용"
          name="contents"
          onChange={(e) => {
            setBoardInfo({ ...boardInfo, contents: e.target.value })
          }}
        ></textarea>
      </div>
      {userCheckStirng !== boardInfo.userId ? (
        <div className="join_btn">
          <button
            type="submit"
            value="Upload"
            onClick={() => {
              history.push({
                pathname: `/photopolios/1`,
              })
            }}
          >
            뒤로가기
          </button>
        </div>
      ) : (
        <div className="join_btn">
          <button
            type="submit"
            value="Upload"
            onClick={() => {
              history.push({
                pathname: `/board_info_edit/${props.location.state.board._id}`,
                state: { boardInfo: boardInfo },
              })
            }}
          >
            게시판글수정하기
          </button>
          <button
            type="submit"
            value="Upload"
            onClick={() => {
              onClickDelBoardInfoApi()
            }}
          >
            게시판글삭제하기
          </button>
          <button
            type="submit"
            value="Upload"
            onClick={() => {
              history.push({
                pathname: `/photopolios/1`,
              })
            }}
          >
            뒤로가기
          </button>
        </div>
      )}
    </div>
  )
}

export default BoardInfo
