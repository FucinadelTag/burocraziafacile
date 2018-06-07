export const state = () => ({
  list: [],
  list_news: [],
  list_search: [],
  list_home: [],
  list_similar: [],
  list_callToActions: [],
  query: '',
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
    SET_LIST_SEARCH (state, list) {
        state.list_search = list;
    },
    SET_QUERY_SEARCH (state, query) {
        state.query = query;
    },
    SET_SIMILAR (state, list) {
        state.list_similar = list;
    },
}

export const getters = {
    getArticoli: state => {
        return state.list;
    },
    getArticoliSearch: state => {
        return state.list_search;
    },
    getArticolo: state => {
        return state.articolo;
    },
    getArticoliSimili: state => {
        console.log(state.list_similar);
        return state.list_similar;
    },
    getNews: state => {
        return state.list_news;
    },
    getArticoliHome: state => {
        return state.list_home;
    },
    getArticoliCallToActions: (state) => {
        return state.list_callToActions;
    },
    getQuerySearch: state => {
        return state.query;
    },
}
