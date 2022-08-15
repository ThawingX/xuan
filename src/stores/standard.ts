import { defineStore } from 'pinia'
export const useStandardStore = defineStore('standard', {
  state: () => {
    return {
      standardLists: [],
      StandardForm: {
        key: '',
        chName: '',
        enName: '',
        state: '',
        CCS: '',
        ICS: '',
        pubDate: '',
        doDate: '',
        mainDepartment: '',
        centialDepartment: '',
        pubDeparment: '',
        comment: '',
        type: '',
        url: '',
      },
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
    }
  },
  actions: {

  },
})
