import axios from 'axios'

export const $apply = async (data = {}) => {
  return axios({
    method: 'post',
    url: 'http://119.3.243.150:3399/user/apply',
    headers: {},
    data: { ...data },
  })
}

export const $reacallPwd = async (data = {}) => {
  return axios({
    method: 'post',
    url: 'http://119.3.243.150:3399/user/recallPwd',
    headers: {},
    data: { ...data },
  })
}

export const $login = async (data = {}) => {
  return axios({
    method: 'post',
    url: 'http://119.3.243.150:3399/user/login',
    headers: {},
    data: { ...data },
  })
}
