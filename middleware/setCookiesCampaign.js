import _ from 'lodash'

const setCookie = (utmQuery, app) => {
    app.$cookies.set('utmQuery', utmQuery, {
        maxAge: 60 * 60 * 24 * 365,
        path: '/'
    });
}

export default function ({ store, route, app }) {
    let utmQuery = route.query;

    if (_.size(utmQuery) > 0 && _.has(utmQuery, 'utm_source')) {
        setCookie (utmQuery, app);
    }

}
