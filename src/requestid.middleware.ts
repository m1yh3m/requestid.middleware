import { generate } from '@m1yh3m/random.bytes';
import { Request } from 'express';

const REQUEST_ID_HEADER_KEY = 'X-REQUEST-ID';

const requestid = (request: Request, response: Response, next: Function) => {
    if (!next) { throw new Error("ERROR: requestid.middleware next() not passed to middleware."); }
    if (!request || !response) { return next(); }

    const requestid = (request?.headers?.REQUEST_ID_HEADER_KEY as string) ||
        request?.ids?.requestid ||
        generate().hex();
    request.ids = request?.ids ?? { requestid };
    request.headers = request?.headers ?? { [REQUEST_ID_HEADER_KEY]: request.ids.requestid };
    return next();
}
export { requestid };
