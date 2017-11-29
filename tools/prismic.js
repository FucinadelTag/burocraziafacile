import Prismic from 'prismic-javascript'

const apiEndpoint = 'http://burocraziafacile.prismic.io/api/v2';

const getApi = async function () {
    let api = await Prismic.getApi(apiEndpoint)
    return api;
}

export default getApi;
