import Prismic from 'prismic-javascript'
import fdtPrismic from '~/tools/prismic.js'


const getSettings = async function () {
    let api = await fdtPrismic();

    try {
        const settings = await api.getByUID('settings', 'burocraziafacile');
        return settings
        } catch (e) {
            error({ message: 'Settings not found', statusCode: 404 })
        }
}


export default async function ({ store, route, error }) {
    let data  = await getSettings ();
    if (typeof data != 'undefined'){
        store.commit('SET_SETTINGS', data)
    }

}
