import _ from 'lodash'

const linkWithTag =  function (linkUrl, utmQuery, content, uid) {
    let taggetString = 'utm_source=burocraziafacile&utm_medium='+ content +'&utm_campaign=' + uid;

    if (typeof utmQuery != 'undefined') {

        let tags = {
            utm_source: 'burocraziafacile',
            utm_medium: utmQuery.utm_source,
            utm_campaign: utmQuery.utm_medium,
            utm_content: content,
            utm_term: uid,
            target: utmQuery.target,
        }

        taggetString = '';

        _.forEach(tags, function(value, key) {
            if (typeof value != 'undefined') {
                taggetString = taggetString + key + '=' + value + '&';
            }

        });
    }



    console.log(taggetString);

    let taggedLink = linkUrl + '/?' + taggetString;

    return taggedLink;
}


export {linkWithTag};
