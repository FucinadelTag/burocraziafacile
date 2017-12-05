import Prismic from 'prismic-javascript'
import {getApi} from '~/tools/prismic.js'

//const apiEndpoint = 'http://burocraziafacile.prismic.io/api/v2';

// const getApi = async function (store) {
//     let api = await Prismic.getApi(store.prismicApiEndpoint)
//     return api;
// }

const getCategoriaBySlug = async function (slug) {
    let api = await getApi();

    try {
        const categoria = await api.getByUID('categoria', slug);
        return categoria
        } catch (e) {
            error({ message: 'Categoria not found', statusCode: 404 })
        }
}

const getPrismicDataByCategoriaId = async function (store, error) {
    let api = await getApi(store);
    let categoria = await getCategoriaBySlug(store.state.activeMenu);

    try {
        const data = await api.query(
            [
                Prismic.Predicates.at('document.type', 'articolo'),
                Prismic.Predicates.at('my.articolo.categoria', categoria.id)
            ],
            { pageSize : 20, page : 1, orderings : '[my.articolo.first_publication_date desc]', fetchLinks: 'categoria.uid' }
        );
        return data
    } catch (e) {
        console.log(e);
        error({ message: 'Data not found', statusCode: 404 })
    }
}

export default async function ({ store, route, error }) {
    let data  = await getPrismicDataByCategoriaId (store, error);
    if (typeof data != 'undefined'){
        //console.log (data);
        store.commit('articoli/SET_LIST', data.results)
    }

}
