import config from './config.json';

let Monitoring = {
    'init': function (options) {
        function logError(error) {
            try {
                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", `${config.server.host}/api/${options.dsn}/errors`, true);
                xhttp.setRequestHeader("Content-Type", "application/json");
                let body = JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)));
                var data = {
                    'errorlanguage': 'javascript',
                    'errorMessage': error.message,
                    'errorCode': 0,
                    'errorTrace': error.stack,
                    'systems_domain': window.location.origin,
                };

                if (navigator.userAgent.indexOf("Firefox") != -1) {
                    data.errorFile = error.fileName
                    data.errorLine = error.lineNumber
                }
                xhttp.send(JSON.stringify(data));
            } catch (error) {

            }
        }

        window.onerror = function (msg, url, line, columnNo, error) {
            logError(error)
        };

        window.addEventListener('unhandledrejection', function (event) {
            logError(event.reason)
        });
    }
};

export default Monitoring

