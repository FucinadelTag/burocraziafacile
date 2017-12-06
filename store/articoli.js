export const state = () => ({
  list: [],
  list_news: [],
  list_home: [],
  list_callToActions: [],
  articolo: false
})

export const mutations = {
    SET_LIST (state, list) {
        state.list = list;
    },
    SET_LIST_NEWS (state, list) {
        state.list_news = list;
    },
    SET_LIST_HOME (state, list) {
        state.list_home = list;
    },
    SET_ARTICOLO (state, articolo) {
        state.articolo = articolo;
    },
    SET_LIST_CALLTOACTION (state, list) {
        state.list_callToActions = list;
    },
}

export const getters = {
    getArticoli: state => {
        return state.list;
    },
    getArticolo: state => {
        return state.articolo;
    },
    getNews: state => {
        return state.list_news;
    },
    getArticoliHome: state => {
        return state.list_home;
    },
    getArticoliCallToActions: (state) => {
        return state.list_callToActions;
    }
}
