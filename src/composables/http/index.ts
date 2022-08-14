import axios from 'axios'

export const $upload = async (data = []) => {
  return axios({
    method: 'post',
    url: 'http://119.3.243.150:3300/upload',
    headers: {},
    data,
  })
}
