import _ from 'lodash'


const getCategorie = function (){
    return [
        {
            name: 'Lavoro',
            link: 'lavoro',
            isActive: ''
        },
        {
            name: 'Impresa',
            link: 'impresa',
            isActive: ''
        },
        {
            name: 'Fisco',
            link: 'fisco',
            isActive: ''
        },
        {
            name: 'Auto',
            link: 'auto',
            isActive: ''
        },
        {
            name: 'Famiglia',
            link: 'famiglia',
            isActive: ''
        },
        {
            name: 'Casa',
            link: 'casa',
            isActive: ''
        },
    ]
}


export const state = () => ({
  activeMenu: false,
  categorie: getCategorie(),

})

export const mutations = {
  SET_ACTIVE_MENU (state, active_menu) {
    state.activeMenu = active_menu || false
  }
}

export const getters = {
    getCategorie: state => {

        let menu_dataOk = state.categorie;

        let finded = _.find(menu_dataOk, ['link', state.activeMenu]);

        _.set (finded, 'isActive', 'active');

        return menu_dataOk;
    }
}
