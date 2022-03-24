export const contentManagement = {
    /**
    * @@param {string} url full URL of the script source to be loaded
    * @@param {string} id id script element to be added
    * @@param {string} [callback] optional callback to be executed once loaded
    */
    loadScriptFromSrc: (url, targetElementId, callback) => {
        if (contentManagement.elementIdExists(targetElementId)) {
            // TODO: id exists... what now?
        }

        let script = document.createElement("script");

        script.src = url
        script.async = true;
        script.id = targetElementId;
        script.onload = callback

        document.body.appendChild(script);
    },
    elementIdExists: (id) => {
        if (!id) {
            return false;
        }

        return !!document.getElementById(id);
    },
}