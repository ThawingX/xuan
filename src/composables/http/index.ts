import axios from 'axios'

export const $submit = async (data = {}) => {
  return axios({
    method: 'post',
    url: 'http://119.3.243.150:3399/standard',
    headers: {},
    data: { ...data },
  })
}

export const $getStandard = async (requestKey = 'all') => {
  return axios({
    method: 'post',
    url: 'http://119.3.243.150:3399/getList',
    headers: {},
    data: { requestKey },
  })
}

export const $search = async (searchKey = '') => {
  return axios ({
    method: 'post',
    url: 'http://119.3.243.150:3399/checkStandard',
    headers: {},
    data: { searchKey },
  })
}
export const $registerUser = async (searchKey = '') => {
  return axios ({
    method: 'post',
    url: 'http://119.3.243.150:3399/checkStandard',
    headers: {},
    data: { searchKey },
  })
}

export const $getUserinfo = async (searchKey = '') => {
  return axios ({
    method: 'post',
    url: 'http://119.3.243.150:3399/checkStandard',
    headers: {},
    data: { searchKey },
  })
}
