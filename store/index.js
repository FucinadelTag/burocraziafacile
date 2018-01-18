import _ from 'lodash'
import PrismicDom from 'prismic-dom'


const getCategorie = function (){
    return [
        // {
        //     name: 'Lavoro',
        //     link: 'lavoro',
        //     isActive: ''
        // },
        // {
        //     name: 'Impresa',
        //     link: 'impresa',
        //     isActive: ''
        // },
        // {
        //     name: 'Fisco',
        //     link: 'fisco',
        //     isActive: ''
        // },
        {
            name: 'Auto',
            link: 'auto',
            isActive: ''
        },
        // {
        //     name: 'Famiglia',
        //     link: 'famiglia',
        //     isActive: ''
        // },
        {
            name: 'Casa',
            link: 'casa',
            isActive: ''
        },
        {
            name: 'Azienda',
            link: 'azienda',
            isActive: ''
        },
    ]
}


export const state = () => ({
  activeMenu: false,
  categorie: getCategorie(),
  settings: false

})

export const mutations = {
    SET_ACTIVE_MENU (state, active_menu) {
        state.activeMenu = active_menu || false
    },
    SET_SETTINGS (state, settings) {
      state.settings = settings || false
    }
}

export const getters = {
    getCategorie: state => {

        let menu_dataOk = state.categorie;

        let finded = _.find(menu_dataOk, ['link', state.activeMenu]);

        _.set (finded, 'isActive', 'active');

        return menu_dataOk;
    },
    getCurrentCategoria: state => {

        let menu_dataOk = state.categorie;

        let finded = _.find(menu_dataOk, ['link', state.activeMenu]);

        return finded

    },
    getLogoUrl: state => {

        let settings = state.settings;

        let logoUrl = settings.data.logo.url

        return logoUrl;
    },
    getLogoPraticheUrl: state => {

        let settings = state.settings;

        let logoUrl = settings.data.logo_pratiche.url

        return logoUrl;
    },
    getTitle: state => {

        let settings = state.settings;

        let title = PrismicDom.RichText.asText(settings.data.title)

        return title;
    },
    getDescription: state => {

        let settings = state.settings;

        let description = PrismicDom.RichText.asText(settings.data.description)

        return description;
    },
}
