import {httpGetRequest} from './utils/dataFetcher.js'

window.addEventListener('load', function(e) {
    httpGetRequest().then(data=>console.log(data))

})