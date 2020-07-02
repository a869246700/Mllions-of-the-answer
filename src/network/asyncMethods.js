import request from './request'

let fns = {
  async getTuList() {
    let page = 2
    let config = {
      url: '/api/rtimu',
      params: {
        page
      }
    }
    let { data: res } = await request(config)
    console.log(res)
  }
}

export default fns