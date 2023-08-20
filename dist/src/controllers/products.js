"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const products_1 = __importDefault(require("../services/products"));
class ProductsContoller extends koa_router_1.default {
    constructor() {
        super();
        super.get('/products', this.getAllProducts);
    }
    getAllProducts(context) {
        context.body = products_1.default.getAll();
    }
}
exports.default = new ProductsContoller();
