import KoaRouter from 'koa-router';
import ProductsService from '../services/products';
import { Context } from 'koa';

class ProductsContoller extends KoaRouter {
    constructor(){

        super();
        super.get('/products',this.getAllProducts);
    }


  getAllProducts(context:Context){
    context.body = ProductsService.getAll();
   }

}

export default new ProductsContoller();