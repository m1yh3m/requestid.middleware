"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestid = void 0;
const random_bytes_1 = require("@m1yh3m/random.bytes");
const REQUEST_ID_HEADER_KEY = 'X-REQUEST-ID';
const requestid = (request, response, next) => {
    if (!next) {
        throw new Error("ERROR: requestid.middleware next() not passed to middleware.");
    }
    if (!request.headers) {
        throw new Error("ERROR: request doesn't have headers.");
    }
    if (!request || !response) {
        return next();
    }
    const requestid = request?.headers[REQUEST_ID_HEADER_KEY] ??
        (request?.ids?.requestid ||
            (0, random_bytes_1.generate)().hex());
    request.ids = request?.ids ?? { requestid };
    request.headers = { ...request.headers, [REQUEST_ID_HEADER_KEY]: request.ids.requestid };
    return next();
};
exports.requestid = requestid;
//# sourceMappingURL=requestid.middleware.js.map