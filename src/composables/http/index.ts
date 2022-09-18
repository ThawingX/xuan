import axios from 'axios'

export const $submit = async (data = {}) => {
  return axios({
    method: 'post',
    url: 'http://119.3.243.150:3399/standard',
    headers: {},
    data: { ...data },
  })
}

export const $getStandard = async () => {
  return axios({
    method: 'get',
    url: 'http://119.3.243.150:3399/standard/list',
    headers: {},
  })
}

export const $search = async (searchKey = '') => {
  return axios ({
    method: 'get',
    url: `http://119.3.243.150:3399/standard/key?key=${searchKey}`,
    headers: {},
  })
}
