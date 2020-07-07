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
  }
}


class Counter extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>恭喜你获得{this.props.location.state.scroe}分</h2>
        <Button onClick={this.handleClick}>回到首页</Button>
      </div>
    )
  }

  handleClick = () => {
    this.props.history.push('/')
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
