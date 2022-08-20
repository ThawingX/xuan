import axios from 'axios'

export const $upload = async (data = []) => {
  return axios({
    method: 'post',
    url: 'http://119.3.243.150:3300/upload',
    headers: {},
    data,
  })
}

export const $getStandard = async (requestKey = 'all') => {
  return axios({
    method: 'post',
    url: 'http://119.3.243.150:3300/getList',
    headers: {},
    data: { requestKey },
  })
}

export const $search = async (searchKey = '') => {
  return axios ({
    method: 'post',
    url: 'http://119.3.243.150:3300/checkStandard',
    headers: {},
    data: { searchKey },
  })
}
