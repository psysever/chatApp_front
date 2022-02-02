import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { getChatInfoApi } from '../../api/auth'

function Chat() {
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

  const [chat, setChat] = useState<any>()

  //채팅룸
  const userNo: any = Cookies.get('userInfo')
  const getChatInfo = async () => {
    const response = await getChatInfoApi(userNo)
    setChat(response.data)
  }

  useEffect(() => {
    getChatInfo()
  }, [])

  return (
    <div className="list_info">
      {chat?.map((data: any, i: any) => {
        return (
          <ul className="qu_list" key={i}>
            <li>
              <div
                className="qu_head"
                onClick={() => {
                  history.push({
                    pathname: `/chat_info/${data._id}`,
                    state: { board: chat[i] },
                  })
                }}
              >
                <div>
                  <p>제목 : {data.title}</p>
                </div>
                <p>
                  {' '}
                  {data.createdAt.substring(0, 4)}.
                  {data.createdAt.substring(5, 7)}.
                  {data.createdAt.substring(8, 10)}
                </p>
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

export default Chat
