import request from './request'

let getTmList = async function () {
  let page = parseInt(Math.random() * 29)
  let config = {
    url: '/api/rtimu',
    params: {
      page
    }
  }
  let {
    data: res
  } = await request(config)
  // console.log(res)
  return res
}

export {
  getTmList
}