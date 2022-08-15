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
        property: '',
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
    }
  },
  actions: {

  },
})
