const { app } = require("../http");
const request = require("supertest");

describe("just a test", () => {
    it("testing", () => {
        expect(true).toBe(true);
    })
})


describe("Testing my app server", () => {
    beforeAll(() => {
        console.log("Testando insert Admin")
        }
    );

    it("testing the main route", async () => {
        const res = await request(app).get("/login/insertAdmin");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    })
}) //Testando a rota para inserir admin