export default ({ app }) => {

    var addthisScript = document.createElement('script');
    addthisScript.setAttribute('src', 'http://s7.addthis.com/js/300/addthis_widget.js#domready=1');
    document.body.appendChild(addthisScript);
}
