// import { request, http } from './services/http.js';

const bootstrap = import('bootstrap.js');
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
                bootstrap.then(bs => {
                    console.log(7777777, bs)
                    bs.core.http.postJson('metrics postJson')
                })
                // http.postJson('metrics postJson')
            },
            save2: () => {
                console.log('core save: ', core)
                bootstrap.then(bs => {
                    console.log(7777777, bs)
                    bs.core.http.postJson('metrics postJson')
                })
                // http.postJson('metrics postJson')
            },
        },
    },
}

// window.core = 1;
// export default {
//     core
// };
// export default function(){
//     return core;
// }