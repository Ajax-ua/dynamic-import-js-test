export const urlParser = {
    isSecureScheme: () => {
        // TODO: return true when current client session is running under SSL/TLS; otherwise false
        // TODO: We need this to make assertions later in the process
    },
    params: {
        read: (paramName) => {
            // TODO: returns the value of a named param, array of values if param has multiple values, or undefined if not found
        },
        readAll: () => {
            // TODO: returns array of name/value pairs listing all params found in the current client address, or undefined if none found
        }
    },
    getUrl: () => {
        return window.location.href;
    }
}
