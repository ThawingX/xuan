import { defineStore } from 'pinia'
import type { OptionNameStore } from './type/optionNameStore'
import { useStandardFormStore } from './standardForm'
const standardFormStore = useStandardFormStore()
export const useOptionNameStore = defineStore('optionNameStore', {
  state: () => {
    return {
    }
  },
  getters: {
    type(): string {
      return standardFormStore.StandardForm.standardType
    },
    commonFlag(): boolean {
      return this.type === '国家标准' || this.type === '地方标准' || this.type === '行业标准'
    },
    id(): OptionNameStore {
      return {
        name: this.type === '团体标准' ? '团体编号' : '标准号',
        isShow: true,
      }
    },
    state(): OptionNameStore {
      return {
        name: this.type === '国际标准' ? '' : '标准状态',
        isShow: this.type !== '国际标准',
      }
    },
    property(): OptionNameStore {
      return {
        name: this.type === '国际标准' ? '' : '标准性质',
        isShow: this.type !== '国际标准',
      }
    },
    sort(): OptionNameStore {
      return {
        name: this.commonFlag ? '标准类别' : '',
        isShow: this.commonFlag,
      }
    },
    releaseTime(): OptionNameStore {
      return {
        name: '发布日期',
        isShow: true,
      }
    },
    implementationTime(): OptionNameStore {
      return {
        name: '实施日期',
        isShow: true,
      }
    },
    chName(): OptionNameStore {
      const flag = this.type !== '国际标准'
      return {
        name: flag ? '中文标准名称' : '标准名称',
        isShow: flag,
      }
    },
    enName(): OptionNameStore {
      const flag = this.type === '国际标准'
      return {
        name: flag ? '标准名称' : '英文标准名称',
        isShow: flag,
      }
    },
    CCS(): OptionNameStore {
      return {
        name: this.commonFlag ? '中文标准分类号' : '',
        isShow: this.commonFlag,
      }
    },
    ICS(): OptionNameStore {
      return {
        name: this.commonFlag ? '英文标准分类号' : '',
        isShow: this.commonFlag,
      }
    },
    administrativeDepartment(): OptionNameStore {
      const tempName = this.type === '团体标准' ? '团体名称' : '公司名称'
      return {
        name: this.commonFlag ? '归口单位' : tempName,
        isShow: this.type !== '国际标准',
      }
    },
    responsibleDepartment(): OptionNameStore {
      return {
        name: this.commonFlag ? '主管部门' : '',
        isShow: this.commonFlag,
      }
    },
    replaceStandard(): OptionNameStore {
      return {
        name: this.type !== '国际标准' ? '替代标准' : '',
        isShow: this.type !== '国际标准',
      }
    },
    city(): OptionNameStore {
      return {
        name: this.type === '地方标准' ? '所属地方' : '',
        isShow: this.type === '地方标准',
      }
    },
    industryClassfication(): OptionNameStore {
      return {
        name: this.type === '行业标准' ? '行业分类' : '',
        isShow: this.type === '行业标准',
      }
    },
  },
  actions: {

  },
})
