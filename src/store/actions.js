// actions函数执行
export default {
  add(state, action) {
    state.number++
    return state
  },
  addNumber(state, action) {
    state.number += action.number
    return state
  }
}