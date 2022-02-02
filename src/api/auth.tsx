import request from './request'
import Cookies from 'js-cookie'

//토큰값 얻기

export const getToken = () => {
  return Cookies.get('token')
}

//3. 게시판 정보 얻어오기

export const getBoardInfoApi = async () => {
  return request('/board_list', 'get', {}, null)
}

//회원가입

export const postSign_upApi = async (formData: any) => {
  return request('/join', 'post', {}, formData)
}
//로그인

export const postSign_InApi = async (formData: any) => {
  return request('/login', 'post', {}, formData)
}

//7. 로그인_유저정보

export const headerInfoApi = async () => {
  const token = await getToken()
  return request('company/user-info', 'get', { authorization: token }, null)
}

//1.게시판 만들기
export const postBoardInfoApi = async (formData: any) => {
  return request('/board', 'post', {}, formData)
}
//게시판 수정하기
export const editBoardInfoApi = async (formData: any) => {
  return request('/editboard', 'post', {}, formData)
}
//게시판 삭제하기
export const delBoardInfoApi = async (formData: any) => {
  return request('/delboard', 'post', {}, formData)
}
//게시판 검색하기하기
export const searchBoardInfoApi = async (title: any) => {
  return request('/searchBoard?value=' + title, 'get', {}, null)
}

//3. 채팅방 정보 얻어오기

export const getChatInfoApi = async (userNo: any) => {
  return request('/chat/list?value=' + userNo, 'get', {}, null)
}
//채팅방 만들기
export const postChatInfoApi = async (formData: any) => {
  return request('/chat/add', 'post', {}, formData)
}
//채팅방 수정하기
export const editChatInfoApi = async (formData: any) => {
  return request('/chat/edit', 'post', {}, formData)
}
//채팅방 삭제하기
export const delChatInfoApi = async (formData: any) => {
  return request('/chat/del', 'post', {}, formData)
}

//채팅방 메세지
export const postChatMgApi = async (formData: any) => {
  return request('/chat/message', 'post', {}, formData)
}
// 채팅방 유저 얻기
export const getChatMgApi = async (_id: any) => {
  return request('/chat/soket?value=' + _id, 'get', {}, null)
}
