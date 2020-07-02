import { createStore } from 'redux'
import Actions from './actions'
import State from './State'

// 1. 初始化状态，创建 reducer 函数
function reducer(state = State, action) {
  // 需要进行判断 action
  if (action.type.indexOf('@@redux') !== -1) return state
  
  state = Actions[action.type](state, action)
  return {...state}
}

const store = createStore(reducer)

export default store