import { createStore } from 'vuex'

export default createStore({
  state: {
    logNames: {
      astrolabe: '{"zh-CN":"星盘变化","zh-TW":"","en":""}',
      card: '{"zh-CN":"插卡","zh-TW":"","en":""}',
      change: '{"zh-CN":"公会改变","zh-TW":"","en":""}',
      changeflag: '{"zh-CN":"玩家改名&安全密码","zh-TW":"","en":""}',
      chat: '{"zh-CN":"聊天日志","zh-TW":"","en":""}',
      complete: '{"zh-CN":"完成活动","zh-TW":"","en":""}',
      consume: '{"zh-CN":"游戏币消耗","zh-TW":"","en":""}',
      income: '{"zh-CN":"游戏币获取","zh-TW":"","en":""}',
      item: '{"zh-CN":"物品获取","zh-TW":"","en":""}',
      props: '{"zh-CN":"物品使用","zh-TW":"","en":""}'
    },
    logSearchCond: {
      card: {
        time: {
          label: {
            'zh-CN': '时间',
            'zh-TW': '',
            en: ''
          },
          type: 'timestamp',
          content: ''
        }
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    logNames: (state: any) => {
      return state.logNames
    }
  },
  modules: {
  }
})
