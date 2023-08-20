"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_body_1 = __importDefault(require("koa-body"));
const products_1 = __importDefault(require("./controllers/products"));
class Server {
    start(port) {
        const app = new koa_1.default();
        app.use((0, koa_body_1.default)());
        app.use(products_1.default.routes());
        return app.listen(port, () => { console.log("Started server on port: " + port); });
    }
}
exports.default = new Server();
