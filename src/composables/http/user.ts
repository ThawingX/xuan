import axios from 'axios'

export const $getUserInfo = async (account: String | null = '') => {
  return axios({
    method: 'get',
    url: `http://119.3.243.150:3399/user?account=${account}`,
    headers: { },
  })
}

export const $getAppliedList = async () => {
  return axios({
    method: 'get',
    url: 'http://119.3.243.150:3399/user/review',
    headers: { },
  })
}

export const $allowApply = async (data = {}) => {
  return axios({
    method: 'post',
    url: 'http://119.3.243.150:3399/user/review',
    headers: { },
    data: { ...data, doMethod: 'allow' },
  })
}

export const $rejectApply = async (data = {}) => {
  return axios({
    method: 'post',
    url: 'http://119.3.243.150:3399/user/review',
    headers: { },
    data: { ...data, doMethod: 'reject' },
  })
}
