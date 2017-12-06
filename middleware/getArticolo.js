import Prismic from 'prismic-javascript'
import {getApi, getDocumentById} from '~/tools/prismic.js'
import _ from 'lodash'


const getArticolo = async function (uid) {
    let api = await getApi();

    try {
        const articolo = await api.getByUID('articolo', uid);
        return articolo
        } catch (e) {
            error({ message: 'Settings not found', statusCode: 404 })
        }
}


const getCallToAction = async function (item) {

        if (item.call_to_action.id){
            let callToAction = await getDocumentById (item.call_to_action.id);

            //console.log(callToAction);

            return callToAction;
        }

        return null

}

const manageParagrafo = async function (slice, key) {
    if (slice.slice_type == 'paragrafo'){
        let callToAction = await Promise.all (_.map(slice.items, await getCallToAction));

        let callToActionParagrafo = {};

        callToActionParagrafo[key] = callToAction;
        //
        // callToActionParagrafo[key+1] = callToAction;

        return callToAction;

    }

}

const getParagrafiMap = async function (articolo) {
    let arrayCallToAction = await Promise.all (_.map(articolo.data.body, await manageParagrafo));

    if (arrayCallToAction.length > 0){
        return arrayCallToAction;
    }

    return null;

}

const getParagrafi = async function (articolo) {

    var callToActionsArticolo = [];
    _.forEach(articolo.data.body, async function(slice, keyParagrafo) {

        let paragrafo = await manageParagrafo (slice, keyParagrafo);

        console.log(paragrafo);

        return paragrafo;
    });
}


export default async function ({ store, route, error }) {

    let uid = route.params.slug;

    let articolo  = await getArticolo (uid);
    let callToActions = await getParagrafiMap (articolo);
    console.log(callToActions);
    if (typeof articolo != 'undefined'){
        store.commit('articoli/SET_ARTICOLO', articolo)
        store.commit('articoli/SET_LIST_CALLTOACTION', callToActions)
    }

}
