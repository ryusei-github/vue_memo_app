import { createStore } from 'vuex'

// メモローカルストレージに永続化
import { VuexPersistence } from 'vuex-persist'
const vuexPersist = new VuexPersistence ({
storage: localStorage
})

export default createStore({
  state: {
    count: 0,
    memos: []
  },
  getters: {
    getCount: (state) => {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    },
    getMemoById: (state) => (id) =>{
      return state.memos.find(memo => memo.id === id)
    }
  },
  mutations: {
    // メモローカルストレージに永続化
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,

    // メモを保存するためのコードを書く
    save (state,newMemo) {
      if (newMemo.id) {
        let x = state.memos.find(memo => memo.id === newMemo.id)
      x.title = newMemo.title
      x.content = newMemo.content
      } else {
      newMemo.id = ++state.count
      state.memos.unshift(newMemo)
      }
    },
    delete (state, id) {
      state.memos = state.memos.filter(memo => memo.id !== id)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
