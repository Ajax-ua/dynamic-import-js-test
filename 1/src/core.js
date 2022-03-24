import { request, http } from './services/http.js';

export const core = {
    http: {
        post: (msg) => { console.log(msg || 'post') },
        put: (url, body, options) => {
            console.log('put');
            // return request(url, 'POST', 'application/json; charset=utf-8', options, body);
        },
    },
    extension: {
        metrics: {
            save: () => {
                console.log('core save: ', core)
                http.postJson('metrics postJson')
            },
        },
    },
}