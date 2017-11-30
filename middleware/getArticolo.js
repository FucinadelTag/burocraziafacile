import Prismic from 'prismic-javascript'
import fdtPrismic from '~/tools/prismic.js'


const getArticolo = async function (uid) {
    let api = await fdtPrismic();

    try {
        const articolo = await api.getByUID('articolo', uid);
        return articolo
        } catch (e) {
            error({ message: 'Settings not found', statusCode: 404 })
        }
}


export default async function ({ store, route, error }) {

    let uid = route.params.slug;

    let data  = await getArticolo (uid);
    if (typeof data != 'undefined'){
        store.commit('articoli/SET_ARTICOLO', data)
    }

}
