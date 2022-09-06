import { defineStore } from 'pinia'

export const useStandardStore = defineStore('standard', {
  state: () => {
    return {
      standardLists: [],
      typeLists: [
        {
          mName: '所有标准',
          requestKey: 'all',
        },
        {
          mName: '国家标准',
          requestKey: 'country',
        },
        {
          mName: '行业标准',
          requestKey: 'industry',
        },
        {
          mName: '地方标准',
          requestKey: 'location',
        },
        {
          mName: '团体标准',
          requestKey: 'group',
        },
        {
          mName: '国际标准',
          requestKey: 'national',
        },
        {
          mName: '企业标准',
          requestKey: 'bussiness',
        },
      ],
      propertyLists: [
        {
          mName: '推荐性',
          requestKey: 'recommended',
        },
        {
          mName: '指导性技术文件',
          requestKey: 'guid',
        },
        {
          mName: '强制性',
          requestKey: 'mandatory',
        },
      ],
      stateLists: [
        {
          mName: '即将实施',
          requestKey: 'soon',
        },
        {
          mName: '现行',
          requestKey: 'in',
        },
        {
          mName: '被代替',
          requestKey: 'replaced',
        },
        {
          mName: '废止',
          requestKey: 'obsolete',
        },
      ],
      industryLists: [
        {
          mName: 'LD 劳动和劳动安全',
          requestKey: 'LD',
        },
        {
          mName: 'YY 医药',
          requestKey: 'YY',
        },
        {
          mName: 'FZ 纺织',
          requestKey: 'FZ',
        },
        {
          mName: 'QB 轻工',
          requestKey: 'QB',
        },
      ],
      ICSLists: [
        {
          mName: '11_医药卫生技术',
          requestKey: '11',
        },
        {
          mName: '13_环保、保健和安全',
          requestKey: '13',
        },
        {
          mName: '55_货物的包装和调运',
          requestKey: 'replaced',
        },
      ],
      cites: [
        {
          cityName: '四川',
          cityCode: 'Sichuan',
        },
        {
          cityName: '湖北',
          cityCode: 'Hubei',
        },
        {
          cityName: '山东',
          cityCode: 'Shandong',
        },
        {
          cityName: '重庆',
          cityCode: 'Chongqing',
        },
        {
          cityName: '上海',
          cityCode: 'Shanghai',
        },
        {
          cityName: '北京',
          cityCode: 'Beijing',
        },
        {
          cityName: '天津',
          cityCode: 'Tianjin',
        },
        {
          cityName: '河北',
          cityCode: 'Hebei',
        },
        {
          cityName: '河南',
          cityCode: 'Henan',
        },
        {
          cityName: '湖南',
          cityCode: 'Hunan',
        },
        {
          cityName: '江苏',
          cityCode: 'Jiangsu',
        },
        {
          cityName: '浙江',
          cityCode: 'Zhejiang',
        },
        {
          cityName: '安徽',
          cityCode: 'Anhui',
        },
        {
          cityName: '福建',
          cityCode: 'Fujian',
        },
        {
          cityName: '江西',
          cityCode: 'Jiangxi',
        },
        {
          cityName: '山西',
          cityCode: 'Shanxi',
        },
        {
          cityName: '内蒙古',
          cityCode: 'Neimenggu',
        },
        {
          cityName: '广西',
          cityCode: 'Guangxi',
        },
        {
          cityName: '西藏',
          cityCode: 'Xizang',
        },
        {
          cityName: '陕西',
          cityCode: 'Shanxi',
        },
        {
          cityName: '甘肃',
          cityCode: 'Gansu',
        },
        {
          cityName: '青海',
          cityCode: 'Qinghai',
        },
        {
          cityName: '宁夏',
          cityCode: 'Ningxia',
        },
        {
          cityName: '新疆',
          cityCode: 'Xinjiang',
        },
        {
          cityName: '贵州',
          cityCode: 'Guizhou',
        },
        {
          cityName: '云南',
          cityCode: 'Yunnan',
        },
        {
          cityName: '海南',
          cityCode: 'Hainan',
        },
        {
          cityName: '台湾',
          cityCode: 'Taiwan',
        },
        {
          cityName: '香港',
          cityCode: 'Hongkong',
        },
        {
          cityName: '澳门',
          cityCode: 'Macao',
        },
        {
          cityName: '甘肃',
          cityCode: 'Gansu',
        },
        {
          cityName: '辽宁',
          cityCode: 'Liaoning',
        },
        {
          cityName: '吉林',
          cityCode: 'Jilin',
        },
        {
          cityName: '黑龙江',
          cityCode: 'Heilongjiang',
        },
        {
          cityName: '其他',
          cityCode: 'Other',
        },
        {
          cityName: '全国',
          cityCode: 'Global',
        },
      ],
    }
  },
  getters: {

  },
  actions: {
    getDivideStandardLists(dividedNums = 10, currPage = 1, totalPage = 10): number[] {
      if (!this.standardLists)
        return []

      return this.standardLists.slice(dividedNums * (currPage - 1), currPage * dividedNums)
    },
  },
})
