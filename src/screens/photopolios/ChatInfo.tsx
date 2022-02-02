import Cookies from 'js-cookie'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import io from 'socket.io-client'
import { getChatMgApi } from '../../api/auth'
import '../../assets/css/UploadForm.css'
import PageTitle from '../../components/PageTitle'

function ChatInfo(props: any) {
  var connectionOptions: any = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket'],
  }
  const ENDPOINT = 'http://localhost:8080'
  const socket = io(ENDPOINT, connectionOptions)

  const history = useHistory()
  const [boardInfo, setBoardInfo] = useState<any>({
    _id: props.location.state.board._id,
    title: props.location.state.board.title,
    contents: props.location.state.board.contents,
    userId: props.location.state.board.userId,
    chat: '',
  })
  const [name, setName] = useState<any>([])
  const [message, setMessage] = useState<any>('')
  const [messages, setMessages] = useState<any>([])
  //전송은 emit 수신은 on

  const onClickPostChatMgApi = async () => {
    socket.emit('user-send', message)
    // socket.emit('room1-send', message)
  }

  const getChatMg = async () => {
    const userCheck: any = Cookies.get('userInfo')
    const userCheckInt = parseInt(userCheck)
    if (userCheck) {
      const res = await getChatMgApi(userCheckInt)
      setName(res.data.map((item: any) => item.email))
    }
  }

  useEffect(() => {
    getChatMg()
    socket.on('broadcast', (message) => {
      setMessages((messages: any) => [...messages, message])
    })
  }, [])

  console.log(messages)
  return (
    <div className="join">
      <PageTitle title="Up_load_Board" />
      <h2>Board</h2>
      <div className="join_info">
        <h2>-채팅방:{boardInfo.title}</h2>
        <p>{name}님이 입장하였습니다</p>
        <h2>-채팅내용</h2>
        {messages.map((item: any, i: any) => {
          return <p>내용 : {item}</p>
        })}

        <h2>-채팅보내기</h2>
        <input
          placeholder="채팅을 입력하세요"
          name="title"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        ></input>
        <button
          type="submit"
          value="Upload"
          onClick={() => {
            onClickPostChatMgApi()
          }}
        >
          채팅보내기
        </button>
      </div>

      <div className="join_btn">
        <button
          type="submit"
          value="Upload"
          onClick={() => {
            history.push({
              pathname: `/photopolios/2`,
            })
          }}
        >
          뒤로가기
        </button>
      </div>
    </div>
  )
}

export default ChatInfo
