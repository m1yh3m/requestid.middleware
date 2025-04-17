import { Request } from "express";
import { requestid } from "./requestid.middleware";

describe("requestID.middleware", () => {
    it("requestid returns an object with function requestId", () => {
        expect(typeof requestid).toEqual("function");
        expect(requestid.length).toBe(3);
    });
    it("middleware works and calls next()", (done) => {
        const req = { headers: {} } as any;
        const res = {} as any;
        const next = () => {
            expect(req?.ids?.requestid).toEqual(req?.headers["X-REQUEST-ID"]);
            done();
        };
        requestid(req, res, next);
    });

    ; ([null, undefined]).forEach((res: any) => {
        it(`response can be ${res}`, (done) => {
            const req = { headers: {} } as any;
            const next = () => {
                expect(res).toBeFalsy();
                done();
            };
            requestid(req, res, next);
        });
    });
});
