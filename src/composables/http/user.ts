import axios from 'axios'

export const $getUserInfo = async (account: String | null = '') => {
  return axios({
    method: 'get',
    url: `http://119.3.243.150:3399/user?account=${account}`,
    headers: { },
  })
}
