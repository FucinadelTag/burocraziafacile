import Prismic from 'prismic-javascript'
import {getApi} from '~/tools/prismic.js'


const getArticoliSearch = async function (store, queryString, error) {
    let api = await getApi(store);

    try {
        const data = await api.query(
            [
                Prismic.Predicates.at('document.type', 'articolo'),
                Prismic.Predicates.fulltext('document', queryString)
            ],
            { pageSize : 50, page : 1, orderings : '[document.first_publication_date desc]', fetchLinks: 'categoria.uid' }
        );
        return data
    } catch (e) {
        console.log(e);
        error({ message: 'Articoli Search not found', statusCode: 404 })
    }
}

export default async function ({ store, route, error }) {
    const queryString = route.query.q;
    let data  = await getArticoliSearch (store, queryString, error);
    store.commit('articoli/SET_QUERY_SEARCH', queryString)
    if (typeof data != 'undefined'){
        store.commit('articoli/SET_LIST_SEARCH', data.results)
    }

}
