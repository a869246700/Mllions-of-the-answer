import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'

// 将 state 映射到 props 的函数, 默认传入 state
function mapStateToProps(state) {
  return {...state}
}

// 将修改 state 数据的方法，映射到 props，默认传入 dispatch
function mapDispatchToProps(dispatch) {
  return {
    onAddClick: () => {
      let payload = {
        type: 'add'
      }
      dispatch(payload)
    },
    onAddClick5: () => {
      let payload = {
        type: 'addNumber',
        number: 5
      }
      dispatch(payload)
    }
  }
}


class Counter extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={this.handleClickAnswer}>随机答题</Button>
        <Button onClick={this.handleClickAdd5}>闯关答题</Button>
        <Button onClick={this.handleClickAdd5}>抽奖答题</Button>
      </div>
    )
  }

  handleClickAnswer = () => {
    this.props.history.push('/dati')
  }
  
  handleClickAdd5 = () => {
    
  }
}



// 将上面两个方法，将数据仓库的 state 和 修改 state 的方法映射到组件上，形成新的组件
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App
