const cookies = {
    setCookie: (key, value, options) => {
        options = {
            path: '/',
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

        for (let optionKey in options) {
            updatedCookie += `; ${optionKey}`;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += `=${optionValue}`;
            }
        }

        document.cookie = updatedCookie;
    },
    eraseCookie: (cookieName) => {
        document.cookie = cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    getCookie: (cookieName) => {
        const name = `${cookieName}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }
}

export const storage = {
    removeItem: (key) => {
        if (!key) return;
        sessionStorage.removeItem(key);
        localStorage.removeItem(key);
        cookies.eraseCookie(key);
    },
    setItem(key, value) {
        if (!key && !value) return;

        this.remove(key);

        sessionStorage.setItem(key, value);
        if (sessionStorage.getItem(key)) {
            return;
        }

        localStorage.setItem(key, value);
        if (localStorage.getItem(key)) {
            return;
        }

        // TODO: default value for 'expires'
        cookies.setCookie(key, value, { expires: ''});
    },
    getItem(key) {
        let storedValue = null;

        if (sessionStorage.getItem(key)) {
            storedValue = sessionStorage.getItem(key);
        }
        else if (localStorage.getItem(key)) {
            storedValue = localStorage.getItem(key);
        }
        else if (getCookie(key)) {
            storedValue = cookies.getCookie(key);
        }

        return storedValue;
    },
}