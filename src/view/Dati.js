import React from 'react'
import { connect } from 'react-redux'
import { getTmList } from '../network/asyncMethods'
import loadingGif from '../assets/img/loading.gif'
import { ActivityIndicator } from 'antd-mobile'

// 将 state 映射到 props 的函数, 默认传入 state
function mapStateToProps(state) {
  return {...state}
}

// 将修改 state 数据的方法，映射到 props，默认传入 dispatch
function mapDispatchToProps(dispatch) {
  return {
    getTimu: async () => {
      let list = await getTmList()
      dispatch({
        type: 'setQuestion',
        content: list
      })
    }
  }
}


class DatiCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 1,
      optionStyle: ['option-item', 'option-item', 'option-item', 'option-item'],
      isClick: false,
      isToastShow: false,
      toastText: '',
      score: 0
    }
  }

  componentWillMount() {
    this.props.getTimu()
  }

  render() {
    let questionArr = this.props.questionList
    let currentIndex = this.state.currentIndex
    let oStyle = this.state.optionStyle
    let isToastShow = this.state.isToastShow
    let toastText = this.state.toastText
    // let scroe = this.state.scroe

    // 如果一开始数据没有加载进来，就设置为 loading
    if (!questionArr.length) {
      return (
        <div>
          <img src={loadingGif} alt="加载中" />
        </div>
      )
    } else {
      let options = JSON.parse(questionArr[currentIndex].options)

      return (
        <div id="dati">
          <h2>题目：{questionArr[currentIndex].quiz}</h2>
          <div className="options">
            {
              options.map((item, index) => (
                <div className={oStyle[index]} key={index} onClick={() => this.handleClickAnswer(index)}>
                  {index + 1}. {item}  
                </div>
              ))
            }
          </div>
          <ActivityIndicator className="toast" size="large" animating={isToastShow} text={toastText} />
        </div>
      )
    }
  }

  // 点击选择答案
  handleClickAnswer = (index) => {
    let scroe = this.state.score

    // 判断是否点击过了
    if (this.state.isClick) return
    this.setState({
      isClick: true,
      isToastShow: true
    })

    // 获取正确答案的下标值
    let answer = this.props.questionList[this.state.currentIndex].answer
    let optionStyle = this.state.optionStyle

    // 判断是否选择正确
    if (index + 1 === Number(answer)) {
      optionStyle[index] = 'option-item correct'
      this.setState({
        toastText: '回答正确',
        scroe: scroe + 10
      })
    } else {
      optionStyle[Number(answer) - 1] = 'option-item correct'
      optionStyle[index] = 'option-item error'
      this.setState({
        toastText: '回答错误'
      })
    }

    // 设置颜色
    this.setState({
      optionStyle
    })

    let timer = setTimeout(() => {
      let currentIndex = this.state.currentIndex
      currentIndex++
      if (currentIndex === 10) {
        this.props.history.push('/result', { scroe: this.state.scroe })
        clearTimeout(timer)
        return
      } else {
        this.setState({
          currentIndex,
          optionStyle: ['option-item', 'option-item', 'option-item', 'option-item'],
          isClick: false,
          isToastShow: false
        })
        clearTimeout(timer)
      }
    }, 2000)
  }
}



// 将上面两个方法，将数据仓库的 state 和 修改 state 的方法映射到组件上，形成新的组件
const Dati = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatiCom)

export default Dati
