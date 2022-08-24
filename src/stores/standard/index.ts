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
      areaLists: [
        {
          mName: '湖北',
          requestKey: 'Hubei',
        },
        {
          mName: '山东',
          requestKey: 'Shandong',
        },
        {
          mName: '重庆',
          requestKey: 'Chongqing',
        },
        {
          mName: '上海',
          requestKey: 'Shanghai',
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
    }
  },
  getters: {

  },
  actions: {
    getDivideStandardLists(dividedNums = 10, currPage = 1, totalPage = 10): number[] {
      return this.standardLists.slice(dividedNums * (currPage - 1), currPage * dividedNums)
    },
  },
})
