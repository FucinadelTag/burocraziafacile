import Prismic from 'prismic-javascript'
import fdtPrismic from '~/tools/prismic.js'


const getArticoliHome = async function (store, error) {
    let api = await fdtPrismic(store);

    try {
        const data = await api.query(
            [
                Prismic.Predicates.at('document.type', 'articolo'),
                Prismic.Predicates.at('my.articolo.tipo', 'articolo')
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
    let data  = await getArticoliHome (store, error);
    if (typeof data != 'undefined'){
        store.commit('articoli/SET_LIST_HOME', data.results)
    }

}
