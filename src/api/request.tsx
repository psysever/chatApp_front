import axios, { Method } from 'axios'

const SERVER = 'http://localhost:8080'

// API request 모듈

const request = async (
  url: String,
  method: Method,
  headers = {},
  jsonData: any,
) => {
  const Address = SERVER + url
  if (method === 'get') {
    try {
      const { data } = await axios({
        method: method,
        url: Address,
        headers: {
          ...headers,
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json',
        },
        params: jsonData,
      })
      return data
    } catch (error) {
      console.log('request function error', error, url)
      await Promise.reject(error)
    }
  } else {
    try {
      const { data } = await axios({
        method: method,
        url: Address,
        headers: {
          ...headers,
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json',
        },
        data: jsonData,
      })
      return data
    } catch (error) {
      console.log('request function error', error, url)
      await Promise.reject(error)
    }
  }
}

export default request
