import Prismic from 'prismic-javascript'

const apiEndpoint = 'http://burocraziafacile.prismic.io/api/v2';

const getApi = async function () {
    let api = await Prismic.getApi(apiEndpoint)
    return api;
}

const getDocumentById = async function (id) {
    let api = await getApi();

    //console.log(id);

    try {
        const document = await api.getByID(id);
        //console.log(document);
        return document
        } catch (e) {
            error({ message: 'Document not found', statusCode: 404 })
        }
}


const getDocumentByUID = async function (type, UID) {
    let api = await getApi();

    //console.log(id);

    try {
        const document = await api.getByUID(type, UID);
        //console.log(document);
        return document
        } catch (e) {
            error({ message: 'Document by UID not found', statusCode: 404 })
        }
}

export {getApi, getDocumentById, getDocumentByUID};
