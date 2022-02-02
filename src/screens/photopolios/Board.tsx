import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { getBoardInfoApi, searchBoardInfoApi } from '../../api/auth'

function Board() {
  const history = useHistory()
  // 페이지네이션
  const [page, setPage] = useState(1)

  // 공지사항
  const [answerDown, setAnswerDown] = useState<any>({
    a1: false,
    a2: false,
    a3: false,
  })

  //검색어
  const [serach, setSearch] = useState<any>('')

  const [board, setBoard] = useState<any>()

  const getBoardInfo = async () => {
    const response = await getBoardInfoApi()
    setBoard(response.data)
  }
  const serchBoardInfo = async () => {
    const response = await searchBoardInfoApi(serach)
    setBoard(response.data)
  }

  useEffect(() => {
    getBoardInfo()
  }, [])

  return (
    <div className="list_info">
      <div className="serch_Info">
        <input
          placeholder="검색어를 입력해주세요"
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
        <div onClick={serchBoardInfo}>검색하기</div>
      </div>
      {board?.map((data: any, i: any) => {
        return (
          <ul className="qu_list" key={i}>
            <li>
              <div
                className="qu_head"
                onClick={() => {
                  history.push({
                    pathname: `/board_info/${data._id}`,
                    state: { board: board[i] },
                  })
                }}
              >
                <div>
                  <p>게시물번호 : {i} </p>
                  <p>제목 : {data.title}</p>
                </div>
                <p>
                  {' '}
                  {data.date.substring(0, 4)}.{data.date.substring(5, 7)}.
                  {data.date.substring(8, 10)}
                </p>
              </div>
              <button
                onClick={() => {
                  history.push({
                    pathname: `/chat_add/${data._id}`,
                    state: { board: board[i] },
                  })
                }}
              >
                채팅방만들기
              </button>
              <div className={answerDown.a1 ? 'qu_contents' : 'none'}>
                <div className="notice_contents">
                  <p>{data.contents}</p>
                </div>
              </div>
            </li>
          </ul>
        )
      })}
      <div className="post_up">
        <Link to="/borad_create">게시글등록</Link>
      </div>
      <ul className="pagination">
        <li onClick={() => setPage(1)} className={page === 1 ? 'nowpage' : ''}>
          1
        </li>
        <li onClick={() => setPage(2)} className={page === 2 ? 'nowpage' : ''}>
          2
        </li>
      </ul>
    </div>
  )
}

export default Board
