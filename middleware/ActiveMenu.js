import _ from 'lodash'

export default function ({ store, route }) {
    let firsLevel = _.split (route.path, "/", 2)[1];
    store.commit('SET_ACTIVE_MENU', firsLevel)
}
