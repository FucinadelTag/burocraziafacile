export const state = () => ({
  list: [],
  articolo: false
})

export const mutations = {
    SET_LIST (state, list) {
        state.list = list;
    },
    SET_ARTICOLO (state, articolo) {
        state.articolo = articolo;
    }
}

export const getters = {
    getArticoli: state => {
        return state.list;
    },
    getArticolo: state => {
        return state.articolo;
    }
}
