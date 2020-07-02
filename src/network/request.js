// 封装 axios
import axios from 'axios'

const HOST = 'http://localhost:8000'

export default function request(config) {
  // 1. 创建一个 axios 实例
  const instance = axios.create({
    baseURL: HOST,
    timeout: 5000
  })
  // 发送请求
  return instance(config)
}