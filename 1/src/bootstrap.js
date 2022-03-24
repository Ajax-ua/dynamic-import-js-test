import { storage } from './services/storage.js';
import { http } from './services/http.js';
import { urlParser } from './services/url-parser.js';

const PTSCRIPT_BOOTSTRAP_ELEMENT_ID = "pingyo-bootstrap";
const PTSCRIPT_NAMESOURCE_SOURCEPATH = "/ptcorenamespace";
const PTSCRIPT_CORENAMESPACE_ELEMENT_ID = "pingyo-corenamespace";
const ERROR_CAPTURE_AUTHORITY_URL = 'https://pt-coreservice.pingyo.com:9467/api/system/clienterror';

const pingyo = {
  // reference to self
  ptBootstrapScriptElement: document.getElementById(PTSCRIPT_BOOTSTRAP_ELEMENT_ID),
  // Fields
  scriptAuthority: "@Model.ScriptAuthorityUrl",
  scriptHost: "@Model.ScriptAuthorityUrl",
  version: "@Model.Version",
  key: "@Model.Key",
  regionCode: "@Model.RegionCode",
  sellerContext: {
    siteDefault: {
      sellerID: null,
      subID: null,
      campaignID: null
    },
    effective: {
      sellerID: null,
      subID: null,
      campaignID: null,
      clickID: null,
      cost: null
    },
  },
  // Construction
  init: () => {
    // Load additional scripts to expand the Namespace as needed
    // Initialize default behaviours

    // set timer... then load namespace scripts

    pingyo.core.errors.subscribeToDomErrorEvents();

    //let namespaceUrl = pingyo.bootstrap.scriptHost + PTSCRIPT_NAMESOURCE_SOURCEPATH;
    //pingyo.core.contentManagement.loadScriptFromSrc(namespaceUrl, PTSCRIPT_CORENAMESPACE_ELEMENT_ID);
  },
  // load: (scriptName) => {
  //   return import(`./${scriptName}.js`).then((obj) => {
  //     console.log(23232332, obj)
  //     pingyo[scriptName] = {
  //       ...(pingyo[scriptName] || {}),
  //       ...obj[scriptName].extension,
  //     };
  //   });
  // },
  loadScript: (scriptName) => {
    console.log(555, pingyo[scriptName])
    return import('/zzz.js').then((obj) => {
      console.log(6661, obj);
      console.log(6662, obj[scriptName].extension);
      debugger
      pingyo[scriptName] = {
        ...(pingyo[scriptName] || {}),
        ...obj[scriptName].extension,
      };
      console.log(777, pingyo[scriptName])
    }).catch((err) => {console.error(err)});
  },
  core: {
    http,
    storage,
    urlParser,
  },
};
window.pingyo = pingyo;
console.log(111111111, pingyo)