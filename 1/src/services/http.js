export const request = (url, method, contentType, options, body) => {
    console.log('http request: ', url)
    // if (!options) {
    //     options = {
    //         //TODO: set defaults
    //     };
    // }
    // // TODO: else enrich existing object as needed
    //
    // if (!options.headers) {
    //     options.headers = {
    //         'Content-Type': contentType,
    //         //'PTX-Version': pingyo.bootstrap.version,
    //         //'PTX-Ak': pingyo.bootstrap.key,
    //     };
    // }
    // // TODO: else enrich existing object as needed
    //
    // options.method = method;
    //
    // if (body) {
    //     options.body = body;
    // }
    //
    // return fetch(url, options);
}

export const http = {
    get: (url, options) => {
        // TODO: Set Method to GET and Add internal headers and then execute get request

        return request(url, 'GET', undefined, options);
    },
    postJson: (url, body, options) => {
        // TODO: same as above but sets Content-Type, and stringify objects into JSON if not already a string

        console.log('http postJson: ', url)
        // let json;
        //
        // if (typeof body === "string" || body instanceof String) {
        //     json = body;
        // } else {
        //     json = JSON.stringify(body);
        // }
        //
        // return request(url, 'POST', 'application/json; charset=utf-8', options, json);
    },
    load: function() {
        // const { core } =
          return import('/zzz.js').then(({core}) => {
              this.put = core.http.put;
          });
        // console.log(123, core)
        // this.put = core.bootstrap.http.put;
        // this.isExtended = true;
    },

    // methods to be loaded later
    put: function (url, body, options) {
        this.load().then(() => this.put(url, body, options));
        // await this.put(url);
    },
}