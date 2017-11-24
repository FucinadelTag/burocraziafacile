export const state = () => ({
  list: []
})

export const mutations = {
  SET_LIST (state, list) {
    state.list = list;
  }
}

export const getters = {
    getArticoli: state => {
        return state.list;
    }
}
