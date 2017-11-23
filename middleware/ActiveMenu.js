export default function ({ store, route }) {
  store.commit('SET_ACTIVE_MENU', route.name)
}
