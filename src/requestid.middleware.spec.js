"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestid_middleware_1 = require("./requestid.middleware");
describe("requestID.middleware", () => {
    it("requestid returns an object with function requestId", () => {
        expect(typeof requestid_middleware_1.requestid).toEqual("function");
        expect(requestid_middleware_1.requestid.length).toBe(3);
    });
    it("middleware works and calls next()", (done) => {
        const req = {};
        const res = {};
        const next = () => {
            expect(req?.ids?.requestid).toEqual(req?.headers["X-REQUEST-ID"]);
            done();
        };
        (0, requestid_middleware_1.requestid)(req, res, next);
    });
    ;
    ([null, undefined]).forEach((res) => {
        it(`response can be ${res}`, (done) => {
            const req = {};
            const next = () => {
                expect(res).toBeFalsy();
                done();
            };
            (0, requestid_middleware_1.requestid)(req, res, next);
        });
    });
});
//# sourceMappingURL=requestid.middleware.spec.js.map